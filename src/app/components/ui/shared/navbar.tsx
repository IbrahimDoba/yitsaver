"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../max-width-container";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" w-full flex justify-center items-center bg-gradient-to-r from-[#93dc99] to-[#46c38f]">
      <MaxWidthWrapper className=" flex h-[80px] w-full  items-center justify-center max-md:justify-start  px-4 max-md:h-[60px]">
        <div className="flex items-center justify-around flex-grow  ">
          {/* <img src="ssaver-logo.png" alt="SSsaver Logo" className="h-8 w-8 mr-2" /> */}
          <Link
            href="/"
            className={`text-4xl max-md:text-xl font-extrabold text-[#302703] ${
              pathname === "/" ? "text-white" : "text-#302703"
            }`}
          >
            YITSaver
          </Link>
          <Link
            href="/youtube-video-downloader"
            className={`text-[#302703]  hover:text-white text-sm text-center mx-2 transition duration-300  ${
              pathname === "/youtube-video-downloader"
                ? "text-white"
                : "text-#302703"
            }`}
          >
            YT Downloa
          </Link>
          <Link
            href="/youtube-audio-downloader"
            className={`text-[#302703]  hover:text-white text-sm text-center mx-2 transition duration-300  ${
              pathname === "/youtube-audio-downloader"
                ? "text-white"
                : "text-#302703"
            }`}
          >
            TikTok Download
          </Link>
          <Link
            href="/youtube-audio-downloader"
            className={`text-[#302703]  hover:text-white text-sm text-center mx-2 transition duration-300  ${
              pathname === "/youtube-audio-downloader"
                ? "text-white"
                : "text-#302703"
            }`}
          >
            Insta Download
          </Link>
        </div>
        <div className="flex w-1/3 justify-center items-center flex-1 ">
          <a
            href="/contact"
            className="text-[#302703]  hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
