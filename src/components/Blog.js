import React from "react";

function Blog() {
  return (
    <div className="grid place-items-center justify-center mt-[10%] text-center">
      <h3 className="lg:text-3xl md:text-3xl text-2xl font-bold">
        Read Blogs On Web Developmet
      </h3>
      <p className="text-gray-50 text-x mt-3">Here are blogs written by we developers sharing their intrest, thoughts and journey</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-8 justify-center place-items-center gap-8">
        <div className="border border-white lg:w-[290px] w-[250px] md:w-[200px]  h-[200px] rounded-[20px] cursor-pointer"></div>
        <div className="border border-white lg:w-[290px] w-[250px] md:w-[200px]  h-[200px] rounded-[20px] cursor-pointer"></div>
        <div className="border border-white lg:w-[290px] w-[250px] md:w-[200px]  h-[200px] rounded-[20px] cursor-pointer"></div>
      </div>
    </div>
  );

}

export default Blog;
