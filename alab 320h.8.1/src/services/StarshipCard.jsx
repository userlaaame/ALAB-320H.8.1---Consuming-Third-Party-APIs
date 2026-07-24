export default function StarshipCard({ starship }) {
    return (
        <div className="starship-card">
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Crew: {starship.crew}</p>
        </div>
    )
}