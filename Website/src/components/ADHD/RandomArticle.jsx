import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data, data1, data2 } from "./data";

export default function RandomArticle({ setAdhdTitle, setAdhdQuote }) {

        useEffect(() => {
            const adhd = document.getElementById("adhdTitle")?.innerText
            const quote = document.getElementById("adhdQuote")?.innerText
            setAdhdTitle(adhd)
            setAdhdQuote(quote)
        }, [setAdhdTitle, setAdhdQuote])
    
    const viewPoint = ["sent", "tidlig"];
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
                <h1 className="title" id="adhdTitle">To liv, én diagnose: <br /> Hvordan tidspunktet former ADHD-reisen</h1>
            </section>
            <section id="content">
                <article id="top">
                    <p>Hva betyr det å få en ADHD-diagnose som barn, sammenlignet med å få den som voksen? For mange kan diagnosen være en nøkkel til bedre selvforståelse og riktig hjelp. Likevel viser statistikken tydelig et mønster: Jenter og kvinner må ofte vente lenger enn gutter før de blir sett av helsevesenet. Mellom 2008 og 2013 fikk kun 1,7 % av jenter i alderen 6–17 år en ADHD-diagnose, sammenlignet med 4,3 % av gutter, ifølge Folkehelseinstituttet (FHI). Tidlig diagnose og intervensjon i skolealder er avgjørende for å gi barn bedre forutsetninger i livet, men jenter faller ofte utenfor radaren.</p>
                </article>
            </section>

            <section className="chart">
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

            <section id="content">
                <article id="under">
                    <p>
                    Internasjonal forskning peker på at gutters symptomer – som hyperaktivitet, impulsivitet og utagering – fanges opp raskere enn jenters, som ofte er mer subtile. Jenter med ADHD viser gjerne symptomer som dagdrømming, glemsomhet og problemer med organisering, noe som kan bli oversett i både skole og hjem. En norsk undersøkelse bekrefter at lærere oftere legger merke til gutters ADHD-symptomer, mens jentene forblir usynlige. Konsekvensen? Mange jenter får ikke diagnosen før langt senere i livet, og noen får den aldri.
                    </p>
                </article>
            </section>
            <section className="chart">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data1} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" label={{ value: "Prosent (%)", position: "insideBottom", offset: -10 }} />
                        <YAxis dataKey="gender" type="category" label={{ value: "Kjønn", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="1 - Før eller mens jeg gikk på barneskolen" stackId="a" fill="#003f5c" />
                        <Bar dataKey="2 - På ungdomsskolen" stackId="a" fill="#58508d" />
                        <Bar dataKey="3 - På videregående skole (ca. 16 til 19 år)" stackId="a" fill="#bc5090" />
                        <Bar dataKey="4 - Da jeg var mellom 20 og 30 år" stackId="a" fill="#ff6361" />
                        <Bar dataKey="5 - Etter jeg fylte 30 år" stackId="a" fill="#ffa600" />
                        <Bar dataKey="6 - Vet ikke" stackId="a" fill="#c9c9c9" />
                    </BarChart>
                </ResponsiveContainer>
            </section>
            <section id="content">
                <article>
                    <p>
                    En undersøkelse fra OsloMet, gjennomført for ADHD Norge i 2022, gir ytterligere innsikt i hvor alvorlig problemet er. Blant 3085 voksne med ADHD svarte hele 58,6 % av kvinnene at de først fikk diagnosen etter fylte 30 år. Dårlig henvisning til spesialister og manglende oppfølging er blant årsakene som trekkes frem. Blant de som opplevde dårlig henvisning, fikk nesten halvparten diagnosen etter fylte 30. For mange kvinner betyr dette flere tiår med feil behandling, frustrasjon og en følelse av å ikke bli forstått – både av seg selv og andre.
                    </p>
                
                </article>
            </section>
            <section className="chart">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data2} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} label={{ value: "Prosent (%)", position: "insideBottom", offset: -10 }} />
                        <YAxis dataKey="category" type="category" label={{ value: "", position: "insideLeft" }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="1 - Før eller mens jeg gikk på barneskolen" stackId="a" fill="#000033" />
                        <Bar dataKey="2 - På ungdomsskolen" stackId="a" fill="#003366" />
                        <Bar dataKey="3 - På videregående skole (ca. 16 til 19 år)" stackId="a" fill="#336699" />
                        <Bar dataKey="4 - Da jeg var mellom 20 og 30 år" stackId="a" fill="#6699CC" />
                        <Bar dataKey="5 - Etter jeg fylte 30 år" stackId="a" fill="#99CCFF" />
                        <Bar dataKey="7 - Har ikke fått diagnosen, men er under utredning" stackId="a" fill="#CCCCCC" />
                    </BarChart>
                </ResponsiveContainer>
            </section>
            
            <section id="content">
                <article>
                    <p>Til tross for at ADHD er et tema som berører mange, har vi erfart at det kan være vanskelig å få kommentarer fra sentrale aktører i helsevesenet. Vi har forsøkt å kontakte Sykehuset i Østfold for å få deres synspunkter på problematikken rundt sen diagnostisering, samt hvilke tiltak som kan bidra til å bedre dagens praksis. Dessverre har vi ikke mottatt svar fra dem innen publisering av denne artikkelen.</p>
                    <img src="" alt="" />

                    <p>Hva skjer når diagnosen kommer sent? Hvordan påvirkes livet når symptomene forblir ubehandlet gjennom barndom og ungdomstid? Og hvordan oppleves det å bli diagnostisert som barn, men møte andre utfordringer, som stigma og mobbing?</p>

                    <p>I denne artikkelen møter vi Tuva og Tora. Tuva fikk diagnosen som barn, noe hun i dag ser på som en fordel. Tora, derimot, fikk diagnosen først som voksen – en erfaring som har gitt henne både svar og nye spørsmål. Gjennom deres historier får vi et unikt innblikk i hvordan tidspunktet for diagnosen kan forme livsløpet, og hvorfor tidlig hjelp er så avgjørende.</p>
                    <img src="" alt="" />
                </article>
                <section id="btn">
                    <p>Hvordan kan tidspunktet for en diagnose forme livet?</p>
                    <p>Trykk på knappen nedenfor for å lese historien som kunne vært din.</p>
                    <button id="Knapp" onClick={handleBtn}>Velg historie</button>
                    {randomChoise && (
                        <section>
                            <h2 id="Valg">Du fikk {randomChoise}</h2>
                            <button>
                                <Link to={`/adhd/${randomChoise}`}>Les historien</Link>
                            </button>
                        </section>
                    )}
                </section>
            </section>
        </main>
    )
}
