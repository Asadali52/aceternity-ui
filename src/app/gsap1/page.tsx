"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const wordsLeft = [
  "Hello", "GSAP", "in", "Next.js!", "Amazing", "Animation", "Fun", "Smooth",
  "Scroll", "Control", "Effortless", "Experience", "Modern", "Fast", "Easy",
  "Dynamic", "Engaging", "Powerful", "Creative", "Exciting"
];

const wordsRight = [
  "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur,",
  "adipisicing", "elit.", "Quae", "neque", "sit", "in", "ut",
  "officia", "magni", "minus", "repellendus", "nulla,", "tempore",
  "dolor", "itaque", "fugiat", "libero.", "Tempore", "nostrum",
  "consequatur", "culpa", "at,", "maiores", "repudiandae?"
];

const GsapFixedScreen = () => {
  const leftTextRef = useRef<(HTMLSpanElement | null)[]>([]);
  const rightTextRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const maxWords = Math.max(wordsLeft.length, wordsRight.length);
    const totalSteps = Math.ceil(maxWords / 4); // Calculate steps based on 4 words per scroll

    const observer = Observer.create({
      target: window,
      type: "wheel,touch",
      preventDefault: true,
      onChange: (self) => {
        if (self.deltaY > 0) {
          setStep((prev) => (prev < totalSteps ? prev + 1 : totalSteps));
        } else {
          setStep((prev) => (prev > 0 ? prev - 1 : 0));
        }
      },
    });

    return () => observer.kill();
  }, []);

  useEffect(() => {
    const leftWords = leftTextRef.current.filter(Boolean);
    const rightWords = rightTextRef.current.filter(Boolean);

    // Hide all words before animation
    gsap.set(leftWords, { opacity: 0, x: -50 });
    gsap.set(rightWords, { opacity: 0, x: 50 });

    // Animate words in batches, keeping previous ones visible
    gsap.to(leftWords.slice(0, (step + 1) * 4), {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    gsap.to(rightWords.slice(0, (step + 1) * 4), {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
    });

  }, [step]);

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-[#0a96d4] text-white">
      <div className="w-1/2 text-center">
        <div className="text-lg font-bold flex flex-wrap justify-center gap-4">
          {wordsLeft.map((word, index) => (
            <span
              key={index}
              ref={(el) => { leftTextRef.current[index] = el; }}
              className="opacity-0 translate-x-[-50px]"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="text-[14px] flex flex-wrap justify-center gap-4 mt-6">
          {wordsRight.map((word, index) => (
            <span
              key={index}
              ref={(el) => { rightTextRef.current[index] = el; }}
              className="opacity-0 translate-x-[50px]"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GsapFixedScreen;
