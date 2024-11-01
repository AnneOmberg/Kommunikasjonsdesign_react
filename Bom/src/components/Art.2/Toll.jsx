import { useEffect, useState } from "react";
import { list } from "./TollList";
import Map from "./Map";
import MapTest from "./MapTest";

export default function Toll({ setTest }) {

    // const listTest = document.getElementById("List")?.innerText
    // const test = async () => {
    //     listTest.map((list) => {
    //         <li>{list}</li>
    //     })
    // }

    // const Test = async () => {

    // }
    
    // tollTest.scrollBy(300, 300)
    // tollTest.scrollBy({
    //     top: 100,
    //     left: 100,
    //     behavior: "smooth",
    // });

    //FUNCTION TO CHECK IF ELEMENT IS IN VIEWPORT
    
    useEffect(() => {
        const tollTest = document.getElementById("tollTitle")?.innerText
        setTest(tollTest)
    }, [setTest])



    return (
        <>
        {/* <section id='changesSection' className="scrollContainer scrollContainerDynamicBG">
            <div id="loser" className="scrollText">
            <h2>The first section to change background image</h2>
            <p>Changes to bilde1.jpg</p>
            </div>
            </section> */}
            <main id="toll">
                <section id="header">
                    <h1 id="tollTitle">Innespærra i Nedre Østfold -<br /> Hvor langt skal det gå?</h1>
                    <p className="photographer">Foto: Jenny Østreng</p>
                </section>
                <p id="test">WOHOOOO!!!</p>
                {/* <div>{test}</div> */}
                <section id="map">
                    <MapTest/>
                </section>
                <section id="content">
                    <article>
                        <p className="sitat" id="SPESIELL-ID"></p>
                        <figure>
                            <img src="./src/pictures/Toll" alt="" />
                            <p className="photo-text">
                            </p>
                            <figcaption className="photographer">
                                Foto: Jenny Østreng
                            </figcaption>
                        </figure>

                        <h3></h3>
                        <p>
                        </p>

                        <h4></h4>
                        <p>
                        </p>
                        <p className="sitat"></p>
                    </article>
            <p>Bomstasjoner</p>
            <ol id="List">
                {list?.map((tolls, index) => (
                    <li key={index}>{tolls.toll}</li>
                    // console.log(tolls.toll)
                ))}
            </ol>
            <p>Notes:
                Bomstasjonskart Bypakke Nedre Glomma fase 2. Oppstart januar 2024.
                Pilene indikerer innkrevingsretningen.

                S1, S2 = Stengte veier
                K1, K2 = Bomstasjoner Værstebrua og Kråkerøybrua

                For mer informasjon se bypakkenedreglomma.no eller bompengekalkulator.</p> 
                </section>
            </main>
        </>
    )
}