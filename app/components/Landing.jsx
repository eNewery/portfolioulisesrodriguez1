import Link from "next/link";
import React from "react";

const Landing = () => {
    const handleClick = () => {
      const url = './cv.pdf'; // Ruta del archivo a descargar
  
      // Crea un elemento <a> para iniciar la descarga
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', true);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

return(
    <div id="landing" className="landingContainer">
      
      
      {/* LEFT SECTION */}
        <div className="landingLeftSectionContainer">
            <div>
<h3 className="textMedium" style={{fontWeight:400}}>Hi, i'm a freelance</h3>
<h2 className="textHighlight" style={{fontWeight:700}}>DEVELOPER <span style={{animation:"appear 1s infinite"}}>|</span></h2>
<h4 className="textSmall" style={{fontWeight:400}}>Based in Buenos Aires, Mar del Plata</h4>
            </div>
<div className="landingButtonsContainer"><Link href="#portfolio" className="landingWorksBtn">View my Works</Link><button onClick={handleClick} className="landingContactBtn">Dowloand my CV</button></div>
        </div>


      {/* RIGHT SECTION */}
        <div className="landingRightSectionContainer">
<div className="landingRightBox">
<img className="landingRightImage" src="./landingAnime.png" alt="" />
</div>
        </div>
<div className="landingButtonsContainer2"><Link href="#portfolio" className="landingWorksBtn">View my Works</Link><Link href="#contact" className="landingContactBtn">Contact Me</Link></div>
<img style={{position:"absolute", width:64, bottom:"0", animation:"appearArrow 2s infinite"}} src="./downArrow.png" alt="" />
    </div>
)
}

export default Landing