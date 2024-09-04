import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import { useEffect } from "react";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);

  return (
    <div className="App">
      <h1>CATS SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div className="row" key={cat.id}>
            <div className="column column-left">
              <img
                src={`https://d2zp5xs5cp8zlg.cloudfront.net/image-53920-800.jpg`}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>VIEW MORE CATS</button>
    </div>
  );
}

export default App;
