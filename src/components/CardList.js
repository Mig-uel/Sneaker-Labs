import Card from "./Card";
import useFetch from "../hooks/useFetch";

const CardList = () => {
  const { response, error } = useFetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&brand=Jordan', {
    method: "GET",
    "headers": {
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_SNEAKER_KEY}`
    }
  });
  console.log(error);
  return (
    <>
      {response && response.results.map(sneaker => (
        <Card key={sneaker.id} sneaker={sneaker} />
      ))}
    </>
  );
}

export default CardList;