import Symbol from "../assets/symbol.svg"
import War from "../assets/war_sound.mp3"
import war1 from "../assets/war1.png"
import war2 from "../assets/war2.png"
import war3 from "../assets/war3.png"
import React, { useRef, useState } from "react";

const Hero = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                // Stop the audio
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset to the beginning
                setIsPlaying(false);
            } else {
                // Play the audio
                audioRef.current.loop = true; // Enable looping
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };
    let amountDays = new Date() - new Date("2022-02-23")
    amountDays = Math.floor(amountDays /(1000 * 60 * 60 * 24)) 
    return ( <>
    
    <header>
        <div><img src={Symbol} alt="" /></div>
        <p className="logo">UKRAINE</p>
        <button className="air-alarm" onClick={handleToggleAudio}>
                {isPlaying ? "STOP LYD" : "PRØV KRIG"}
            </button>        <audio  ref={audioRef} src={War}></audio>
    </header>
    <div className="hero">
        <div className="hero-info">
            <p className="data-text">24.02.22 - nu</p>
            <h2 className="title">Kraften i sandheden om krig</h2>
            <h3 className="war-days">{amountDays} dag af krig</h3>
            <p className="hero-desc">Dette websted blev oprettet for at sprede sandheden om krigen i Ukraine og for at hjælpe dem, der ønsker at støtte den.</p>
            <button class="btn-support">Støtte Ukraine</button>
        </div>
        <div className="heroImg">
            <img src={war1} alt="" className="img-war" />
            <img src={war2} alt="" className="img-war"/>
            <img src={war3} alt="" className="img-war"/>
        </div>
    </div>
    </>  );
}
 
export default Hero;