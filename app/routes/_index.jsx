import { Link } from "@remix-run/react";
//import "../styles/landing.css"; // Import the external CSS file

export const meta = () => {
  return [{ title: "Welcome | My Store" }];
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/promo.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="content">
        <img src="/images/logo.png" alt="Logo" className="logo" />

        <nav>
          <Link to="/shop" className="nav-button">Enter Store</Link>
          <Link to="/collections" className="nav-button">All Collections</Link>
          <Link to="/blogs/news" className="nav-button">News</Link>
        </nav>
      </div>
    </div>
  );
}
