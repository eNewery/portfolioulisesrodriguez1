"use client"
import Link from "next/link";
import React from "react";

const Navbar = ({setIsNavbar, isNavbar, setIsLogin}) => {
function setAdminOn() {
    setIsLogin(true)
    setIsNavbar(false)
}
    return(
        <div className="navbarContainer">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className="navbarContent">
            <div className="navLinks">

            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="#landing">Home</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="#about">About Me</Link>
            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="#whatido">What I Do</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="#portfolio">Portfolio</Link>
            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="/">Client Speak</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsNavbar(false)} href="/">Contact Me</Link>
            </div>
            </div>
            <button style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s", position:"fixed", bottom:16, backgroundColor:"#333a40", color:"white", width:200, height:50, border:"none", borderRadius:16, cursor:"pointer"}} onClick={() => setAdminOn()}>Admin</button>

        </div>
    )
}

export default Navbar;