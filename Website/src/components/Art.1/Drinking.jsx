import { useEffect } from "react";

export default function Drinking({ setDrinkTitle, setDrinkQuote }) {

    useEffect(() => {
        const drinking = document.getElementById("drinkTitle")?.innerText
        const quote = document.getElementById("drinkQuote")?.innerText
        setDrinkTitle(drinking)
        setDrinkQuote(quote)
    }, [setDrinkTitle, setDrinkQuote])

    //Data for drikke-animasjon     
    //https://studenthelse.no/shot-2022/rusmidler/
    //https://www.fhi.no/publ/eldre/studenter-og-rusmidler/

    return (
        <main id="drink">
            <section className="header drinkHeader">
                <h1 className="title" id="drinkTitle">Drikkingens dilemma: <br /> Hvordan former alkohol studentmiljøet?</h1>
                <p className="photographer">Foto: Jenny Østreng</p>
            </section>

            <section id="content">
                <article id="drinking">
                    <p className="topQuote" id="drinkQuote">- Jeg synes det er litt leit at det alltid er alkohol med i bildet når man skal finne på noe med andre studenter, sier Jonas Heggelund (24), student ved Høgskolen i Østfold</p>

                    <figure>
                        <img src="./src/pictures/Drinking/man-drink.PNG" alt="kollektiv-bilde" />
                        <p className="photo-text">
                            Jonas Heggelund er lei av at studentene alltid drikker alkohol ved sosiale anledninger.
                        </p>
                        <figcaption className="photographer">
                            Foto: Jenny Østreng
                        </figcaption>
                    </figure>

                    <h3>Halvparten av studentene mener det drikkes for mye</h3>
                    <p>
                        Forskning viser at alkoholbruk blant studenter er utbredt, og mange deltar i såkalt «binge drinking» – drikking av fem til seks enheter eller mer i én setting. Samtidig viser SHoTundersøkelsen (Studentenes helse- og trivselsundersøkelse) fra 2022 at halvparten av studentene mener det drikkes for mye. Seks av ti studenter etterlyser flere alkoholfrie tilbud, og to av ti sier at de har unngått studentarrangementer på grunn av alkoholkulturen, og at det drikkes for mye.
                    </p>

                    <h4>Fadderuka – sosial velkomst eller drikkepress?</h4>
                    <p>
                        Fadderuka markerer starten på studietiden for mange nye studenter, og er ment å være en sosial, inkluderende uke med aktiviteter som bygger fellesskap. Målet er å gi studentene en god start og hjelpe dem med å knytte varige vennskap og relasjoner. Likevel opplever mange at fadderuka er preget av sterkt alkoholfokus, noe som skaper press for å delta i festkulturen. For mange fører dette til frykt for å havne utenfor det sosiale miljøet dersom de ikke drikker i like stor grad som andre, og mange ender opp med å drikke alkohol, selv om de ikke vil.
                    </p>
                    <p className="sitat">- Jeg følte på mye press under fadderuka om å alltid ta del i festkulturen. Selv om jeg ikke nødvendigvis ønsket å drikke så veldig mye, følte jeg på at jeg måtte det bare for å passe inn med alle rundt meg, sier Heggelund.</p>

                    <h4>En todelt opplevelse</h4>
                    <p className="sitat">- For å være helt ærlig, så er det eneste alternativet til fest å dra på brettspillkveld med boller og brus. Det er liksom ikke like kult.
                    </p>

                    <figure>
                        <img src="./src/pictures/Drinking/beerpong.PNG" alt="kollektiv-bilde" />
                        <p className="photo-text">
                            Her står studentene samlet rundt bordet for den velkjente drikkeleken "beer pong".
                        </p>
                        <figcaption className="photographer">
                            Foto: Jenny Østreng
                        </figcaption>
                    </figure>

                    <p>
                        For noen studenter er alkohol en naturlig del av studentlivet som de tror kan styrke sosiale relasjoner og fellesskap. For andre fungerer alkohol imidlertid som en barriere som skaper følelser av ekskludering. Mange oppfatter også de alkoholfrie alternativene som mindre attraktive, noe som fører til et press om å drikke for å unngå å stå utenfor. Når studentene ble spurt om hvilke alternativer som finnes til alkohol og fest, svarer Ronja Haraldseth (20) dette:
                    </p>
                    
                    <div className="background-parallax">
                        <img className="gif" src="./src/pictures/Drinking/transparent.webp" alt="drink animation" width="200px" />
                    </div>

                    <p className="sitat">- Flere studenter ved Høgskolen i Østfold mener derfor at det er på tide å skape et mer inkluderende studentmiljø ved å tilby flere attraktive alkoholfrie alternativer.</p>
                </article>
            </section>
        </main>
    )
}