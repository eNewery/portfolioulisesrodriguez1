"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Portfolio = ({turnModalOn, proj}) => {
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
                    <div className="portfolioCard"><img src={item.projectImage} alt="" /><p className="cardText">{item.projectTitle}<div style={{display:"flex"}}>{item.figma === true ? <Link target="_blank" href={item.figmaLink}><img src="./figma.png"/></Link> : ""}</div></p><div className="cardIcons">{item.icons.map(item => (<img src={item} alt="" />))}<img onClick={() => turnModalOn(item)} style={{cursor:"pointer", backgroundColor:"#212121", position:"absolute", top:8, right:8, width:32, height:32}} src="./details.png" alt="" /></div></div>
        ))}
      </div>
        </div>
    )
}

export default Portfolio;