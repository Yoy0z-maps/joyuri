"use client";

import Image from "next/image";
import Link from "next/link";
import { category } from "./constant/Category";
import { useState } from "react";
import { album } from "./constant/Album";
import { iconShortcut } from "./constant/IconShortcut";
import { cf } from "./constant/Cf";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Home() {
  const [navigation, setNavigation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cf.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cf.length) % cf.length);
  };

  const mainContent = () => {
    if (navigation === 0) {
      return (
        <div className="w-full h-[80vh] flex items-center justify-center overflow-hidden">
          <GrPrevious
            size={50}
            className="mr-[20px] cursor-pointer text-gray-400 hover:text-navigation transition-all duration-300"
            onClick={handlePrev}
          />
          <div className="relative w-full h-full transition-all duration-500">
            <div className="absolute bottom-[80px] left-[50px] px-[10px] py-[10px] flex flex-col items-start justify-start font-bold text-[18px] z-20 rounded-md">
              <p className="text-white text-[35px]">{cf[currentIndex].name}</p>
              <p className="text-white text-[20px] mt-[10px] font-normal">
                {cf[currentIndex].description1}
              </p>
              <p className="text-white text-[20px] font-normal">
                {cf[currentIndex].description2}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-50"></div>
            <Image
              src={cf[currentIndex].image}
              alt={cf[currentIndex].name}
              className="w-full h-full"
              objectFit="cover"
              width={1000}
              height={1000}
            />
            <div className="absolute bottom-[90px] right-[50px] bg-white w-[200px] h-[50px] flex items-center justify-center font-bold text-[18px] rounded-full">
              <Link href={cf[currentIndex].url}>자세한 정보 보러가기</Link>
            </div>
          </div>
          <GrNext
            size={50}
            className="ml-[20px] cursor-pointer text-gray-400 hover:text-navigation transition-all duration-300"
            onClick={handleNext}
          />
        </div>
      );
    } else if (navigation === 1) {
      return (
        <div className="w-[100%] h-[100%] grid grid-cols-5 mx-[80px] bg-white gap-[20px]">
          {album.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                width={230}
                height={200}
              />
              <p className="mt-[10px] text-[18px]">{item.name}</p>
              <p className={`text-${item.color} text-[15px]`}>{item.album}</p>
              <div className="flex justify-end mt-[20px] mr-[40px]">
                <p className="text-gray-400 text-[13px]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (navigation === 2) {
      return <div>DRAMA</div>;
    } else if (navigation === 3) {
      return <div>CALENDAR</div>;
    }
  };

  return (
    <div className="overflow-hidden w-screen h-screen">
      {/*header*/}
      <div className="relative flex w-full items-center justify-center bg-white px-[80px]">
        <div className="flex absolute gap-[50px] left-[80px] top-[75px]">
          {category.map((item) => (
            <p
              className={`${navigation === item.id ? "text-navigation" : "text-gray-400"} cursor-pointer font-bold transition-all duration-500 hover:text-navigation`}
              key={item.id}
              onClick={() => setNavigation(item.id)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex gap-[30px] absolute right-[80px] top-[75px]">
          {iconShortcut.map((item) => (
            <Link href={item.link} key={item.id}>
              <Image
                src={item.image}
                alt="header"
                width={item.name === "Spotify" ? 45 : 35}
                height={item.name === "Spotify" ? 45 : 35}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[40px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="header"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
      {/*main*/}
      <div className="flex h-[85vh] w-full bg-white items-center justify-center">
        <div>{mainContent()}</div>
      </div>
    </div>
  );
}
