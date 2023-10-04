import { useState, useRef, useEffect } from "react";

import { useLevel } from "@/contexts/LevelContext";

const useDraggableCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [translation, setTranslation] = useState(0);
  const startPos = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const { level, nextLevel } = useLevel();
  const [isNewLevel, setIsNewLevel] = useState(false);

  const nextLevelCard = () => {
    setIsMounted(false);
    setTimeout(() => {
      setIsNewLevel(true);
      setTranslation(0);
    }, 400);
  }

  useEffect(() => {
    if (isNewLevel) {
      setIsMounted(false);
      // setTranslation(0);
      setTimeout(() => {
        nextLevel();
      }, 400);
    }
  }, [isNewLevel]);

  useEffect(() => {
    setIsNewLevel(false);
    setIsDragging(false);
    startPos.current = 0;
    setIsMounted(true);
  }, [level]);


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
      nextLevelCard();
    } else if (translation < -150) {
      setTranslation(-window.innerWidth);
      nextLevelCard();
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
    transform: isNewLevel ? "none" : `translateX(${translation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.4s, opacity 0.4s`,
    opacity: isMounted ? 1 : 0,
  };

  return { cardStyle, handleMouseDown };
};

export default useDraggableCard;
