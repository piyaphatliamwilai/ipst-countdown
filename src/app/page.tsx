'use client'
import { useState } from "react"
export default function Home() {
  var [getTime, setTime] = useState("Loading")
  
  setInterval(() => {
    var countDownDate = new Date("Feb 23, 2024 00:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    setTime(days + " วัน, " + hours + " ชั่วโมง, " + minutes + " นาที และอีก " + seconds + " วินาที")
  }, 1000)

  return (
    <main className="min-h-screen p-24 bg-stone-950 space-y-10">
      <h1 className="text-6xl font-mono font-bold">acs 80 countdown</h1>
      <h1 className="text-5xl">พวกเราจะจบในอีก...</h1>
      <h1 className="text-5xl">ครั้งหนึ่งกูเคยผ่านอเล็กซ์</h1>
      <h1 className="text-6xl">{getTime}</h1>
    </main>
  );
}
