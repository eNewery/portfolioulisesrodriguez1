import React from "react";

const About = () => {
return(
    <div id="about" className="aboutContainer">

            <div style={{marginTop:64}}  className="aboutSubtitleContainer"><h2 className="aboutSubtitle">About Me</h2></div>
            <h3 className="aboutTitle">Know me More</h3>
            <div className="aboutSectionsContainer">
   {/* LEFT SECTION */}
   <div className="aboutLeftSectionContainer">
<h2 className="aboutTitleParagraph" style={{fontWeight:400}}>Hi, i'm <span style={{borderBottom:"3px solid yellow"}} className="aboutTitleHighlight">Ulises Rodriguez</span></h2>
<p className="aboutParagraph">My name is Ulises Ivo Rodriguez as the title says. I am 22 years old and since little one, I am a person completely focused on work and progress. I have a strong mentality open to listening to criticism that helps me be a better professional. I aspire for a lot and I don't expect anything for free, they are gone instilled valuable work values ​​that dispose and keep me obligated tobe a serious, willing and responsible person to do whatever I want requested in a timely manner</p>
</div>
  {/* RIGHT SECTION */}
        <div className="aboutRightSectionContainer">
<h2>4</h2>
<h3>Years Of Experience</h3>
</div>
            </div>
            <div className="aboutBoxesContainer">
                <div className="aboutBox"><p style={{color:"#F5DF4E"}}>Ulises Rodriguez</p></div>
                <div className="aboutBox"><p style={{color:"#F5DF4E"}}>ulisesrodriguezdev@gmail.com</p></div>
                <div className="aboutBox"><p style={{color:"#F5DF4E"}}>17/07/2001</p></div>
                <div className="aboutBox"><p style={{color:"#F5DF4E"}}>Buenos Aires, Mar del Plata</p></div>
            </div>
    </div>
)
}

export default About;