// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function RandomArticle() {
//     const viewPoint = ["late", "early"];
//     const [randomChoise, setRandomChoise] = useState("");

//     const handleBtn = () => {
//         const randomIndex = getRandomInt(viewPoint.length);
//         const randomArt = viewPoint[randomIndex];
//         console.log("Article:", randomArt);
//         setRandomChoise(randomArt);
//     };

//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//     }

//     return (
//         <article>
//             <button id="Knapp" onClick={handleBtn}>Choose Story</button>
//             {randomChoise && (
//                 <section>
//                     <h2 id="Valg">You got {randomChoise}</h2>
//                     <button>
//                         <Link to={`/adhd/${randomChoise}`}>Go to Story</Link>
//                     </button>
//                 </section>
//             )}
//         </article>
//     );
// }
