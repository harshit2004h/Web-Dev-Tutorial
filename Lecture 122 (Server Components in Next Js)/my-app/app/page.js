"use client"
import { useState } from "react";
export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <div>
      Count is {count}
      <button onClick={()=> setcount(count+1)}>Click me</button>
    </div>
  );
}