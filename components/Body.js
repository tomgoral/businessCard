import React from "react"

const aboutText ="I'm a frontend & machine learning developer with a particular interest in making things simple and clean . I have experience  applying these tools in a corporate environment where I was responsible for product profitability and vitality! I'm always looking for new things to learn and people to meet."

const interestsText="Coding. Martial Arts. Guitar. Reading. "

export default function Body(){
    return(
        <div className="main--body">
            <h1>Tom Goral</h1>
            <br/>
            <h2>About</h2>
            <p>{aboutText}</p>
            <h2>Interests</h2>
            <p>{interestsText}</p>
        </div>
    )
}