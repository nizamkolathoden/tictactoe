import React, { useState, useEffect } from "react";
import soundfile from "./Resources/1.mp3"
import {FiVolume2} from "react-icons/fi";
import {FiVolumeX} from "react-icons/fi";
import '../Styles/Volume.css'
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(soundfile);

  return (
      <button className="volumediv" onClick={toggle}>{playing ? <FiVolume2 className="volumeon"/>: <FiVolumeX className="volumeoff"/>}</button>
  );
};

export default Player;