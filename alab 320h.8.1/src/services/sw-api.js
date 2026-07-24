const BASE_URL = "https://swapi.dev/api/starships/"

export async function getAllStarships() {
    const response = await fetch(BASE_URL)

    if (!response.ok) {
        throw new Error(`SWAPI request failed: ${response.status}`)
    }

    const json = await response.json()
    return json.results
}