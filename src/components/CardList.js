import Card from "./Card";
import useFetch from "../hooks/useFetch";

const CardList = () => {
  const { response, error } = useFetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&brand=Jordan', {
    method: "GET",
    "headers": {
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      "x-rapidapi-key": "d8469f9fa3mshfd352ae76b760c4p1fe951jsncf8ab3ca64fa"
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