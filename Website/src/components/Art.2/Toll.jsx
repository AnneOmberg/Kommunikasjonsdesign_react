import { useEffect, useState } from "react";
import { list } from "./TollList";
import Map from "./Map";
// import MapTest from "./MapTest";

export default function Toll({ setTollTitle, setTollQuote }) {

    //FUNCTION TO CHECK IF ELEMENT IS IN VIEWPOR
    useEffect(() => {
        const toll = document.getElementById("tollTitle")?.innerText
        const quote = document.getElementById("Jonas")?.innerText
        setTollTitle(toll)
        setTollQuote(quote)
    }, [setTollTitle, setTollQuote])

    return (
        <>
            <main id="toll">
                <section id="header">
                    <h1 id="tollTitle">Bomringer i hverdagen: <br />Kostnaden for å krysse bygrensene</h1>
                    <p className="photographer">Foto: Jenny Østreng</p>
                </section>
                <section id="map">
                    <Map/>
                </section>
                <section id="textContent">              
                    <section className="textOverflow">
                        <p id="topText" className="textOverlay">Siden 20. mars 2024 har de 23 bomstasjonene i Sarpsborg og Fredrikstad krevd inn bompenger fra bilister. Hensikten er å finansiere Bypakke Nedre Glomma, et prosjekt for å forbedre infrastruktur, veier og kollektivtilbudet i området. Likevel opplever flere innbyggere, som Einar Kjell Nilsen (62), at bompengene og tilhørende prosjekter er unødvendige eller belastende.</p>

                        <p className="sitat textOverlay" id="sit">-	Bompengene er sure penger som ikke går til noen ting, sier Nilsen, som oppgir å passere bomringen omtrent ti ganger i uken, blant annet for å besøke familie i Fredrikstad.</p>
                    </section>

                    <section className="textOverflow secondText">
                        <p id="secondText" className="textOverlay">For en bilist med bensin- eller dieselbil uten bombrikke utgjør dette en månedlig kostnad på rundt 1280 kroner, noe som kan gjøre selv enkle ærender kostbare.</p>

                        <p className="sitat textOverlay" id="sita">-	Regningen kommer hele tiden, og flere har gått til inkasso. Når man ikke klarer å betale, blir bombrikken stengt, og man får ikke lenger 20 % rabatt på passeringene. Da må man betale full pris, og det blir en slags ond sirkel, sier Gitte Yvonne Bjørndal Olsen.</p>
                    </section>
                </section>

                <section id="content">
                    <article>
                        <p className="sitat" id="Jonas">-	De som styrer Sarpsborg vet ikke hvordan det er å sitte med tom lommebok, og istedenfor å se mennesker ser de tall, sier Gitte Yvonne Bjørndal Olsen (55) fra Sarpsborg.</p>
                        <p>For mange i Sarpsborg og Fredrikstad har bompenger blitt en stor utgift i hverdagen. Vi har snakket med flere som må krysse bomringen daglig – til jobb, familie og fritid – og som føler bompengene påvirker både økonomi og livskvalitet.</p>
                        
                        <p className="sitat">-	Det er en regning som kommer på toppen av alt annet, som man egentlig aldri har råd til, sier Gitte Yvonne Bjørndal Olsen (55) fra Sarpsborg.</p>
                        <h3></h3>
                        <p>Hun kjører ofte omveier for å unngå bommene og planlegger turer til andre byer som Halden for å handle.</p>
                        
                        {/* <p>Siden 20. mars 2024 har de 23 bomstasjonene i Sarpsborg og Fredrikstad krevd inn bompenger fra bilister. Hensikten er å finansiere Bypakke Nedre Glomma, et prosjekt for å forbedre infrastruktur, veier og kollektivtilbudet i området. Likevel opplever flere innbyggere, som Einar Kjell Nilsen (62), at bompengene og tilhørende prosjekter er unødvendige eller belastende.</p>
                        <p className="sitat">-	Bompengene er sure penger som ikke går til noen ting, sier Nilsen, som oppgir å passere bomringen omtrent ti ganger i uken, blant annet for å besøke familie i Fredrikstad.</p>
                        <p>For en bilist med bensin- eller dieselbil uten bombrikke utgjør dette en månedlig kostnad på rundt 1280 kroner, noe som kan gjøre selv enkle ærender kostbare.</p>

                        <p className="sitat">-	Regningen kommer hele tiden, og flere har gått til inkasso. Når man ikke klarer å betale, blir bombrikken stengt, og man får ikke lenger 20 % rabatt på passeringene. Da må man betale full pris, og det blir en slags ond sirkel, sier Gitte Yvonne Bjørndal Olsen.</p> */}

                        <p>Både Olsen og Nilsen påpeker at kostnadene ved bomringene særlig rammer de med lavere inntekt, som uføre og pensjonister, eller småbarnsfamilier som må kjøre barna til aktiviteter.</p>

                        <p className="sitat">-	De som styrer Sarpsborg vet ikke hvordan det er å sitte med tom lommebok, og istedenfor å se mennesker ser de tall, sier Olsen.</p>
                        <p>Samtidig er det viktig å merke seg at inntektene fra bompengene skal brukes til å forbedre kollektivtransporten og utvikle veier i regionen, noe som kan gi langsiktige fordeler for innbyggerne ved at det blir enklere å sykle og gå. Det er et håp om at investeringene vil bidra til mindre biltrafikk og bedre miljøforhold i fremtiden (Bypakke Nedre Glomma).</p>
                        
                        <p className="sitat">-	Det er totalen som er viktig for Bypakke Nedre Glomma, det statlige nullvekstmålet og de kommende utbyggingsprosjektene, står det på deres nettside.</p>
                    </article>
                </section>
            </main>
        </>
    )
}