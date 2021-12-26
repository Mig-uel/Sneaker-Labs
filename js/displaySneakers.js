function displaySneakers(total, results) {
  const container = document.querySelector('.sneaker-info-container');
  let fragment = document.createDocumentFragment();

  for (i = 0; i < results.length; i++) {
    /* Sneaker Card */
    let card = document.createElement('div');
    card.className = 'sneaker-cards';

    /* Sneaker Image */
    let imgNode = document.createElement('img');
    imgNode.className = 'sneaker-img';
    imgNode.alt = results[i].title;
    imgNode.onerror = function () {
      this.src = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
    };

    if (results[i].media.imageUrl === null)
      imgNode.src = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
    else
      imgNode.src = results[i].media.imageUrl;

    /* Sneaker Title */
    let title = document.createElement('div');
    title.className = 'sneaker-title';
    title.innerHTML = results[i].title;

    /* Sneaker Info */
    let sneakerInfoContainer = document.createElement('div');
    sneakerInfoContainer.className = 'sneaker-info';

    let releaseDate = document.createElement('div');
    releaseDate.className = 'release-date';
    releaseDate.innerHTML = `Release Date: ${results[i].releaseDate}`;

    let price = document.createElement('div');
    price.className = 'price';

    if (results[i].retailPrice == 0)
      price.innerHTML = `Retail Price: N/A`;
    else
      price.innerHTML = `Retail Price: $${results[i].retailPrice}`;

    /* Appending */
    sneakerInfoContainer.appendChild(releaseDate)
    sneakerInfoContainer.appendChild(price)

    card.appendChild(imgNode)
    card.appendChild(title)
    card.appendChild(sneakerInfoContainer)

    fragment.appendChild(card)
  }
  // console.log(results);
  container.appendChild(fragment);
}
export { displaySneakers }