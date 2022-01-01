const Card = ({ sneaker }) => {
  const bg = {
    backgroundImage: `url(${sneaker.media.imageUrl})`
  }
  if (sneaker.media.imageUrl === null) {
    bg.backgroundImage = `url(https://www.freeiconspng.com/uploads/no-image-icon-4.png)`
  }

  return (
    <span>
      <div className="card" style={bg}></div>
      <a className="info-container" href="https://google.com">
        {sneaker.name}
      </a>
    </span>
  );
}

export default Card;