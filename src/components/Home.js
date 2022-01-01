
import CardList from './CardList';

const Home = () => {
  return (
    <div className="home">
      <h1>All Sneakers</h1>
      <div className="card-container">
        <CardList />
      </div>
    </div>
  );
}

export default Home;