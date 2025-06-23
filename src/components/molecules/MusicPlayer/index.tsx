"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
  {
    title: "Cozy Crackle Nights",
    src: "/assets/music/music1.mp3",
  },
  {
    title: "Light Chillhop Beat",
    src: "/assets/music/music2.mp3",
  },
  {
    title: "Ambient Chillhop",
    src: "/assets/music/music3.mp3",
  },
];

interface MusicPlayerProps {
    autoPlay?: boolean;
  }
  
  export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
      if (autoPlay && audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 w-80 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl z-50"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Music2 className="text-sky-500" size={20} />
            <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
              {playlist[currentIndex].title}
            </span>
          </div>

          <button
            onClick={togglePlay}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-all"
            aria-label="Play or Pause"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                >
                  <Pause size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                >
                  <Play size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <ul className="space-y-1 max-h-32 overflow-y-auto text-sm">
          {playlist.map((track, i) => (
            <li
              key={track.src}
              onClick={() => changeTrack(i)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${
                i === currentIndex
                  ? "bg-sky-100 dark:bg-sky-900 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {track.title}
            </li>
          ))}
        </ul>

        <audio ref={audioRef} loop>
          <source src={playlist[currentIndex].src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </motion.div>
  );
}
