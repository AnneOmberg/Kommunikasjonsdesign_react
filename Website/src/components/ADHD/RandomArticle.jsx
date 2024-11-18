import { useState } from "react";
import { Link } from "react-router-dom";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "./data";

export default function RandomArticle() {
    const viewPoint = ["late", "early"];
    const [randomChoise, setRandomChoise] = useState("");

    const handleBtn = () => {
        const randomIndex = getRandomInt(viewPoint.length);
        const randomArt = viewPoint[randomIndex];
        console.log("Article:", randomArt);
        setRandomChoise(randomArt);
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <main id="adhd">
            <section id="content">
                <article>
                    <button id="Knapp" onClick={handleBtn}>Choose Story</button>
                    {randomChoise && (
                        <section>
                            <h2 id="Valg">You got {randomChoise}</h2>
                            <button>
                                <Link to={`/adhd/${randomChoise}`}>Go to Story</Link>
                            </button>
                        </section>
                    )}
                </article>
            </section>
            <section id="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        </main>
    )
}
