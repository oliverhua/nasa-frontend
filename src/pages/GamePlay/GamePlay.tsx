import React, { useEffect, useState, useRef } from "react";
import GameCard from "./components/GameCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

// import "./GamePlay.css";
// import Card from "./components/Card";
// import ProgressBar from "./components/ProgressBar";
// import { fetchProfiles, handleGameOver } from "./utils";
// import { BackgroundImage } from "./BackgroundImage";

export default function Play() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Top section with a ratio of 1 */}
      <div className="h-32 bg-slate-900">Top Section</div>

      {/* Middle section with a ratio of 8 */}
      <div className="flex-grow bg-slate-900">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="h-32 w-4/6 justify-center items-center">
            <p className="font-mono text-3xl">
              Please suggest that your subjects send noble daughters to our
              temple... New blood is needed to keep the faith of the land!
            </p>
          </div>
          <div className="w-80 h-96 mt-24">
            <GameCard src="./src/assets/images/1.png" />
          </div>
        </div>
      </div>

      {/* Bottom section with a ratio of 1 */}
      <div className="h-32 bg-slate-800">Bottom Section</div>
    </div>
  );
}
