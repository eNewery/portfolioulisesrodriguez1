import React from "react";
import Link from "next/link";
const Contact = () => {
  return (
    <div id="contact" className="contactContainer">
      <div className="leftContactContainer">
        <h2>Let's get in touch</h2>
        <p>
          I enjoy discussing new projects and design challenges. Please share as
          much info, as possible so we can get the most out of our first
          catch-up.
        </p>
        <h3>Living In:</h3>
        <p>Buenos Aires, Mar del Plata</p>
        <h3>Face-to-face work possibilities:</h3>
        <p>Italy, Spain, Argentina</p>
        <h3>Call:</h3>
        <p>+54 9 223 5 794-769</p>
        <div style={{ gap: 16, display: "flex" }} className="contactIcons">
            <Link target="_blank" href="https://www.linkedin.com/in/ulises-rodriguez-5b512a230/">
          <img
            style={{ width: 32, height: 32 }}
            className="contactIcon"
            src="./linkedinBlack.png"
            alt=""
          />
            </Link>
            <Link target="_blank" href="https://github.com/eNewery/">
          <img
            style={{ width: 32, height: 32 }}
            className="contactIcon"
            src="./github.png"
            alt=""
          />
            </Link>
        </div>
      </div>
      <div className="rightContactContainer">
        <h2>Estimate your Project?</h2>
        <label style={{ marginTop: "2em" }} htmlFor="">
          What is your name?
        </label>
        <input type="text" />
        <label htmlFor="">Your Email Address:</label>
        <input type="text" />
        <label htmlFor="">How can I Help you?</label>
        <textarea style={{ height: 200 }} type="text" />
        <button style={{marginBottom:16}} className="contactBtn">SEND</button>
      </div>
    </div>
  );
};

export default Contact;
