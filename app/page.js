"use client"
import Link from "next/link";
import React, { useState,useEffect } from "react";

function Head() {
  return (
    <div className="top">
    <h1>INDIA WORLD CUP 11</h1>
    </div>
  )
}
function Player(props) {
  const imageSrc = `/${props.name}.jpg`;
  return (
    <img src={imageSrc} alt={props.name} className="player-image" />
  );
}

function Page() {
  const playerNames = ["Rohit Sharma (c)", "Hardik Pandya (vc)", "Shubman Gill", "Virat Kohli", "Shreyas Iyer", "KL Rahul", "Ravindra Jadeja", "Shardul Thakur", "Jasprit Bumrah", "Mohammed Siraj", "Kuldeep Yadav", "Mohammed Shami", "Axar Patel", "Ishan Kishan", "Suryakumar Yadav"];
  const [present, setPresent] = useState(new Array(playerNames.length).fill(false));

  function toggle(index) {

    setPresent((prevState) => {
      const updatedPresent = [...prevState];
      updatedPresent[index] = !updatedPresent[index];
      return updatedPresent;
    });
  }
useEffect(() => {
  toggle(0);
},[]);

  return (
    <>
      <Head />
      <h1 className="select">PLAYING 11 </h1>
      <div className="image-container">
        {playerNames.map((name, index) => (
          present[index] ? ( 
            <div className="card" key={index}>
              <Player name={name} />
              <button className="button button2" onClick={() => toggle(index)}>remove</button>
            </div>
          ) : null 
        ))}
      </div>
    
      <h1 className="not_select">Not selected</h1>
      <div className="image-container">
        {playerNames.map((name, index) => (
          !present[index] ? ( 
            <div className="card" key={index}>
              <Player name={name} />
              <button className = "button button1 " onClick={() => toggle(index)}>add</button>
            </div>
          ) : null 
        ))}
      </div>
    </>
  );
}

export default Page;
