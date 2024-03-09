"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Portfolio = () => {
    const [link, setLink] = useState("all")
    const [projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(proj)
if (link === "all") {
    setProjects(proj)
}
if (link === "personal") {
    const filteredCategory = proj.filter(item => item.category === "personal")
    setProjects(filteredCategory)
}
if (link === "works") {
    const filteredCategory = proj.filter(item => item.category === "work")
    setProjects(filteredCategory)
}
    }, [link])


const proj = [{
projectImage:"./projectCrushHub.png",
projectTitle:"Crush Hub",
category:"personal",
figmaLink:"https://www.figma.com/file/E7HzQT1PPWcaAECQJRJvku/Crush-Hub?type=design&mode=design&t=z4F2bz1ZNlYsFMTx-1",
figma: true,
icons: ["./reactNative.png", "./firebase.png"]
}, {
    projectImage:"./projectAnglo.png",
    projectTitle:"Anglohispana",
    category:"work",
    figmaLink:"https://www.figma.com/file/vMor84JV0Bcpc4MbnjleV2/Anglo?type=design&mode=design&t=fNA8USqeDkOunrUn-1",
    figma: true,
    icons: ["./react.png", "./firebase.png"]
}, {
    projectImage:"./projectVet.png",
    projectTitle:"Vet App",
    category:"work",
    figmaLink:"https://www.figma.com/file/qjcdKB5P1eRuqUqqp5duXZ/Vet-App?type=design&mode=design&t=fNA8USqeDkOunrUn-1",
    figma: true,
    icons: ["./react.png", "./reactNative.png", "./firebase.png"]
},
{
    projectImage:"./projectGameville.png",
    projectTitle:"Panel CMS",
    category:"work",
figma:false,
icons: ["./react.png", "./firebase.png"]
}]
    return(
        <div id="portfolio" className="portfolioContainer">
      <div style={{marginTop:96}} className="portfolioSubtitleContainer">
        <h2 className="aboutSubtitle">Portfolio</h2>
      </div>
      <h3 className="portfolioTitle">Some of my most recent projects</h3>

      <div className="portfolioLinks">
        <button onClick={() => setLink("all")} className={link === "all" ? "all portfolioLinkSelected" : "portfolioLinkDisabled all"}>All</button>
        <button onClick={() => setLink("personal")} className={link === "personal" ? "personal portfolioLinkSelected" : "portfolioLinkDisabled personal"}>Personal</button>
        <button onClick={() => setLink("works")} className={link === "works" ? "works portfolioLinkSelected" : "portfolioLinkDisabled works"}>Works</button>
      </div>
      <div className="portfolioCardsContainer">
        {projects.map(item => (
                    <div className="portfolioCard"><img src={item.projectImage} alt="" /><p className="cardText">{item.projectTitle}{item.figma === true ? <Link target="_blank" href={item.figmaLink}><img src="./figma.png"/></Link> : ""}</p><div className="cardIcons">{item.icons.map(item => (<img src={item} alt="" />))}</div></div>
        ))}
      </div>
        </div>
    )
}

export default Portfolio;