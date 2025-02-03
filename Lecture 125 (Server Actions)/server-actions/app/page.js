"use client";
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();

  return (
    <div className="flex justify-center min-h-[50vh] items-center">
      <form
        ref={ref} 
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
        className="p-10 bg-gray-800 rounded-xl"
      >
        <div className="flex gap-8 items-center">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            className="text-black px-2 py-1"
            type="text"
          />
        </div>
        <br />
        <div className="flex gap-4 items-center">
          <label htmlFor="add">Address</label>
          <input
            name="add"
            id="add"
            className="text-black px-2 py-1"
            type="text"
          />
        </div>
        <br />
        <div className="flex justify-center">
          <button className="bg-white text-black border-2 rounded-xl px-2 py-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
