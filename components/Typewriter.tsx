"use client";

import * as React from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1800,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          const nextText = word.slice(0, currentText.length + 1);
          setCurrentText(nextText);
          if (nextText === word) {
            // Finished typing, pause before deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          const nextText = word.slice(0, currentText.length - 1);
          setCurrentText(nextText);
          if (nextText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      <span>{currentText}</span>
      <span className="inline-block animate-pulse font-mono text-primary font-light ml-0.5">
        _
      </span>
    </span>
  );
}
