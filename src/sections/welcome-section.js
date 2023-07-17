import "../styles/welcome-section.css";
function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="saludo-contenedor">
        <div className="user-description-container">
          <h4>HELLO, I'M A</h4>
          <h1>Softwar Developer</h1>
          <p>
            Hi, I'm Diego Bacuy, a softwar developer based in Ecuador,
            <br />
            Welcome to mi portfolio
          </p>
        </div>
        <div className="photo-profile-container"></div>
      </div>
    </section>
  );
}
export default WelcomeSection;
