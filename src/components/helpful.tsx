"use client";

import {
  CheckCircle2Icon,
  FrownIcon,
  MehIcon,
  SmileIcon,
  SmilePlusIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const FEEDBACK_OPTIONS = [
  {
    type: "super",
    icon: SmilePlusIcon,
    css: "hover:text-yellow-400",
  },
  {
    type: "ok",
    icon: SmileIcon,
    css: "hover:text-blue-400",
  },
  {
    type: "meh",
    icon: MehIcon,
    css: "hover:text-orange-400",
  },
  {
    type: "bad",
    icon: FrownIcon,
    css: "hover:text-red-500",
  },
];

export default function Helpful({ slug }: { slug: string }) {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;
    const timer = setTimeout(() => {
      setSubmit(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submit]);

  function handleRating(rating: string) {
    //TODO: Send email to me
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
      <TooltipProvider>
        <div className="flex flex-row items-center gap-3">
          {FEEDBACK_OPTIONS.map((item) => {
            return (
              <Tooltip key={item.type}>
                <TooltipTrigger>
                  <item.icon
                    onClick={() => handleRating(item.type)}
                    className={`w-5 h-5 cursor-pointer ${item.css}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-light capitalize">{item.type}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}
