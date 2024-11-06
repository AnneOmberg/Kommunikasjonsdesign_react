import { Link } from "react-router-dom";

export default function Home({drinkTitle, jonasQuote, tollTitle, tollQuote}){
    return(
        <>

    <main id="Front-page">
        <h1>Siste nytt!</h1>
            <article id="XL">
        <Link to="/adhd">
                <h2>Diagnosering som voksen</h2>
                <img src="#" alt="#"/>
                <p>Mennesker som hører stemmer i sine hoder, kan f.eks. ha schizofreni. Og de som har storslåtte ideer - som tror de er Jesus eller konge - kan ha en form for manisk-depressiv (bipolar) sykdom.

                Men oftere er svaret mindre klart. Hvis du ikke kan holde en tale, betyr det at du har en sykdom (panikklidelse ?) eller at det bare er "nerver"? Hvis du er lei deg og er mismodig, betyr det bare at du er litt utafor, eller har du en depresjon som du kanskje trenger behandling for?
                
                Så, hva er normalt?</p>
        </Link>
            </article>

            <article id="L">
        <Link>
                <img src="#" alt="#"/>
                <h3>Artikkel-3</h3>
        </Link>
            </article>
        
            <Link to="/toll">
                <article id="M">
                    <img src="/Front-Page/Bilder/Forever-Nav.jpg" alt="#"/>
                    <h3>{tollTitle}</h3>
                    <p>{tollQuote}</p>
                </article>
            </Link>
            
            <Link to="/drinking">
                <article id="S">
                    <img src="src/pictures/Drinking/group-image.jpg" alt="#"/>
                    <h3>{drinkTitle}</h3>
                    <p>{jonasQuote}</p>
                </article>
            </Link>
    </main>

    {/* <footer>
        <table>
            <tfoot>
                <tr>
                    <th>Roller</th>
                    <th>Navn</th>
                </tr>
                <tr>
                    <td>Prosjektleder</td>
                    <td>Ida</td>
                </tr>
                <tr>
                    <td>Web-Utvikler</td>
                    <td>Anne</td>
                </tr>
                <tr>
                    <td>Jurnalist</td>
                    <td>Jenny</td>
                </tr>
                <tr>
                    <td>Designer</td>
                    <td>Vilde</td>
                </tr>
            </tfoot>
        </table>
    </footer> */}
        </>
    )
}