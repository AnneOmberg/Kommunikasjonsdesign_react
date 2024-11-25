import { useEffect } from "react";

export default function Rob({ setRobTitle, setRobQuote }) {

    const times = [
        {time: "18:00", id: "one"},
        {time: "18:20", id: "two"},
        {time: "18:30", id: "three"},
        {time: "18:35", id: "four"},
        {time: "18:38", id: "five"},
        {time: "18:39", id: "six"},
        {time: "18:42", id: "seven"},
        {time: "18:50", id: "eight"},
        {time: "18:53", id: "nine"},
        {time: "18:54", id: "ten"},
        {time: "18:59", id: "elleven"},
        {time: "19:15", id: "twelve"},
    ]
    
    useEffect(() => {
        const rob = document.getElementById("robTitle")?.innerText
        const quote = document.getElementById("robQuote")?.innerText
        setRobTitle(rob)
        setRobQuote(quote)
    }, [setRobTitle, setRobQuote])

    //Data for drikke-animasjon     
    //https://studenthelse.no/shot-2022/rusmidler/
    //https://www.fhi.no/publ/eldre/studenter-og-rusmidler/

    return (
        <main id="robing">
            <section className="header robHeader">
                <h1 className="title" id="robTitle">Ungdom utsatt for knivran <br /> – mann pågrepet kort tid etter</h1>
                <p className="photographer">Foto: Jenny Østreng</p>
            </section>

            <section id="content">
                <article id="rob">
                    <p className="topQuote" id="robQuote">“Pappa det er noen som truer oss med kniv!”</p>

                    <h4>Søndag 23. august 2020 i Vestby:</h4>
                    <p>
                    En rolig kveldstur med hundene tok en dramatisk vending for to ungdommer da de ble utsatt for et knivran i et industriområde i Vestby. Den mistenkte, som allerede var kjent for lignende hendelser, ble raskt pågrepet takket være snarrådige handlinger fra ofrene og deres pårørende.
                    </p>

                    <figure>
                        <img src="./src/pictures/Rob/Line_Oda.png" alt="Bilde av Line og Oda" />
                        <p className="photo-text">
                            Lengst frem står Line-Aurora Herberg Thorvaldsen (17) med Oda Randem-Hansel (17) i bakgrunn
                        </p>
                        <figcaption className="photographer">
                            Foto: Line-Aurora Herberg Thorvaldsen
                        </figcaption>
                    </figure>
                    
                </article>
            </section>

            <div className="row">
                <div className="clock">
                    <h2>18:00</h2>
                    <figure>
                        <img src="../src/pictures/Rob/18.00.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                </div>
                <section className="content">
                    <h4 className="noMarg">Planlagt tur endte i dramatikk</h4>
                    <p>
                    Det var en varm ettermiddag da Line-Aurora Herberg Thorvaldsen (17) bestemte seg for å ta en tur med hunden. Hun avtalte å møte venninnen Oda Randem-Hansel (17) ved "Vanntårnet", som ligger på halvveien mellom jentenes hjem. Selv om Lines mor hadde advart henne om å være forsiktig på grunn av nylige ran i området, følte Line seg trygg i det solfylte været.
                    </p>
                    
                </section>
            </div>
        
            {/* Another pair */}
            <div className="row">
                <div className="clock">
                    <h2>18:20</h2>
                    <figure>
                        <img src="../src/pictures/Rob/18.20.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                </div>
                <section className="content">
                    <p>På vei til vanntårnet ble Line sneiet av en merkelig mann på sykkel, men hun tenkte ikke noe mer over det da hun så venninen Oda komme gående</p> 
                        {/* <p>Annet enn dette startet turen uten problemer, men etter kort tid la Line merke til den samme mannen på sykkel som oppførte seg merkelig. Han syklet mot dem på den øde gangvei bak noen industribygg, en rute som sjelden brukes av andre.</p> */}
                    {/* <figure>
                        <img className="drawing" src="../src/pictures/ADHD/Tora/motorsykkel-backgrunn2x.webp" alt="kollektiv-bilde" />
                        <p className="photo-text">
                        - Det var en ganske syk opplevelse, forklarer hun. – Jeg innså hvordan andre må ha det hver dag.
                        </p>
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure> */}
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>18:30</h2>
                    <figure>
                        <img src="../src/pictures/Rob/18.30.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                </div>
                <section className="content">
                <p>Annet enn dette startet turen uten problemer, men etter kort tid la Line merke til den samme mannen på sykkel som oppførte seg merkelig. Han syklet mot dem på den øde gangvei bak noen industribygg, en rute som sjelden brukes av andre.</p>
                    {/* <h4>Fra ubehag til trussel</h4>
                    <p>
                    Mannen stanset og henvendte seg til jentene, tilsynelatende for å låne en mobiltelefon. Line, som nylig hadde fått en ny mobil, avslo. Oda derimot, ga fra seg sin telefon. Det som startet som en tilsynelatende harmløs forespørsel, eskalerte raskt da mannen krevde passordet til telefonen. Da jentene nølte, dro han frem en kniv og stilte seg truende overfor dem.
                    </p>
                    <p className="sitat">- Jeg skjønte umiddelbart hva som skjedde og ropte til Oda at vi måtte løpe, forteller Line.
                    </p> */}

                    {/* <figure>
                        <img src="./src/pictures/Rob/Line.jpg" alt="kollektiv-bilde" />
                        <p className="photo-text">
                        Line-Aurora Herberg Thorvaldsen (17)
                        </p>
                        <figcaption className="photographer">
                            Foto: Jenny Østreng
                        </figcaption>
                    </figure> */}
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>18:35</h2>
                    {/* <figure>
                        <img src="../src/pictures/Rob/18.35.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure> */}
                </div>
                <section className="content">
                <h4 className="noMarg">Fra ubehag til trussel</h4>
                
                    <p>
                    Mannen stanset og henvendte seg til jentene, tilsynelatende for å låne en mobiltelefon. </p>
                    <figure>
                        <img src="../src/pictures/Rob/18.35.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                    <p>Line, som nylig hadde fått en ny mobil, avslo. Oda derimot, ga fra seg sin telefon. Det som startet som en tilsynelatende harmløs forespørsel, eskalerte raskt da mannen krevde passordet til telefonen.
                    </p>
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>18:37</h2>
                    {/* <figure>
                        <img src="../src/pictures/Rob/18.37.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure> */}
                </div>
                <section className="content">
                    <p>
                    Da jentene nølte, dro han frem en kniv og stilte seg truende overfor dem.
                    </p>
                <figure>
                        <img src="../src/pictures/Rob/18.37.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                    <p className="sitat">- Jeg skjønte umiddelbart hva som skjedde og ropte til Oda at vi måtte løpe, forteller Line.
                    </p>
                    
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>18:38-39</h2>
                    <figure>
                        <img src="../src/pictures/Rob/18.38-39.png" alt="kollektiv-bilde" />
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                </div>
                <section className="content">
                    <p>Mens Line løp fra stedet sammen med hunden sin, ble Oda stående igjen. Line rakk å varsle sin far via telefon, men var i sjokk og slet med å forklare situasjonen. </p>

                    <h4>“Pappa det er noen som truer oss med kniv!”</h4>
                    <p>Da forsto brått faren alvoret I situasjonen og kastet seg i bilen. På vei ned mot jentene knakk han en demper på bilen, samt ødela han både et dekk og en av bilens felger.</p>
                    <p>Kort tid etter telefonsamtalen kom Oda løpende tilbake, tydelig preget, men med mobiltelefonen sin i behold. Hva som skjedde mellom mannen og Oda, har hun i etterkant ikke ønsket å snakke om.</p>
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>18:42-18:59</h2>
                </div>
                <section className="content">
                    <h4 className="noMarg">Pågripelse på stedet</h4>
                    <p>Lines far, som hadde kastet seg i bilen for å komme til unnsetning, ankom kort tid etter. Han plukket opp jentene og de møtte Oda’s mor ved vanntårnet, der jentene originalt hadde møttes. Her fikk Line igjen øye på mannen. - “Pappa det er han!” ropte jeg, forteller Line. Uten å nøle gikk faren til fysisk anholdelse og holdt mannen tilbake til politiet ankom stedet kort tid etterpå.</p>
                    <p>Kniven, som mannen hadde forsøkt å kvitte seg med, ble funnet i nærheten. Politiet arresterte mannen og gjennomførte avhør på stedet. Han ble senere varetektsfengslet og siktet for flere ran i området, inkludert denne hendelsen.</p>
                    <figure>
                        <img src="./src/pictures/Drinking/beerpong.PNG" alt="kollektiv-bilde" />
                        <p className="photo-text">
                            Her står studentene samlet rundt bordet for den velkjente drikkeleken "beer pong".
                        </p>
                        <figcaption className="photographer">
                            Foto: Jenny Østreng
                        </figcaption>
                    </figure>
                </section>
            </div>

            <div className="row">
                <section className="content">
                    <h4>Konsekvenser for ofrene</h4>
                    <p>
                    For Line har hendelsen satt dype spor. Hun har utviklet panikkangst og sliter med trygghetsfølelsen, spesielt når hun er alene eller i ukjente situasjoner.
                    </p>
                    <p className="sitat">– Det skjedde så nærme hjemme, et sted hvor jeg alltid har følt meg trygg. Det har vært vanskelig å venne seg til at tryggheten ble tatt fra meg, sier Line.</p>
                </section>
            </div>

            <div className="row">
                <div className="clock">
                    <h2>16.april</h2>
                </div>
                <section className="content">
                    <p>Rettsprosessen, som fant sted et halvt år senere, ga en viss avslutning. Mannen ble dømt til varetektsfengsling og 72 dagers fengsel, i tillegg til erstatningskrav til jentene.</p>
                    <p className="sitat">– Rettssystemet tok saken på alvor, og det hjalp meg til å føle at vi ble hørt, sier Line, som likevel påpeker at hendelsen vil følge henne resten av livet.</p>
                </section>
            </div>

            <div className="row">
                <section className="content">
                    <h4>Et viktig oppgjør</h4>
                    <p>
                    Mannen er mistenkt for lignende ran mot minst 6–7 andre ungdommer i området. Politiet mener at Line, Oda og farens handlinger var avgjørende for å få stoppet mannen.
                    </p>
                    <p className="sitat">– Det er skremmende å tenke på at han kunne ha fortsatt om vi ikke hadde handlet, avslutter Line.</p>
                    <p>Mer om mannen og dommen kan leses <a href="https://www.vestbyavis.no/forst-ble-vestby-mannen-domt-for-fire-ran-na-har-han-fatt-enda-en-dom/s/5-53-732410" id="dommen">her</a></p>
                </section>
            </div>

        </main>
    )
}