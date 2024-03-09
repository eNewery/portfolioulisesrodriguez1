"use client"
import Link from "next/link";
import React from "react";

const Navbar = ({setIsModal, isModal}) => {

    return(
        <div className="navbarContainer">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className="navbarContent">
            <div className="navLinks">

            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="#landing">Home</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="#about">About Me</Link>
            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="#whatido">What I Do</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="#portfolio">Portfolio</Link>
            <Link style={{animation:"navbarIconFromLeft 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="/">Client Speak</Link>
            <Link style={{animation:"navbarIconFromRight 1s both", animationDelay:"1s"}} onClick={() => setIsModal(false)} href="/">Contact Me</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;