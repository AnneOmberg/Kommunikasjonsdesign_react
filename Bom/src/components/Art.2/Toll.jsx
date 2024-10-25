import { useEffect, useState } from "react";
import { list } from "./TollList";
import Map from "./Map";

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
            <div id="map">
                <Map/>
            </div>
            <section id="content">
                <section id="header">
                    <h1 id="tollTitle">Innespærra i Nedre Østfold -<br /> Hvor langt skal det gå?</h1>
                    <p className="photographer">Foto: Jenny Østreng</p>
                </section>
                <p id="test">WOHOOOO!!!</p>
                {/* <div>{test}</div> */}
                <main>
                    <article>
                        <p className="sitat" id="SPESIELL-ID"></p>
                        <figure>
                            <img src="./src/pictures/" alt="" />
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
                </main>
            </section>
            <p>Bomstasjoner</p>
            <ol id="List">
                {list?.map((tolls, index) => (
                    <li key={index}>{tolls.toll}</li>
                    // console.log(tolls.toll)
                ))}

                {/* <li>Rv. 110 – Seut: 59.225253, 10.916457</li>
                <li>Rv. 110 – Fredrikstadbrua øst: 59.207374, 10.968305</li>
                <li>Fv. 381 – Veumveien: 59.235725, 10.932217</li>
                <li>Fv. 109 – Råbekken: 59.243911, 10.981632</li>
                <li>Kv. – Dikeveien: 59.242653, 10.982024</li>
                <li>Kv. – Evjebekken: 59.239674, 10.991795</li>
                <li>Fv. 112 – Hauge bru: 59.323444, 10.956405</li>
                <li>Fv. 109 – Rolvsøysund: 59.269294, 11.028108</li>
                <li>Rv. 22 – Årum vest: 59.257960, 11.054326</li>
                <li>Fv. 107 – Vardeveien: 59.232806, 11.054400</li>
                <li>Fv. 130 – Skjærviken: 59.214917, 11.083399</li>
                <li>Rv. 22 – Hafslund syd: 59.271676, 11.129987</li>
                <li>Kv. Navestadveien: 59.264743, 11.122296</li>
                <li>Fv. 118 - Sarpsbru: 59.276222, 11.132943</li>
                <li>Fv. 114 – Grålum: 59.295273, 11.064848</li>
                <li>E6 – Rampeavkjøring Lekevoll fra sør: 59.296025, 11.069185</li>
                <li>E6 – Rampeavkjøring Lekevoll fra nord: 59.296672, 11.065751</li>
                <li>Fv. 118 – Kalnes: 59.305571, 11.042623</li>
                <li>Fv. 109 – Alvim vest: 59.270763, 11.070972</li>
                <li>Fv. 1168 – Alvimveien: 59.269200, 11.075840</li>
                <li>E6 – Rampeavkjøring Alvim fra nord: 59.276017, 11.084626</li>
                <li>E6 – Rampeavkjøring Alvim fra sør: 59.277506, 11.085907</li>
                <li>Kv. Tuneveien: 59.293812, 11.075446</li>
                <li>Fv. – Ny bru i Fredrikstad: 59.250323, 11.014572</li>*/}
            </ol>
            <p>Notes:
                Bomstasjonskart Bypakke Nedre Glomma fase 2. Oppstart januar 2024.
                Pilene indikerer innkrevingsretningen.

                S1, S2 = Stengte veier
                K1, K2 = Bomstasjoner Værstebrua og Kråkerøybrua

                For mer informasjon se bypakkenedreglomma.no eller bompengekalkulator.</p> 
        </>
    )
}