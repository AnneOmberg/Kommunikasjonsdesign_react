import { useState } from "react";
import { Link } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "./data";

export default function RandomArticle() {
    const viewPoint = ["late", "early"];
    const [randomChoise, setRandomChoise] = useState("");

    const handleBtn = () => {
        const randomIndex = getRandomInt(viewPoint.length);
        const randomArt = viewPoint[randomIndex];
        console.log("Article:", randomArt);
        setRandomChoise(randomArt);
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <main id="adhd">
            <section className="header adhdHeader">
                <h1 className="title" id="adhdTitle">ADHD-diagnose:<br />Hva betyr tidspunktet?</h1>
            </section>
            <section id="content">
                <article>
                    <p>Mellom 2008 og 2013 var 4,3 % av gutter og 1,7 % av jenter i alderen 6–17 år registrert med en ADHD-diagnose i Norsk pasientregister, ifølge en rapport fra Folkehelseinstituttet (FHI) fra 2016. De fleste får diagnosen tidlig i skolealder, og FHI beskriver tidlig intervensjon som avgjørende for å gi barn bedre forutsetninger i livet. Likevel er det mange barn som ikke fanges opp av spesialisthelsetjenesten, noe som bidrar til underdiagnostisering – særlig blant jenter.</p>
                    <figure>
                        <img src="./src/pictures/ADHD/Tora.jpg" alt="Bilde av Tora" />
                        <p className="photo-text">
                        Dette er det første Tora Murtnes-Hatlestad (30) hadde å si da hun fikk spørsmål om hverdagen før hun fikk diagnosen. Hun fikk diagnosen i en alder av 29 år, og det var ingen som hadde mistenkt at hun kunne ha diagnosen før nå.
                        </p>
                        <figcaption className="photographer">
                            Foto: Jenny Østreng
                        </figcaption>
                    </figure>

                    <p>
                        Statistikk viser en klar skjevfordeling mellom kjønnene: Mens 4,3 % av guttene i skolealder ble diagnostisert i perioden, gjaldt det samme kun 1,7 % av jentene. Denne ubalansen er ikke unik for Norge – internasjonal forskning peker på at gutters ADHD-symptomer ofte er mer synlige, preget av impulsivitet, hyperaktivitet og utagerende atferd. Jenter derimot kan ha mer subtile symptomer, noe som gjør dem lettere å overse.
                    </p>

                    <p>
                        Her spiller lærere og foreldre en avgjørende rolle, ettersom de ofte står bak henvisningene til spesialister. Likevel viser en norsk undersøkelse at lærere har en tendens til å legge mer merke til gutters ADHD-symptomer enn jenters. Konsekvensen? Mange jenter får ikke diagnosen før langt senere i livet – eller aldri. Hva betyr dette for dem som vokser opp uten å bli sett?
                    </p>
                    <img src="" alt="" />

                    <p>En nyere undersøkelse fra OsloMet, gjennomført for ADHD Norge i 2022, gir innsikt i utfordringene voksne med ADHD møter i helsevesenet. Av de 3085 voksne som deltok, svarte 58,6 % av kvinnene at de først fikk diagnosen etter fylte 30 år. For mange synes manglende eller dårlig henvisning til spesialister å være en viktig forklaringsfaktor. Blant de som oppga at de ikke fikk henvisning, fikk 44,8 % diagnosen etter fylte 30, og 25 % i alderen 20–30 år. </p>
                    <img src="" alt="" />

                    <p>En tilsvarende trend ble funnet blant de som rapporterte «dårlig henvisning» som utfordring: 48,4 % fikk diagnosen etter fylte 30, mens 23,2 % var i 20-årene. Dette peker på mulige svakheter i systemet som skal sikre tidlig identifisering og oppfølging, og en stor andel deltakere oppgir å ha et udekket behov for psykisk helsehjelp. Selv om årsakene kan være sammensatte, tyder funnene på et behov for å styrke henvisningspraksisen og tilgjengeligheten til spesialisthelsetjenester for voksne med ADHD. 
                    </p>
                    <img src="" alt="" />
                </article>
                <section>
                    <button id="Knapp" onClick={handleBtn}>Choose Story</button>
                    {randomChoise && (
                        <section>
                            <h2 id="Valg">You got {randomChoise}</h2>
                            <button>
                                <Link to={`/adhd/${randomChoise}`}>Go to Story</Link>
                            </button>
                        </section>
                    )}
                </section>
            </section>
            <section id="chart">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" label={{ value: "Alder (År)", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Prosent (%)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Jenter" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="Gutter" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        </main>
    )
}
