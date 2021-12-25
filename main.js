import dotenv from "dotenv";
dotenv.config();

async function fetchSneakers() {
  await fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&brand=nike", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      "x-rapidapi-key": process.env.KEY
    }
  })
    .then(response => {
      console.log(response.json());
    })
    .catch(err => {
      console.error(err);
    })``;
}

// fetchSneakers();