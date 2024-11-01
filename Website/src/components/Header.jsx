import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link to="/"><h2><strong id="db"> DB </strong> News</h2></Link>
            <nav>
                <ul>
                    <Link to="/"><li id="home">Home</li></Link>
                </ul>
            </nav>
        </header>

        //     <nav>
        //     <h2 id="nav"><strong id="db"> DB </strong> News</h2>
        //     <h2 id="home"> <a href="#"> HOME </a></h2>
        // </nav>
    
        // <section id="content">
        //     <header id="header">
        //         <h1 id="title">Drikkingens dilemma: <br> Hvordan former alkohol studentmiljøet?</h1>                                                                
        //         <p class="foto">Foto: Jenny Østreng</p>
        //     </header>
    )
}