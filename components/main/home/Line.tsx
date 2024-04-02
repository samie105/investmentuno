import React from "react";

export default function Line({ className }: { className: string }) {
  return (
    <div className={className}>
      {" "}
      <div className=" h-1 w-11 bg-green-600 rounded-full"></div>
      <div className=" h-1 w-5 bg-green-600 rounded-full mx-0.5"></div>
      <div className=" h-1 w-1 bg-green-600 rounded-full"></div>
    </div>
  );
}
