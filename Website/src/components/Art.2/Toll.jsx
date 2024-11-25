import { useEffect, useState } from "react";
import { list } from "./TollList";
import Map from "./Map";
// import MapTest from "./MapTest";

export default function Toll({ setTollTitle, setTollQuote }) {

    //FUNCTION TO CHECK IF ELEMENT IS IN VIEWPOR
    useEffect(() => {
        const toll = document.getElementById("tollTitle")?.innerText
        const quote = document.getElementById("tollQuote")?.innerText
        setTollTitle(toll)
        setTollQuote(quote)
    }, [setTollTitle, setTollQuote])

    return (
        <>
            <main id="toll">
                <section className="header tollHeader">
                    <h1 className="title" id="tollTitle">Bomringer i hverdagen: <br />Kostnaden for å krysse bygrensene</h1>
                    <p className="photographer">!!!</p>
                </section>
                <section id="content">
                    <article id="bom">
                        <section id="top">
                            <p className="topQuote" id="tollQuote">-	De som styrer Sarpsborg vet ikke hvordan det er å sitte med tom lommebok, og istedenfor å se mennesker ser de tall, sier Gitte Yvonne Bjørndal Olsen (55) fra Sarpsborg.</p>
                            <p>For mange i Sarpsborg og Fredrikstad har bompenger blitt en stor utgift i hverdagen. Flere innbyggere må krysse bomringen daglig – til jobb, familie og fritid – og føler at bompengene påvirker både økonomi og livskvalitet.</p>
                            
                            <p className="sitat">– Det er en regning som kommer på toppen av alt annet, som man egentlig aldri har råd til, sier Gitte Yvonne Bjørndal Olsen (55) fra Sarpsborg.</p>
                            
                            <p>Den uføre alenemoren forteller at hun ofte velger å kjøre omveier for å unngå bommene. I tillegg planlegger hun turer til andre byer, som Halden, hvor hun handler for å redusere utgiftene.</p>
                        </section>
                        {/* <p>Siden 20. mars 2024 har de 23 bomstasjonene i Sarpsborg og Fredrikstad krevd inn bompenger fra bilister. Hensikten er å finansiere Bypakke Nedre Glomma, et prosjekt for å forbedre infrastruktur, veier og kollektivtilbudet i området. Likevel opplever flere innbyggere, som Einar Kjell Nilsen (62), at bompengene og tilhørende prosjekter er unødvendige eller belastende.</p>
                        <p className="sitat">-	Bompengene er sure penger som ikke går til noen ting, sier Nilsen, som oppgir å passere bomringen omtrent ti ganger i uken, blant annet for å besøke familie i Fredrikstad.</p>
                        
                        <p>For en bilist med bensin- eller dieselbil uten bombrikke utgjør dette en månedlig kostnad på rundt 1280 kroner, noe som kan gjøre selv enkle ærender kostbare.</p>
                        <p className="sitat">-	Regningen kommer hele tiden, og flere har gått til inkasso. Når man ikke klarer å betale, blir bombrikken stengt, og man får ikke lenger 20 % rabatt på passeringene. Da må man betale full pris, og det blir en slags ond sirkel, sier Gitte Yvonne Bjørndal Olsen.</p> */}
                    </article>
                </section>
                <section className="textContent">              
                    <section className="textOverflow topText">
                        <p id="topText" className="textOverlay">Siden 20. mars 2024 har de 23 bomstasjonene i Sarpsborg og Fredrikstad krevd inn bompenger fra bilister. Hensikten er å finansiere Bypakke Nedre Glomma, et prosjekt som skal forbedre infrastrukturen, inkludert veier og kollektivtilbudet i området. Prosjektet skal gjøre det lettere å reise miljøvennlig i framtiden, men på kort sikt har det ført til frustrasjon blant mange bilister.</p>

                        <p className="textOverlay" id="sit">Einar Kjell Nilsen (62) fra Fredrikstad er blant dem som stiller spørsmål ved hele bompengeordningen:
                            <p className="sitat" id="p-sit">– Bompengene er sure penger som ikke går til noen ting, sier han. Nilsen oppgir å passere bomringen omtrent ti ganger i uken for å besøke familie i Sarpsborg.</p>
                        </p>
                    </section>
                {/* </section> */}

                
                {/* <section className="textContent"> */}
                    <section className="textOverflow secondText">
                        <p id="secondText" className="textOverlay">For en bilist med bensin- eller dieselbil uten bombrikke kan disse passeringene raskt bli en stor økonomisk byrde. Kostnaden kan komme opp i rundt 1280 kroner per måned, og for mange blir selv enkle ærender kostbare. For de som allerede har en stram økonomi, kan regningen bli uoverkommelig.</p>

                        <p className="sitat textOverlay" id="sita">– Regningen kommer hele tiden, og flere har gått til inkasso. Når man ikke klarer å betale, blir bombrikken stengt, og man mister 20 % rabatt på passeringene. Da må man betale full pris, og det blir en slags ond sirkel, sier Gitte Yvonne Bjørndal Olsen.</p>
                    </section>
                </section>
                <section id="map">
                    <Map/>
                </section>
                <section id="buttom">
                    <article>
                        <h3>Rammen skjevt</h3>
                        <p>Flere innbyggere, som Olsen og Nilsen, opplever at bomringene rammer dem som har minst å rutte med, spesielt uføre, pensjonister og småbarnsfamilier. Mange av dem har ikke noe alternativ til bil.</p>

                        <p className="sitat">– De som styrer Sarpsborg vet ikke hvordan det er å sitte med tom lommebok. I stedet for å se mennesker, ser de bare tall, sier Olsen frustrert.</p>

                        <h3>Innvesterer i familien</h3>
                        <p>På den andre siden argumenterer forkjempere for bomringene at inntektene er nødvendige for å oppnå bærekraftige løsninger på lengre sikt. Bypakke Nedre Glomma bruker inntektene fra bompenger til å forbedre kollektivtransporten og utvikle infrastrukturen for syklister og fotgjengere.</p>
                        
                        <p className="sitat">– Det er totalen som er viktig for Bypakke Nedre Glomma, det statlige nullvekstmålet og de kommende utbyggingsprosjektene, står det på deres nettside.</p>

                        <h3>Hva skjer videre?</h3>
                        <p>Debatten om bomringer fortsetter, både i Sarpsborg og Fredrikstad, og i resten av landet. Mange innbyggere håper på bedre tilrettelegging for dem som er avhengige av bil, og som har dårligere økonomi, mens andre ser frem til effektene av en mer miljøvennlig transportpolitikk.</p>
                        <p>For Gitte Yvonne Bjørndal Olsen og Einar Kjell Nilsen handler det imidlertid om dagens utfordringer – og hvordan man skal få endene til å møtes.</p>
                        <p className="sitat">– Vi må få hverdagen til å gå rundt. Men det føles som om politikerne har glemt oss som faktisk må betale regningen, sier Olsen.</p>
                        <p>Uansett hvilken side av saken man står på, er det klart at bomringene har blitt et sentralt tema i byenes liv og politikk. Spørsmålet blir om innbyggerne vil føle at pengene de betaler, til slutt er verdt det, eller ikke.</p>
                    </article>
                </section>
            </main>
        </>
    )
}