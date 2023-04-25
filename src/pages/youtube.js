import Head from "next/head";
import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

function youtube() {
  return (
    <>
      <Head>
        <title>devJourney | youtube</title>
      </Head>
      <Nav />
      <div className="w-[80%] mx-auto grid place-items-center justify-center mt-[5%]">
        <h2 className="text-4xl font-bold">Stacks For Web Development</h2>
        <div className="mt-[10%] flex items-center justify-center divide-x">
          <div className="w-[300px] h-[500px] grid place-items-center justify-center">
            <span className="text-2xl">HTML</span>
            <span className="text-2xl">CSS Frameworks</span>
            <span className="text-2xl">JAVASCRIPT </span>
            <span className="text-2xl">JAVASCRIPT Frameworks</span>
            <span className="text-2xl">GIT</span>
          </div>
          <div className="w-[300px] h-[500px] grid place-items-center justify-center">
            <span className="text-xl cursor-pointer text-gray-50">
              Watch now
            </span>
            <span className="text-xl cursor-pointer text-gray-50">
              Watch now
            </span>
            <span className="text-xl cursor-pointer text-gray-50">
              Watch now
            </span>
            <span className="text-xl cursor-pointer text-gray-50">
              Watch now
            </span>
            <span className="text-xl cursor-pointer text-gray-50">
              Watch now
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default youtube;
