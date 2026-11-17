
function Header() {
  const links = ["Home", "Roses", "Bouquets", "Plants", "Gifts", "Location"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#home">Florist</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav">
            {links.map((link) => (
              <a className="nav-link" href={`#${link.toLowerCase()}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
