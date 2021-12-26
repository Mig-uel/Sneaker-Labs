import { displaySneakers } from './displaySneakers'

async function fetchJordans() {
  await fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&brand=Jordan", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      "x-rapidapi-key": process.env.KEY
    }
  })
    .then(response => {
      return response.json();
    })
    .then(shoes => {
      displaySneakers(shoes.count, shoes.results)
    })
    .catch(err => {
      console.error(err);
    });
}

export { fetchJordans }