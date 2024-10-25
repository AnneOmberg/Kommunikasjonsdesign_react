import { useState } from "react"
import { Link } from "react-router-dom"

export default function RandomArticle() {
    const viewPoint = ["late", "early"]
    const [randomChoise, setRandomChoise] = useState("")
    
    const handleBtn = () => {
        // const btn = getElementById("Knapp")
        const randomIndex = getRandomInt(viewPoint.length)
        const randomArt = viewPoint[randomIndex]

        // const valg = document.getElementById("Valg")
        // valg.innerHTML = "Computer selects " + randomArt
        console.log("Artikkel", randomArt)
        setRandomChoise(randomArt)

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return(
        <article>
            <button id="Knapp" onClick={handleBtn()}>Chose Story</button>
            <h2 id="Valg">You got {randomChoise}</h2>
            <button><Link to={"/adhd/" + randomChoise}></Link></button>
        </article>
    )
}