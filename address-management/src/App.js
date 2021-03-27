import axios from "axios";
import { useState, useEffect } from "react";
import { AddressForm, ShowAddresses } from "./component";
import "./App.css";

function App() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [msg, setMsg] = useState("");
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setMsg("Loading...");
        const { data: addresses } = await axios.get("api/addresses");
        setAddresses(addresses);
      } catch (error) {
        msg("Error");
      } finally {
        setMsg("");
      }
    })();
  }, []);

  return (
    <div className='App'>
      <h1>Address Management</h1>
      <button
        className='btn green'
        onClick={() => setShowAddressForm(!showAddressForm)}
      >
        {showAddressForm ? "Go Back" : "Add a new Address"}
      </button>
      {showAddressForm && (
        <AddressForm
          addresses={addresses}
          setAddresses={setAddresses}
          setShowAddressForm={setShowAddressForm}
          msg={msg}
          setMsg={setMsg}
        />
      )}
      <ShowAddresses
        addresses={addresses}
        setAddresses={setAddresses}
        msg={msg}
        setMsg={setMsg}
        setShowAddressForm={setShowAddressForm}
      />
    </div>
  );
}

export default App;
