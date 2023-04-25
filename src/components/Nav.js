import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <div className="p-5">
      <h1 className="text-4xl logo">
        <Link href="/">devJourney</Link>
      </h1>
    </div>
  );
}

export default Nav;
