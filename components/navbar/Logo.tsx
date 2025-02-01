import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <div className="tracking-widest font-bold">
        <span className="border-4 border-primary bg-primary text-white rounded-l-lg p-0.5 pr-0 mr-1">O</span>
        <span>
          RBICA
        </span>
      </div>
    </Link>
  );
}

export default Logo;
