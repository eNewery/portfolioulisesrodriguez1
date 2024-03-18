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
import Login from "./components/Login";
import Modal from "./components/Modal";

export default function Home() {
  const [isModal, setIsModal] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [isNavbar, setIsNavbar] = useState(false)
  const [projectDetail, setProjectDetail] = useState({})
  useEffect(() => {
const body = document.querySelector("body")

  }, [isNavbar])
  const proj = [{
    projectImage:"./projectCrushHub.png",
    projectTitle:"Crush Hub",
    category:"personal",
    figmaLink:"https://www.figma.com/file/E7HzQT1PPWcaAECQJRJvku/Crush-Hub?type=design&mode=design&t=z4F2bz1ZNlYsFMTx-1",
    figma: true,
    icons: ["./reactNative.png", "./firebase.png"],
    projectDescription:"Crush Hub es una aplicación de citas en donde contarás con múltiples funciones para coincidir con tu match ideal. Nada de limitaciones, nada de estar pagando para obtener beneficios especiales, en Crush Hub todos somos iguales y tenemos las mismas posibilidades."
    }, 
    {projectImage:"./projectOblivion.png",
    projectTitle:"Oblivion",
    category:"personal",
    figmaLink:"https://www.figma.com/file/O1VQOkGTI5zhBJPPBE0LoK/Oblivion?type=design&node-id=0%3A1&mode=design&t=w2sDBVVu8N5RtfAi-1",
    figma: true,
    icons: ["./react.png", "./firebase.png"],
    projectDescription: "Oblivion es una marca de ropa que fusiona innovación, inclusión y calidad en cada prenda. Su ecommerce ofrece una experiencia de compra accesible y de vanguardia"
  },
    {
        projectImage:"./projectAnglo.png",
        projectTitle:"Anglohispana",
        category:"work",
        figmaLink:"https://www.figma.com/file/vMor84JV0Bcpc4MbnjleV2/Anglo?type=design&mode=design&t=fNA8USqeDkOunrUn-1",
        figma: true,
        icons: ["./react.png", "./firebase.png"],
        projectDescription:"Anglohispana es un sitio web de tipo funnel diseñado para atraer clientes a una escuela de inglés dirigida a hispanohablantes. Su enfoque está en ofrecer una experiencia educativa personalizada y efectiva."
    }, {
        projectImage:"./projectVet.png",
        projectTitle:"Vet App",
        category:"work",
        figmaLink:"https://www.figma.com/file/qjcdKB5P1eRuqUqqp5duXZ/Vet-App?type=design&mode=design&t=fNA8USqeDkOunrUn-1",
        figma: true,
        icons: ["./react.png", "./reactNative.png", "./firebase.png"],
        projectDescription:"Vet App es un CMS especializado para veterinarias, permitiendo la gestión integral de turnos, clientes y mascotas. Ofrece una plataforma intuitiva y eficiente para mejorar la organización y atención en el consultorio."
    },
    {
        projectImage:"./projectGameville.png",
        projectTitle:"Panel CMS",
        category:"work",
    figma:false,
    icons: ["./react.png", "./firebase.png"],
    projectDescription:"Anglohispana es un sitio web de tipo funnel diseñado para atraer clientes a una escuela de inglés dirigida a hispanohablantes. Su enfoque está en ofrecer una experiencia educativa personalizada y efectiva."
    }]
    function turnModalOn(item) {
      const body = document.querySelector("body")
     setIsModal(true) 
     body.style.overflowY = "hidden"
     setProjectDetail(item)
    }
  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
{isNavbar === true ? <Navbar setIsLogin={setIsLogin} setIsNavbar={setIsNavbar}/> : ""}
{isModal === true ? <Modal projectDetail={projectDetail} setIsModal={setIsModal}/> : ""}
{isLogin === false ?
      <div>
        <Header setIsNavbar={setIsNavbar} isNavbar={isNavbar}/>
        <Landing/>
        <About/>
        <WhatIDo/>
        <Portfolio proj={proj} turnModalOn={turnModalOn}/>
        <ClientsSpeak/>
   <Contact/>      
        <Footer/></div> : <Login/>}
      

    </main>
  );
}
