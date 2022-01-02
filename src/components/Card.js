const Card = ({ sneaker }) => {
  const bg = {
    backgroundImage: `url(${sneaker.media.imageUrl})`
  }

  if (sneaker.media.imageUrl === null) {
    bg.backgroundImage = `url(https://www.freeiconspng.com/uploads/no-image-icon-4.png)`
  }

  const handleMouseEnter = (e) => {
    const cardParent = e.target.parentNode;
    const hover = cardParent.querySelector('.info-container');

    hover.style.display = 'flex';

    hover.addEventListener('mouseleave', () => {
      hover.style.display = 'none';
    });
  }

  return (
    <span>
      <div className="card" style={bg} onMouseEnter={(e) => handleMouseEnter(e)}></div>
      <a className="info-container" href="https://google.com">
        {sneaker.name}
      </a>
    </span>
  );
}

export default Card;