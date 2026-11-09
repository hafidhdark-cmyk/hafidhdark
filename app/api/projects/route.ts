import { NextResponse } from "next/server";
import { projects, Project } from "@/data/projects";

// In-memory runtime cache for admin additions during dev/session (ready to connect to Supabase/PostgreSQL)
let dynamicProjects: Project[] = [...projects];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: dynamicProjects.length,
    projects: dynamicProjects,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.description || !body.category) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (title, description, category)" },
        { status: 400 }
      );
    }

    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newProject: Project = {
      id: body.id || slug,
      slug,
      title: body.title,
      kicker: body.kicker || "NEW BUILD // ARCHIVE",
      category: body.category,
      categories: body.categories || [body.category],
      featured: Boolean(body.featured),
      role: body.role || "Software Engineer",
      year: body.year || new Date().getFullYear().toString(),
      description: body.description,
      longDescription: body.longDescription || body.description,
      tags: body.tags || [],
      metrics: body.metrics || [],
      highlights: body.highlights || [],
      links: body.links || {},
      image: body.image,
    };

    // Prepend to list
    dynamicProjects = [newProject, ...dynamicProjects];

    return NextResponse.json({
      success: true,
      message: "Project successfully registered",
      project: newProject,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to parse project payload" },
      { status: 500 }
    );
  }
}
