
function Slider({ slides }) {
  if (!slides?.length) return null;

  return (
    <div id="flowerCarousel" className="carousel slide slider"
      data-bs-ride="carousel" data-bs-interval="4000">

      <div className="carousel-inner h-100">
        {slides.map((slide, index) => (
          <div className={`carousel-item h-100 ${index === 0 ? "active" : ""}`} key={index}>
            <img src={slide.image} alt={slide.title} />

            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button"
        data-bs-target="#flowerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button"
        data-bs-target="#flowerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
