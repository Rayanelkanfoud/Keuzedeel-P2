# Florist · Opdracht 1

## Welke technieken heb ik gebruikt en waarom?

- **React en JSX.**ik heb de pagina opgedeeld in componenten, zoals het menu, de carrousel en de categorieën. zo kan ik elk deel apart aanpassen en blijft de code overzichtelijk.
- **Fetch en JSON.** Met `fetch()` haal ik `flowers.json` op zodra de pagina opent. De gegevens worden in React opgeslagen. met `.map()` maak ik voor elke categorie een kaart met de naam en beschrijving. zo kan ik de gegevens aanpassen op één plek. Tijdens het laden zie je een laadtekst en als het ophalen mislukt verschijnt er een foutmelding.
- **Bootstrap.** Met het grid staan de kaarten op pc in drie kolommen op tablet in twee en op mobiel in één. Ik gebruik ook de Bootstrap-carrousel en het inklapbare menu, omdat die al de knoppen en het openen en sluiten regelen.
- **Eigen CSS en media queries.** Ik gebruik CSS voor de kleuren, afstanden en tekstgroottes. Met media queries kan ik die bijvoorbeeld op mobiel aanpassen zodat de laout goed past op een kleiner scherm.
- **Vite.** daarmee kan ik de site lokaal starten tijdens het bouwen. Met `npm run build` maak ik de versie die ik online kan zetten.
