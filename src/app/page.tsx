"use client";

import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import data from "@/data/sentences.json";
import CopyClipboard from "@/components/CopyClipboard";

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [another, setAnother] = useState(0);
  const [loading, setLoading] = useState(true);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    setQuote(
      `${data.birthmonth[randomIntFromInterval(0, 11)].value} ${data.lastdni[randomIntFromInterval(0, 9)].value} ${data.lastcel[randomIntFromInterval(0, 9)].value}.`,
    );
    setLoading(false);
  }, [another]);

  return (
    <main className="mx-auto flex flex-col md:w-[50vw]">
      <div className="relative flex h-[60vh] flex-row items-center justify-center">
        <blockquote className="relative text-center text-5xl font-semibold italic leading-loose max-[640px]:text-4xl">
          <p>{loading ? "" : `"${quote}"`}</p>
          {loading ? null : <CopyClipboard text={JSON.stringify(quote)} />}
        </blockquote>
      </div>
      <div className="text-center">
        <Button
          className="h-20 w-20 rounded border-2 bg-transparent px-4 py-2 text-3xl font-semibold text-gray-700"
          onClick={() => setAnother(another + 1)}
        >
          <img alt="magaiba" height="64px" src="/MAGAIBA.webp" width="64px" />
        </Button>
      </div>
    </main>
  );
}
