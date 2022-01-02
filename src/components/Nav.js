import { useState, useEffect } from 'react';

const Nav = () => {
  const image = {
    imageURL: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    author: 'Taylor Smith',
    hotlink: 'https://unsplash.com/photos/aDZ5YIuedQg',
    unsplash: 'https://unsplash.com/',
  }

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const nav = document.querySelector('nav');
    const navWrapper = nav.querySelector('.nav-wrapper');
    const searchBar = nav.querySelector('.search-bar');
    const author = nav.querySelector('.image-author');

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    if (scroll > 150) {
      nav.classList.add('test');
      navWrapper.classList.add('test2');
      searchBar.style.display = 'none';
      author.style.display = 'none';
    }
    else {
      nav.classList.remove('test');
      navWrapper.classList.remove('test2');
      searchBar.style.display = 'block';
      author.style.display = 'block';
    }
  }, [scroll]);

  return (
    <nav style={{ backgroundImage: `url(${image.imageURL})` }} >
      <div className="nav-wrapper">
        <h1 className="nav-title">Sneaker Labs</h1>
        <input type="text" className="search-bar" placeholder="Search for a sneaker, brand, style..." />
      </div>
      {image &&
        <p className="image-author">Photo by <a href={image.hotlink} target="_blank" rel="noopener noreferrer">{image.author}</a> on <a href={image.unsplash} target="_blank" rel="noreferrer noopener">Unsplash</a></p>}
    </nav>
  );
}

export default Nav;