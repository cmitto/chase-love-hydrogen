import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "Welcome | Chase Love Club" }];
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="../../public/chaselovepromo.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="content">
        {/* Logo */}
        <img src="../../public/chaselovelogotext.png" alt="Logo" className="logo" />


        {/* Navigation Buttons */}
        <nav className="nav-buttons">
          <Link to="/shop" className="nav-button">Shop</Link>
          <Link to="/collections" className="nav-button">Lookbook</Link>
          <Link to="/blogs/news" className="nav-button">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
