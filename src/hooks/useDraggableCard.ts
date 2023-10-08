import { useState, useRef, useEffect } from "react";
import { useLevel } from "@/contexts/LevelContext";
import { useDisclosureContext } from "@/contexts/DisclosureContext";

const useDraggableCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [translation, setTranslation] = useState(0);
  const startPos = useRef(0);
  const [isMounted, setIsMounted] = useState(false);

  const { level, nextLevel } = useLevel();

  const [isNewLevel, setIsNewLevel] = useState(false);
  const [choice, setChoice] = useState<"left" | "right" | null>(null);
  const [hintOpacity, setHintOpacity] = useState(0);

  const { onInformationOpen } = useDisclosureContext(); // For Modal
  const nextLevelCard = () => {
    setIsMounted(false);
    onInformationOpen();
    setTimeout(() => {
      setIsNewLevel(true);
      setTranslation(0);
    }, 400);
  };
  const processNewLevel = () => {
    if (choice !== null) {
      nextLevel(choice);
    }
    setChoice(null);
  };

  useEffect(() => {
    if (isNewLevel) {
      setIsMounted(false);
      setTimeout(processNewLevel, 400);
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
    const deltaAbs = Math.abs(currentPos - startPos.current);

    setTranslation(delta);
    setHintOpacity(deltaAbs >= 100 ? 1 : deltaAbs / 100);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setHintOpacity(0);
    if (translation > 300) {
      setTranslation(window.innerWidth);
      setChoice("right");
      nextLevelCard();
    } else if (translation < -300) {
      setTranslation(-window.innerWidth);
      setChoice("left");
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

  const rotation = (translation / window.innerWidth) * 45;
  const hintTranslation = -Math.abs(translation);
  const cardStyle = {
    transform: isNewLevel
      ? "none"
      : `translateX(${translation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.4s, opacity 0.4s`,
    opacity: isMounted ? 1 : 0,
  };
  const hintStyle = {
    transform: isNewLevel
      ? "none"
      : `translateY(${hintTranslation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.4s, opacity 0.4s`,
    opacity: hintOpacity > 0 ? hintOpacity : 0,
    hintSrc: translation > 0 ? 1 : -1,
  };
  return {
    choice,
    hintStyle,
    cardStyle,
    handleMouseDown,
  };
};

export default useDraggableCard;
