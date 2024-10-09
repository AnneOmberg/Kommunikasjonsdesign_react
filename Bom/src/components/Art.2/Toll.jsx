import { useEffect } from "react";

export default function Toll({ setTest }) {

    useEffect(() => {
        const tollTest = document.getElementById("title")?.innerText
        setTest(tollTest)
    }, [setTest])

    return (
        <>
            <section id="content">
                <section id="header">
                    <h1 id="title">Innespærra i Nedre Østfold -<br /> Hvor langt skal det gå?</h1>
                    <p className="photographer">Foto: Jenny Østreng</p>
                </section>
                <p id="test">WOHOOOO!!!</p>
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
            <ol>
                <li>Rv. 110 – Seut</li>
                <li>Rv. 110 – Fredrikstadbrua øst</li>
                <li>Fv. 381 – Veumveien</li>
                <li>Fv. 109 – Råbekken</li>
                <li>Kv. – Dikeveien</li>
                <li>Kv. – Evjebekken</li>
                <li>Fv. 112 – Hauge bru</li>
                <li>Fv. 109 – Rolvsøysund</li>
                <li>Rv. 22 – Årum vest</li>
                <li>Fv. 107 – Vardeveien</li>
                <li>Fv. 130 – Skjærviken</li>
                <li>Rv. 22 – Hafslund syd</li>
                <li>Kv. Navestadveien</li>
                <li>Fv. 114 – Grålum</li>
                <li>E6 – Rampeavkjøring Lekevoll fra sør</li>
                <li>E6 – Rampeavkjøring Lekevoll fra nord</li>
                <li>Fv. 118 – Kalnes</li>
                <li>Fv. 109 – Alvim vest</li>
                <li>Fv. 1168 – Alvimveien</li>
                <li>E6 – Rampeavkjøring Alvim fra nord</li>
                <li>E6 – Rampeavkjøring Alvim fra sør</li>
                <li>Kv. Tuneveien</li>
                <li>Fv. – Ny bru i Fredrikstad</li>
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