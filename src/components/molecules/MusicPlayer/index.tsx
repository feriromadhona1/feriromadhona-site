"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
  { title: "Light Chillhop Beat", src: "/assets/music/music2.mp3" },
  { title: "Cozy Crackle Nights", src: "/assets/music/music1.mp3" },
  { title: "Ambient Chillhop", src: "/assets/music/music3.mp3" },
];

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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

  // Auto minimize after 10s
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMinimized(true);
    }, 5000); // 10s
  };

  const handleMouseEnter = () => {
    setIsMinimized(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed bottom-6 right-6 z-50 ${
        isMinimized
          ? "w-32 h-12 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center border border-gray-200 dark:border-gray-700"
          : "w-80 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl"
      } transition-all duration-500`}
    >
      {isMinimized ? (
        <div className="flex items-center gap-2">
          <Music2 className="text-sky-500" size={20} />
          <button
            onClick={togglePlay}
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-all"
            aria-label="Play or Pause"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      ) : (
        <div className="p-4 w-full">
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
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src={playlist[currentIndex].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  );
}
