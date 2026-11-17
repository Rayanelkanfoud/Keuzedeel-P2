
function Categories({ categories }) {
  return (
    <section className="container">
      <div className="row g-3">
        {categories.map((category) => (
          <div className="col-12 col-md-6 col-lg-4" key={category.name}>
            <div className="category-card bg-white text-dark rounded p-3"
              id={category.name.toLowerCase()}>
              <h3 className="fw-normal mb-2">{category.name}</h3>
              <p className="mb-0">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
