import './header.css'
import Logo from './assets/logo-zak.png'

function Header() {
  return (
    <div className="card-nav-container">
      <nav className="card-nav-left">
        <a href="/zak-portfolio">
          <img src={Logo} className="card-nav-logo" alt="logo"/>
        </a>
      </nav>
      <nav className="card-nav-center">
        <a href="/zak-portfolio">
          <button className="card-nav-cta-button">Home</button>
        </a>
        <a href='project-page.html'>
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

