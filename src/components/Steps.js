import React from "react";
import { BsYoutube } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import Link from 'next/link';

function Steps() {
  return (
    <div className="grid place-items-center justify-center lg:mt-[10%] mt-[15%]">
      <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center ">
        How Do You Want To Learn Web Development?!
      </h3>
      <p className="text-gray-50 text-x mt-3">There are different ways learn it but here are the best ways.</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-8 gap-10">
        <Link href="/youtube" className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] border border-red-600   rounded-[30px] cursor-pointer hover:bg-red-600 transition-all durtaion-300 flex items-center justify-center shadow-lg">
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-center text-3xl">
              <BsYoutube />
            </span>
            <span className="text-center text-3xl">YouTube</span>
          </div>
        </Link>
        <Link href="/books"  className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] border border-blue-600  rounded-[30px] cursor-pointer hover:bg-blue-600 transition-all durtaion-300 flex items-center justify-center shadow-lg">
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-center text-3xl">
              <IoBookSharp />
            </span>
            <span className="text-center text-3xl">Books/Articles</span>
          </div>
        </Link>
        <Link href="/website"  className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] border border-green-600 rounded-[30px] cursor-pointer hover:bg-green-600 transition-all durtaion-300 flex items-center justify-center shadow-lg">
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-center text-3xl">
              <IoIosVideocam />
            </span>
            <span className="text-center text-3xl">Websites</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Steps;
