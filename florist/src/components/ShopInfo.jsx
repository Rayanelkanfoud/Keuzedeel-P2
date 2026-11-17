
function ShopInfo({ shop }) {
  return (
    <section className="shop container" id="location">
      <div className="row align-items-center g-3">
        <div className="col-md-6">
          <img src={shop.image} alt="Florist shop" />
        </div>

        <div className="col-md-6">
          <h2>Visit Our Shop</h2>
          <p>
            {shop.address}<br />
            {shop.district}<br />
            {shop.city}
          </p>
          <p className="mb-0">
            {shop.days}<br />
            {shop.hours}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ShopInfo;
