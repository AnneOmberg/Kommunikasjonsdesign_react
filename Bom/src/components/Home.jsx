import { Link } from "react-router-dom";
import Drinking from "./Art.1/Drinking";

export default function Home(){
    return(
        <>
            <Link to="/drinking">Drikke</Link>
            <Link to="/toll">Bom-ring</Link>
        </>
    )
}