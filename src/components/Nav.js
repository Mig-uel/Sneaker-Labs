const Nav = () => {
  const image = {
    imageURL: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    author: 'Taylor Smith',
    hotlink: 'https://unsplash.com/photos/aDZ5YIuedQg',
    unsplash: 'https://unsplash.com/',
  }

  return (
    <div className="nav" style={{ backgroundImage: `url(${image.imageURL})` }}>
      <div className="nav-wrapper">
        <h1 className="nav-title">Sneaker Labs</h1>
        <input type="text" className="search-bar" placeholder="Search for a sneaker, brand, style..." />
      </div>
      {image &&
        <p className="image-author">Photo by <a href={image.hotlink} target="_blank" rel="noopener noreferrer">{image.author}</a> on <a href={image.unsplash} target="_blank" rel="noreferrer noopener">Unsplash</a></p>}
    </div>
  );
}

export default Nav;