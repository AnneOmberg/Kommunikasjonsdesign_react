import { Link } from "react-router-dom";

export default function Home({drinkTitle, drinkQuote, tollTitle, tollQuote, robTitle, robQuote, adhdTitle, adhdQuote}){
    return(
        <>

            <main id="Front-page">
                <h1>Siste nytt!</h1>

                    <article id="XL">
                <Link to="/adhd">
                        <h2>{adhdTitle}</h2>
                        <img src="#" alt="#"/>
                        <p>{adhdQuote}</p>
                </Link>
                    </article>

                    <article id="L">
                <Link to="rob">
                        <img src="#" alt="#"/>
                        <h3>{robTitle}</h3>
                        <p>{robQuote}</p>
                </Link>
                    </article>
                
                    <Link to="/toll">
                        <article id="M">
                            <img src="src/pictures/toll/Bom.jpeg" alt="#"/>
                            <h3>{tollTitle}</h3>
                            <p>{tollQuote}</p>
                        </article>
                    </Link>
                    
                    <Link to="/drinking">
                        <article id="S">
                            <img src="src/pictures/Drinking/group-image.jpg" alt="#"/>
                            <h3>{drinkTitle}</h3>
                            <p>{drinkQuote}</p>
                        </article>
                    </Link>
            </main>
        </>
    )
}