"use client"
import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ClientsSpeak from "./components/ClientsSpeak";
import Contact from "./components/Contact";

export default function Home() {
  const [isModal, setIsModal] = useState(false)
  useEffect(() => {
const body = document.querySelector("body")

  }, [isModal])
  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
      {isModal === true ? <Navbar setIsModal={setIsModal}/> : ""}
      <Header setIsModal={setIsModal} isModal={isModal}/>
      <Landing/>
      <About/>
      <WhatIDo/>
      <Portfolio/>
      <ClientsSpeak/>
 <Contact/>      
      <Footer/>
    </main>
  );
}
