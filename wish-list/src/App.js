import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <WishList />
    </div>
  );
}

const WishList = () => {

  const [wishList, setWishList] = useState([]);
  const [wish, setWish] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('api/wishes');
        const data = response.data.wishes;
        setWishList(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  // useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem('wishes'));
  //   setWishList(localData);
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('wishes', JSON.stringify(wishList));
  // }, [wishList])

  const handleInputWish = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('api/wishes', {
        wish: {
          id: uuid(),
          name: wish
        }
      });

      if (response.status === 201) {
        setWishList([...wishList, response.data.wish]);
      }
      setWish("");
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div>
      <h1>WishList</h1>

      <div className="input">
        <input type="text" className="input-txt" value={ wish } onChange={ (e) => setWish(e.target.value) } required />
        <span className="flt-label">Your Wish</span>
      </div>

      <button className="btn primary" onClick={ handleInputWish } >Save</button>

      <h3>{ isError && 'Error' }</h3>
      <h3>{ isLoading && 'Loading...' }</h3>

      <ul>
        { wishList.map(wish => {
          return <p key={ wish.id }>{ wish.name }</p>;
        }) }
      </ul>
    </div>
  );
};

export default App;
