const Card = ({ sneaker }) => {
  const bg = {
    backgroundImage: `url(${sneaker.media.imageUrl})`
  }
  if (sneaker.media.imageUrl === null) {
    bg.backgroundImage = `url(https://www.freeiconspng.com/uploads/no-image-icon-4.png)`
  }

  return (
    <div className="card-container">
      <div className="card" style={bg}></div>
      <div className="info-container">
        <div className="sneaker-name">{sneaker.name}</div>
      </div>
    </div>
  );
}

export default Card;