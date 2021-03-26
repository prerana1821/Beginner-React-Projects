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
  const [newWish, setWish] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data: { wishes } } = await axios.get('api/wishes');
        setWishList(wishes);
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
      const { status, data: { wish } } = await axios.post('api/wishes', {
        wish: {
          id: uuid(),
          name: newWish
        }
      });

      if (status === 201) {
        setWishList((wishList) => wishList.concat(wish));
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
        <input type="text" className="input-txt" value={ newWish } onChange={ (e) => {
          const { value } = e.target;
          setWish(value)
        } } required />
        <span className="flt-label">Your Wish</span>
      </div>

      <button className="btn primary" onClick={ handleInputWish } >Save</button>

      <h3>{ isError && 'Error' }</h3>
      <h3>{ isLoading && 'Loading...' }</h3>

      <ul>
        { wishList.map(({ id, name }) => {
          return <p key={ id }>{ name }</p>;
        }) }
      </ul>
    </div>
  );
};

export default App;
