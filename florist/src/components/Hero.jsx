
import Slider from "./Slider.jsx";

function Hero({ slides }) {
  return (
    <section className="hero container" id="home">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <h1>Fresh Flowers, Thoughtfully Arranged</h1>
          <p>
            Seasonal blooms crafted for everyday moments and meaningful
            occasions. Sourced responsibly and arranged with care.
          </p>
          <a href="#roses" className="btn btn-primary">Shop Flowers</a>
        </div>

        <div className="col-md-6">
          <Slider slides={slides} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
