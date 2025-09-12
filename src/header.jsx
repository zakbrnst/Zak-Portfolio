import './header.css'
function Header() {
  return (
    <div className="card-nav-container">
      <nav className="card-nav-left">
        <a href="/">
          <img src="/Zak-Portfolio/src/assets/logo-zak.png" className="card-nav-logo" alt="logo"/>
        </a>
      </nav>
      <nav className="card-nav-center">
        <a href="/Zak-Portfolio">
          <button className="card-nav-cta-button">Home</button>
        </a>
        <a href="/Zak-Portfolio/projects.html">
          <button className="card-nav-cta-button">Projects</button>
        </a>
        <button className="card-nav-cta-button">Placeholder</button>
      </nav>
      <nav className="card-nav-right">
        <button className="card-nav-cta-button">Contact</button>
      </nav>
    </div>
  );
}

export default Header;

