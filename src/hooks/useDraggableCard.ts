import { useState, useRef, useEffect } from "react";

const useDraggableCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [translation, setTranslation] = useState(0);
  const startPos = useRef(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    startPos.current = event.clientX;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const currentPos = event.clientX;
    const delta = currentPos - startPos.current;
    setTranslation(delta);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (translation > 150) {
      setTranslation(window.innerWidth);
    } else if (translation < -150) {
      setTranslation(-window.innerWidth);
    } else {
      setTranslation(0);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, translation]);

  const rotation = translation / window.innerWidth * 45;
  const cardStyle = {
    transform: `translateX(${translation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.5s, opacity 3s`,
    opacity: isMounted ? 1 : 0,
  };

  return { cardStyle, handleMouseDown };
};

export default useDraggableCard;
