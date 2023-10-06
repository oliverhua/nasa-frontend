import { useState, useRef, useEffect } from "react";
import { levelData } from "@/assets/Storyline";
import { useLevel } from "@/contexts/LevelContext";

const useDraggableCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [translation, setTranslation] = useState(0);
  const startPos = useRef(0);
  const [isMounted, setIsMounted] = useState(false);

  const { level, nextLevel } = useLevel();

  const [isNewLevel, setIsNewLevel] = useState(false);
  const [choice, setChoice ] = useState('No');

  const [HintOpacity, setHintOpacity] = useState(0);
  const [circleH, setcircleH] = useState("h-0") ;
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
      
      setTimeout(() => {
        nextLevel(choice);
        setChoice('No');
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
    if(delta >= 50){
      setHintOpacity(50);
    }
    else if(delta <= -50){
      setHintOpacity(-50);
    }
    else{
      setHintOpacity(delta);
    }
    setcircleH(()=>{
      return translation==0? "h-0": delta<0? "h-" + levelData[level].getleftscore.waterVolume :  delta>0? "h-" + levelData[level].getrightscore.waterVolume : "h-0"
    })
    console.log("Opacity : " + delta);
    console.log(circleH)

  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (translation > 300) { // 右滑
      setTranslation(window.innerWidth);
      setChoice('right');
      nextLevelCard();
      setHintOpacity(0);
      setcircleH("h-0");
    } else if (translation < -300) { // 左滑
      setTranslation(-window.innerWidth);
      setChoice('left');
      nextLevelCard();
      setHintOpacity(0);
      setcircleH("h-0");
    } else {
      setTranslation(0);
      setHintOpacity(0);
      setcircleH("h-0");
      
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
  const HintTranslation = translation>0? -translation:translation
  const cardStyle = {
    transform: isNewLevel ? "none" : `translateX(${translation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.4s, opacity 0.4s`,
    opacity: isMounted ? 1 : 0,
  };
  const HintStyle = {
    transform: isNewLevel ? "none" : `translateY(${HintTranslation}px) rotate(${rotation}deg)`,
    transition: isDragging ? "none" : `transform 0.4s, opacity 0.4s`,
    opacity: HintOpacity>0? HintOpacity/100 : -HintOpacity/100,
    hint_src: translation==0? 0:HintOpacity>0? 1: HintOpacity<0? -1:0
  
  }
  // const circleStyle = {
  //   circleH: translation==0? "h-0": HintOpacity<0? "h-" + levelData[level].getleftscore.waterVolume :  HintOpacity>0? "h-" + levelData[level].getrightscore.waterVolume : "h-0",
  //   circleW: translation==0? "w-0": HintOpacity<0? "w-" + levelData[level].getleftscore.waterVolume :  HintOpacity>0? "w-" + levelData[level].getrightscore.waterVolume :  "w-0"
  // }
  
  return { HintStyle , cardStyle, handleMouseDown, circleH };
};

export default useDraggableCard;
