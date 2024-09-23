import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            dolorem, voluptatibus fuga quaerat dolores commodi totam sint illo
            magni assumenda voluptate eveniet sit, excepturi libero non magnam
            ut neque ea!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
