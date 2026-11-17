
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import ShopInfo from "./components/ShopInfo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/data/flowers.json");
        if (!response.ok) throw new Error("Data ophalen mislukt");
        setData(await response.json());
      } catch (error) {
        setError(error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Header />
      <main>
        {error && <p className="container">{error}</p>}
        {!data && !error && <p className="container">Loading...</p>}

        {data && (
          <>
            <Hero slides={data.slides} />
            <Categories categories={data.categories} />
            <ShopInfo shop={data.shop} />
          </>
        )}
      </main>
      {data && <Footer socials={data.socials} />}
    </>
  );
}

export default App;
