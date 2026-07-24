import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./services/StarshipCard";
import "../src/App.css"

export default function App() {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        async function fetchStarships() {
            try {
                const starshipData = await getAllStarships()
                setStarships(starshipData)
            } catch (error) {
                console.error("Failed to load starships:", error)
            }
        }

        fetchStarships()
    }, [])

    return (
        <main>
            <h1>Star Wars Starships</h1>
            <div className="card-list">
                {starships.map((starship) => (
                    <StarshipCard starship={starship} key={starship.name} />
                ))}
            </div>
        </main>
    )
}