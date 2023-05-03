import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

import { useRouter } from "next/router";

function Youtube() {
  const router = useRouter();
 

  const params = (id) => {
      if (id === "html") {
        router.push(`youtube/${id}`);
      } else if (id === "css") {
        router.push(`youtube/${id}`);
      } else if (id === "javaScript") {
        router.push(`youtube/${id}`);
      }
    };
  return (
    <>
      <Head>
        <title>devJourney | youtube</title>
      </Head>
      <Nav />
      <div className="w-[80%] mx-auto grid place-items-center justify-center mt-[5%]">
        {/* {data.map((items) => {
          return (
            <div key={id}>
              <h1>{items.name}</h1>
            </div>
          )
        })} */}
        <h2 className="text-4xl font-bold">Stacks For Web Development</h2>
        <div className="mt-[10%] flex items-center justify-center divide-x">
          <div className="w-[300px] h-[500px] grid place-items-center justify-center">
            <span className="text-2xl">HTML</span>
            <span className="text-2xl">CSS Frameworks</span>
            <span className="text-2xl">JAVASCRIPT </span>
            <span className="text-2xl">JS Frameworks</span>
            <span className="text-2xl">GIT</span>
          </div>
          <div className="w-[300px] h-[500px] grid place-items-center justify-center">
            <span
              onClick={() => params("html")}
              className="text-xl cursor-pointer text-gray-50"
            >
              Watch now
            </span>
            <span
              onClick={() => params("css")}
              className="text-xl cursor-pointer text-gray-50"
            >
              Watch now
            </span>
            <span
              onClick={() => params("javaScript")}
              className="text-xl cursor-pointer text-gray-50"
            >
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

export default Youtube;
