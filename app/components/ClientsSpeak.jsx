import Link from "next/link";
import React from "react";

const ClientsSpeak = () => {
    return(
        <div className="clientsContainer">
      <div style={{marginTop:96}} className="clientsSubtitleContainer">
        <h2 className="clientsSubtitle">Clients Speak</h2>
      </div>
      <h3 className="clientsTitle">What Some of my Clients Say</h3>
      <div className="clientReview">
<Link target="_blank" href="https://www.upwork.com/freelancers/~01b20caeee53c32027"> "I had the pleasure of working with Ulises on a recent project, and I am extremely impressed with the results. Ulises consistently delivered high-quality work within the specified deadlines. Ulises is not only skilled and knowledgeable in React, but also demonstrated excellent communication throughout the project.

He went above and beyond to ensure that the project not only met but exceeded my expectations. Ulises is a true professional, and I would highly recommend him to anyone seeking top-notch expertise in React. I look forward to working with Ulises again in the future." 
</Link>
<img src="./client.jpg" alt="" />
<p style={{fontSize:12, marginTop:8}}>Djordje Djordjevic</p>
<p style={{fontSize:8}}>Gameville, Serbia</p>
      </div>
        </div>
    )
}

export default ClientsSpeak;