"use client";

import Image from "next/image";
import Link from "next/link";
import { category } from "./constant/Category";

export default function Home() {
  return (
    <div>
      {/*header*/}
      <div className="flex w-full h-[200px] items-center justify-between bg-black">
        <div className="flex gap-5">
          {category.map((item) => (
            <p className="text-white">{item.name}</p>
          ))}
        </div>
        <Link href="/">
          <Image src="/images/logo.png" alt="header" width={300} height={300} />
        </Link>
        <div className="flex gap-5">
          <Link href="https://www.instagram.com/joyuri_official/">
            <Image src="/images/daum.png" alt="header" width={35} height={35} />
          </Link>
          <Link href="https://www.instagram.com/joyuri_official/">
            <Image
              src="/images/instagram.png"
              alt="header"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://www.instagram.com/joyuri_official/">
            <Image
              src="/images/youtube.png"
              alt="header"
              width={35}
              height={35}
            />
          </Link>
          <Link href="https://www.instagram.com/joyuri_official/">
            <Image src="/images/x.png" alt="header" width={35} height={35} />
          </Link>
        </div>
      </div>
      {/*main*/}
      <div></div>
    </div>
  );
}
