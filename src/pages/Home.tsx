import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button
        radius="full"
        className="w-96 h-32 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-4xl"
        onClick={() => {
          navigate("/video/intro");
        }}
      >
        Start Game!
      </Button>
    </div>
  );
}
