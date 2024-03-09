import React from "react";

const WhatIDo = () => {
  return (
    <div id="whatido" className="iDoContainer">

      <div style={{marginTop:92}} className="iDoSubtitleContainer">
        <h2 className="iDoSubtitle">What I Do</h2>
      </div>
      <div>

      <h3 className="iDoTitle">How I can help your next project</h3>
      <div className="idoCardsContainer">
        <div className="iDoCard"><img src="./iDoDesktop.png" alt="" /><h2 className="iDoCardTitle">Web Design</h2><p className="iDoCardText">El diseño web es la creación de sitios web con un enfoque en la estética, la usabilidad y la funcionalidad. Implica la planificación y la creación de diseños atractivos y funcionales que sean visualmente atractivos y fáciles de navegar para los usuarios.</p></div>
        <div className="iDoCard"><img src="./iDoMegafono.png" alt="" /><h2 className="iDoCardTitle">SEO Marketing</h2><p className="iDoCardText">El SEO y el marketing se unen para aumentar la visibilidad en línea y la participación del público objetivo. SEO mejora la visibilidad en los motores de búsqueda, mientras que el marketing abarca estrategias más amplias para promover productos o servicios.</p></div>
        <div className="iDoCard"><img src="./iDoPaint.png" alt="" /><h2 className="iDoCardTitle">Graphic Design</h2><p className="iDoCardText">El diseño gráfico es el arte de combinar texto e imágenes para comunicar un mensaje visualmente. Incluye la creación de elementos gráficos como logotipos, folletos, carteles, y otros materiales de marketing para ayudar a las empresas a transmitir su identidad y mensajes de manera efectiva.</p></div>
        <div className="iDoCard"><img src="./iDoPencil.png" alt="" /><h2 className="iDoCardTitle">UI/UX Design</h2><p className="iDoCardText">El diseño de interfaz de usuario (UI) y experiencia de usuario (UX) se centra en mejorar la interacción del usuario con un producto digital. UI se refiere al diseño visual y la disposición de elementos en una interfaz, mientras que UX se centra en la experiencia general del usuario, incluida la usabilidad, accesibilidad y satisfacción del usuario.</p></div>
      </div>
      </div>
    </div>
  );
};

export default WhatIDo;
