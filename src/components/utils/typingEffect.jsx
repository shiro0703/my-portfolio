import { useState, useEffect } from "react";

const TypingEffect = ({ lines, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return; // Stop when all lines are done

    const currentLine = lines[currentLineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Move to next line after a delay
      const nextLineTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n"); // Newline
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 500); // Pause before next line
      return () => clearTimeout(nextLineTimeout);
    }
  }, [charIndex, currentLineIndex, lines, speed]);

  return <pre>{displayedText}</pre>;
};

export default TypingEffect;
