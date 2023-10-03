import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Navigate } from "react-router";

import "./GamePlay.css";

import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import { Link } from "react-router-dom";

interface Profile {
  name: string;
  title: string;
  intro: string;
  pictures: string[];
  ig_followers: number;
  ig_link: string;
  clickCnt?: number;
  showCnt?: number;
}

interface CardProps {
  onIn: () => void;
  onOut: () => void;
  name: string;
  title: string;
  intro: string;
  picture: string;
  ig_followers: number;
  ig_link: string;
  onClick: (name: string) => void;
}

interface ProgressBarProps {
  round: number;
}


export default function Play() {
  const profiles = useRef<Profile[]>([]);
  const [displayed_profiles, setDisplayed_profiles] = useState<Profile[]>([]);
  const [round, setRound] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);
  const [back_img1, setBack_img1] = useState<string>("");
  const [show_back_img1, setShow_back_img1] = useState<boolean>(false);
  const [back_img2, setBack_img2] = useState<string>("");
  const [show_back_img2, setShow_back_img2] = useState<boolean>(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile/random/11").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        res.data[i]["clickCnt"] = 0;
        res.data[i]["showCnt"] = 0;
      }

      profiles.current = res.data;
      const _displayed_profiles = [];
      _displayed_profiles.push(profiles.current[0]);
      _displayed_profiles.push(profiles.current[1]);
      setDisplayed_profiles(_displayed_profiles);
      setBack_img1(_displayed_profiles[0].pictures[0]);
      setBack_img2(_displayed_profiles[1].pictures[0]);
    });
  }, []);

  const nextRound = (name) => {
    if (round > 10) {
      return;
    }
    const _displayed_profiles = [];
    let index = 0;
    if (displayed_profiles[1]["name"] === name) {
      index = 1;
    }
    displayed_profiles[0]["showCnt"] += 1;
    displayed_profiles[1]["showCnt"] += 1;
    displayed_profiles[index]["clickCnt"] += 1;
    if (round < 10) {
      if (index === 1) {
        _displayed_profiles.push(profiles.current[round + 1]);
        _displayed_profiles.push(displayed_profiles[index]);
      } else {
        _displayed_profiles.push(displayed_profiles[index]);
        _displayed_profiles.push(profiles.current[round + 1]);
      }
      setDisplayed_profiles(_displayed_profiles);
      console.log(_displayed_profiles);
      setBack_img1(_displayed_profiles[0].pictures[0]);
      setBack_img2(_displayed_profiles[1].pictures[0]);
    } else {
      // game over
      const ps = [];
      for (let i = 0; i < profiles.current.length; i++) {
        ps.push(
          axios.patch(
            `http://localhost:5000/api/profile/${profiles.current[i]["name"]}`,
            {
              showCnt: profiles.current[i]["showCnt"],
              clickCnt: profiles.current[i]["clickCnt"],
            }
          )
        );
      }
      Promise.all(ps).then(() => {
        console.log("game over, data have been collect to the server");
        setEnd(true);
      });
      //   laoding to result page animation...
    }
    setRound((pre) => pre + 1);
  };

  return (
    <>
      {end ? (
        <Navigate to="/result" state={{ from: location }} replace />
      ) : (
        <>
          <section className="container">
            <Link to="/">
              <h2 className="logo">SEXIEST</h2>
            </Link>

            <div className="back1"></div>
            <div
              style={
                back_img1
                  ? {
                      backgroundImage: `url(${back_img1})`,
                      opacity: show_back_img1 ? 1 : 0,
                    }
                  : {}
              }
              className="back2"
            ></div>
            <div
              style={
                back_img2
                  ? {
                      backgroundImage: `url(${back_img2})`,
                      opacity: show_back_img2 ? 1 : 0,
                    }
                  : {}
              }
              className="back2"
            ></div>
            <div className="game-title">Who you like the most?</div>
            <div className="card-container">
              {displayed_profiles.map((p, index) => (
                <Card
                  onIn={() => {
                    index === 0
                      ? setShow_back_img1(true)
                      : setShow_back_img2(true);
                  }}
                  onOut={() => {
                    index === 0
                      ? setShow_back_img1(false)
                      : setShow_back_img2(false);
                  }}
                  key={index}
                  name={p.name}
                  title={p.title}
                  intro={p.intro}
                  picture={p.pictures[0]}
                  ig_followers={p.ig_followers}
                  ig_link={p.ig_link}
                  onClick={nextRound}
                />
              ))}
            </div>
            <ProgressBar round={round - 1} />
          </section>
        </>
      )}
    </>
  );
}
