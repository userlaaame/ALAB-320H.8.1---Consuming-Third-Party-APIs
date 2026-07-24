# ALAB 320H.8.1 - Consuming Third-Party APIs

A React application that consumes the [Star Wars API (SWAPI)](https://swapi.dev/) and renders a card for each starship returned from the API.

---

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Implementation Hints](#implementation-hints)
- [Bonus Objectives](#bonus-objectives)
- [Deliverables](#deliverables)

---

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Create a React application based on given requirements
- Consume an external API and render its data according to requirements

---

## Requirements

| # | Requirement |
|---|-------------|
| 1 | Research the [SWAPI documentation](https://swapi.dev/documentation) to find the endpoint for the **starships** resource |
| 2 | Create a `services/sw-api.js` service module **all** API/fetch calls must be made from this module |
| 3 | Use **named exports** to expose AJAX functionality, e.g. `export function getAllStarships() {...}` |
| 4 | Obtain all starships from the API and render a **card for each** within `<App>` |
| 5 | Each card must display the starship's **name** |

> **Styling is secondary** in this lab — functionality comes first.

---

## Architecture

The app separates data-fetching from presentation:

```
services/sw-api.js       All fetch calls live here (named exports)
        │
        ▼
<App>                    Holds starships in state, calls the service on mount
        │
        ▼
<StarshipCard />         One per starship renders the starship's name
```

**Target project structure:**

```
src/
  main.jsx                    App entry point
  App.jsx                     Root component holds starships in state
  App.css                     App-level styles
  index.css                   Global styles
  services/
    sw-api.js                 SWAPI fetch calls (named exports)
  components/
    StarshipCard.jsx          Renders a single starship card
```

---

## Getting Started

**Prerequisites:** Node.js (LTS)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

**Available scripts:**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

> **Note on tooling:** The lab instructions reference `create-react-app`, which is now deprecated by the React team. This project uses **Vite** instead — the React concepts being tested are identical. Exploring Next.js, Vite, and Remix is encouraged as part of ongoing learning.

---

## Implementation Hints

Process tips to get started:

1. **Hold starships in state** with `useState` initialize to an **empty array**
2. **Use `useEffect`** to make the AJAX request once the app loads
3. **Update state** with the setter function once the data comes back
4. **Create and import** a `StarshipCard` component into `App.jsx`
5. **`.map()` over** each starship object in state to transform them into `<StarshipCard />` components

> ⚠️ **CORS gotcha:** If you run into a Cross-Origin Resource Sharing issue, try changing your `/starships` endpoint to `/starships/` (with a trailing slash). Trust us on that one. 😎

---

## Bonus Objectives

If you have time, try the following:

| Objective | Description |
|-----------|-------------|
| **Richer cards** | Display additional details for each starship in its respective card |
| **Pagination** | Use SWAPI's pagination feature to load additional starships at the click of a button |

---

## Deliverables

- A link to a GitHub repository containing the completed lab with **no errors**
- Submit the repository link to Canvas

> Comment out anything that does not work rather than leaving it broken.

---

> **Git reminder:** Use frequent commits throughout your process.
