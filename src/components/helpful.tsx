"use client";

import {
  CheckCircle2Icon,
  FrownIcon,
  MehIcon,
  SmileIcon,
  SmilePlusIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Helpful({ slug }: { slug: string }) {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;
    const timer = setTimeout(() => {
      setSubmit(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submit]);

  function handleRating(rating: "super" | "ok" | "meh" | "bad") {
    console.log(slug, "--->", rating);
    setSubmit(true);
  }

  if (submit)
    return (
      <div className="flex flex-row items-center gap-2 w-fit mx-auto mt-12 mb-8 px-4 py-2 rounded-full border-2 ">
        <CheckCircle2Icon className="text-blue-400" />
        <span>Your feedback has been received!</span>
      </div>
    );

  return (
    <div className="flex flex-row items-center gap-4 border-2 w-fit mx-auto mt-12 mb-8 px-4 py-2 rounded-full">
      <span> Was this helpful?</span>
      <div className="flex flex-row items-center gap-3">
        <SmilePlusIcon
          onClick={() => handleRating("super")}
          className="w-5 h-5 hover:text-yellow-400 cursor-pointer"
        />
        <SmileIcon
          onClick={() => handleRating("ok")}
          className="w-5 h-5 hover:text-blue-400 cursor-pointer"
        />
        <MehIcon
          onClick={() => handleRating("meh")}
          className="w-5 h-5 hover:text-orange-400 cursor-pointer"
        />
        <FrownIcon
          onClick={() => handleRating("bad")}
          className="w-5 h-5 hover:text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
