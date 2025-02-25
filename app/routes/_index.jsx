import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "Welcome | Chase Love Club" }];
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/chaselovepromo.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="content">
        {/* Logo */}
        <img src="/chaselovelogotext.png" alt="Logo" className="landing-logo" />


        {/* Navigation Buttons */}
        <nav className="nav-buttons">
          <Link to="/shop" className="nav-button">Shop</Link>
          <Link to="/lookbook" className="nav-button">Lookbook</Link>
          <Link to="/contact" className="nav-button">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
