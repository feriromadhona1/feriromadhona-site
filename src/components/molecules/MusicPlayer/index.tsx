"use client";
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
  { title: "Light Chillhop Beat", src: "/assets/music/music2.mp3" },
  { title: "Cozy Crackle Nights", src: "/assets/music/music1.mp3" },
  { title: "Ambient Chillhop", src: "/assets/music/music3.mp3" },
];

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 768;
}

export interface MusicPlayerHandle {
  play: () => void;
}

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(
  ({ autoPlay = false }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          });
        }
      },
    }));

    useEffect(() => {
      setIsMobileDevice(isMobile());

      if (autoPlay && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Browser block auto-play without user interaction
        });
      }

    //   if (!isMobile()) startMinimizeTimer();

      startMinimizeTimer();

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [autoPlay]);

    useEffect(() => {
      if (!isMobileDevice && !isMinimized) {
        startMinimizeTimer();
      }
    }, [isMinimized, isMobileDevice]);

    const startMinimizeTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsMinimized(true);
      }, 5000);
    };

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

    const handleMouseEnter = () => {
      if (!isMobileDevice) {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsMinimized(false);
        startMinimizeTimer();
      }
      startMinimizeTimer();
    };

    const handleMouseLeave = () => {
      if (!isMobileDevice) {
        startMinimizeTimer();
      }
      startMinimizeTimer();
    };

    const handleMobileToggle = () => {
      if (isMobileDevice) {
        setIsMinimized((prev) => !prev);
      }
      startMinimizeTimer();
    };

    return (
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMobileToggle}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isMinimized ? 0.7 : 1,
        }}
        transition={{ duration: 0.4 }}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? "w-40 h-14" : "w-80"
        } bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Music2 className="text-sky-500" size={20} />
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm truncate">
                {playlist[currentIndex].title}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
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

          {!isMinimized && (
            <ul className="space-y-1 max-h-32 overflow-y-auto text-sm">
              {playlist.map((track, i) => (
                <li
                  key={track.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeTrack(i);
                  }}
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
          )}

          <audio ref={audioRef} loop>
            <source src={playlist[currentIndex].src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </motion.div>
    );
  }
);

// ✅ Tambahkan display name agar linter senang
MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
