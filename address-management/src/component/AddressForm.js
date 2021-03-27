import axios from "axios";
import { useState } from "react";

export const AddressForm = ({
  addresses,
  setAddresses,
  setShowAddressForm,
  msg,
  setMsg,
  editAdd,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Andhra Pradesh");
  const [country, setCountry] = useState("India");
  const [addressType, setAddressType] = useState("Home");
  const states = [
    "Andhra Pradesh",
    "Assam",
    "Goa",
    "Kerala",
    "Maharashtra",
    "Bihar",
    "Gujarat",
    "Haryana",
    "Manipur",
    "Sikkim",
  ];

  const countries = ["India"];

  const addressTypes = ["Home", "Office"];

  console.log({ editAdd });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(name);
    // console.log(phoneNumber);
    // console.log(zipCode);
    // console.log(address);
    // console.log(city);
    // console.log(state);
    // console.log(country);

    try {
      setMsg("Saving data to Server");
      const {
        status,
        data: { address: addressFromServer },
      } = await axios.post("api/addresses", {
        address: {
          name: name,
          phonenumber: phoneNumber,
          zipcode: zipCode,
          address: address,
          city: city,
          state: state,
          country: country,
          addresstype: addressType,
        },
      });

      if (status === 201) {
        setAddresses([...addresses, addressFromServer]);
      }
      setName("");
      setPhoneNumber("");
      setZipCode("");
      setAddress("");
      setCity("");
      setState("Andhra Pradesh");
      setCountry("India");
      setShowAddressForm(false);
      setAddressType("Home");
    } catch (error) {
      setMsg("Couldn't save data to the Server");
    } finally {
      setMsg("");
    }
  };

  const handleReset = () => {
    setName("");
    setPhoneNumber("");
    setZipCode("");
    setAddress("");
    setCity("");
    setState("Andhra Pradesh");
    setCountry("India");
    setAddressType("Home");
  };

  return (
    <div>
      <h2>Address Form</h2>

      <h3>{msg}</h3>

      <form onSubmit={handleSubmit} className='address-form'>
        <div className='flex-input'>
          <div className='input'>
            <input
              type='text'
              className='input-txt'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <span className='flt-label'>Your Name</span>
          </div>

          <div className='input'>
            <input
              type='number'
              className='input-txt'
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className='flt-label'>Phone Number</span>
          </div>
        </div>

        <div className='flex-input'>
          <div className='input'>
            <input
              type='number'
              className='input-txt'
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <span className='flt-label'>Zip Code</span>
          </div>

          <div className='input'>
            <input
              type='text'
              className='input-txt'
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className='flt-label'>City</span>
          </div>
        </div>

        <div className='flex-input'>
          <div className='input'>
            <textarea
              className='input-txtarea'
              cols='20'
              rows='10'
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <span className='flt-label'>Address</span>
          </div>

          <div>
            <select
              className='input-select'
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((stte) => {
                return <option value={stte}>{stte}</option>;
              })}
            </select>

            <select
              className='input-select'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((cntry) => {
                return <option value={cntry}>{cntry}</option>;
              })}
            </select>

            <div className='radio'>
              <p>Select the Address Type:</p>
              {addressTypes.map((addType) => {
                return (
                  <label className='input-radio-label'>
                    <input
                      className='input-radio'
                      type='radio'
                      value={addType}
                      checked={addressType === addType}
                      onChange={(e) => setAddressType(e.target.value)}
                    />
                    {addType}
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        <div className='flex-input center'>
          <button className='btn primary' type='submit'>
            Add Address
          </button>
          <button className='btn secondary' onClick={handleReset} type='reset'>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

// update(e) {
//         e.preventDefault();
//         const employee = {
//             name: this.state.name,
//             age: this.state.age,
//             salary: this.state.salary,
//         }
//         axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
//         .then(res => console.log(res.data));
//     }