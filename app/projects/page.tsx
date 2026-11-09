"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Search,
  Terminal,
  X,
  Layers,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react";
import { projects as initialProjects, projectCategories, Project } from "@/data/projects";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const [projectList, setProjectList] = React.useState<Project[]>(initialProjects);

  // Attempt to fetch any dynamic projects added via API (for future Admin synchronization)
  React.useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.projects)) {
          setProjectList(data.projects);
        }
      })
      .catch(() => {
        // Fallback to static list
      });
  }, []);

  // Filter projects by category and search query
  const filteredProjects = React.useMemo(() => {
    return projectList.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.category === selectedCategory ||
        (project.categories && project.categories.includes(selectedCategory as Project["category"]));

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projectList, selectedCategory, searchQuery]);

  return (
    <div className="flex w-full flex-col px-6 sm:px-12 lg:px-0 lg:pl-[116px] lg:pr-12 xl:pl-[132px] xl:pr-16 pt-28 pb-20">
      {/* Top Breadcrumb Link */}
      <div className="mb-8">
        <Link
          href="/#my-work"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary transition-transform duration-200 hover:-translate-x-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
          <span>{"// Full Portfolio Archive"}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
          Engineered Projects &amp; Builds
        </h1>

        <p className="max-w-2xl font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mt-2">
          An interactive archive of production web applications, high-throughput architectures, AI diagnostic utilities, and client deliverables engineered by dark.
        </p>
      </div>

      {/* Filter and Search Bar Cluster */}
      <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border/50 pb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-[4px] px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "border border-primary bg-primary text-canvas shadow-sm"
                    : "border border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or title..."
            className="w-full rounded-[4px] border border-border bg-surface py-2 pl-9 pr-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Result Count Indicator */}
      <div className="mt-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>
          Showing <span className="text-foreground font-semibold">{filteredProjects.length}</span> of {projectList.length} builds
        </span>
        {selectedCategory !== "all" && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-primary hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-[4px] border border-border bg-surface shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_16px_32px_rgba(0,184,192,0.12)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-border/80 bg-surface-recessed px-3.5 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground truncate max-w-[150px]">
                  {project.slug}.app
                </span>
                <span className="font-mono text-[10px] text-primary font-semibold">
                  {project.year}
                </span>
              </div>

              {/* Thumbnail or Stylized Fallback */}
              {project.image ? (
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-surface-recessed cursor-pointer group/thumb"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/thumb:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div
                  onClick={() => setActiveProject(project)}
                  className="flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-surface-recessed to-surface p-6 text-center cursor-pointer border-b border-border/40"
                >
                  <Terminal className="h-8 w-8 text-primary mb-2 opacity-80" />
                  <div className="font-heading text-lg font-bold text-foreground">
                    {project.title}
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground mt-1">
                    {project.role}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Category Kicker */}
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {project.kicker || `// ${project.category.toUpperCase()}`}
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="mt-1 font-heading text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[4px] border border-border/60 bg-surface-recessed px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-[4px] border border-border/40 bg-surface-recessed px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="font-mono text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Full Details</span>
                      <span>→</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="Open Live Deployment"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal / Deep-Dive Viewing Drawer for Active Project */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[4px] border border-border bg-surface p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute right-5 top-5 rounded-[4px] border border-border p-1.5 text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header info */}
            <div className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              {activeProject.kicker}
            </div>

            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-foreground">
              {activeProject.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground border-b border-border/60 pb-4">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-primary" />
                <span>{activeProject.role}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>{activeProject.year}</span>
              </span>
              <span className="flex items-center gap-1">
                <Layers className="h-3.5 w-3.5 text-primary" />
                <span className="capitalize">{activeProject.category}</span>
              </span>
            </div>

            {/* Narrative */}
            <div className="mt-5">
              <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                Overview &amp; Architecture
              </h4>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
                {activeProject.longDescription || activeProject.description}
              </p>
            </div>

            {/* Metrics */}
            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="mt-6">
                <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  Key Production Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-[4px] border border-border bg-surface-recessed p-3 font-mono"
                    >
                      <div className="text-[11px] text-muted-foreground">{m.label}</div>
                      <div className="text-sm font-bold text-primary mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {activeProject.highlights && activeProject.highlights.length > 0 && (
              <div className="mt-6">
                <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  Engineering Deliverables
                </h4>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-muted-foreground">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] border border-border bg-surface-recessed px-2.5 py-1 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-border/60 pt-5">
              {activeProject.links?.github && (
                <a
                  href={activeProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark-btn-sweep border border-border bg-surface px-5 py-2.5 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary flex items-center gap-2"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>View Repository</span>
                </a>
              )}
              {activeProject.links?.live && (
                <a
                  href={activeProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark-btn-sweep border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-canvas transition-colors flex items-center gap-2"
                >
                  <span>Open Live App</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
