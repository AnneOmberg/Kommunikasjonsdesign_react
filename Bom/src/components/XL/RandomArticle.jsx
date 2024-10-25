import { Link } from "react-router-dom"

export default function RandomArticle() {
    // function randomMinMax(min, max){
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }


    return(
        <article>
            <button><Link to="late">Late</Link></button>
            <button><Link to="early">Early</Link></button>
        </article>
    )
}