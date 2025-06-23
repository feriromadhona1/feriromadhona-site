// components/IntroMusicPopup.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

export default function IntroMusicPopup({ onAccept, onDecline }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("music_popup_seen");
    if (!alreadySeen) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("music_popup_seen", "true");
    setShow(false);
    onAccept();
  };

  const handleDecline = () => {
    sessionStorage.setItem("music_popup_seen", "true");
    setShow(false);
    onDecline();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 max-w-sm w-full rounded-2xl shadow-lg p-6 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              🎧 Explore with Music?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Do you want to explore this site with calming background music?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAccept}
                className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-full transition"
              >
                Yes, with Music
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full transition"
              >
                No, thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
