import axios from "axios";
import { useState } from "react";

const defaultAddress = {
  name: "",
  phonenumber: "",
  zipcode: "",
  address: "",
  city: "",
  state: "Andhra Pradesh",
  country: "India",
  addressType: "Home",
};

export const AddressForm = ({
  addresses,
  setAddresses,
  setShowAddressForm,
  msg,
  setMsg,
  editAdd = defaultAddress,
}) => {
  const [name, setName] = useState(editAdd.name);
  const [phonenumber, setPhoneNumber] = useState(editAdd.phonenumber);
  const [zipcode, setZipCode] = useState(editAdd.zipcode);
  const [address, setAddress] = useState(editAdd.address);
  const [city, setCity] = useState(editAdd.city);
  const [state, setState] = useState(editAdd.state);
  const [country, setCountry] = useState(editAdd.country);
  const [addressType, setAddressType] = useState(editAdd.addressType);
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

  let editMode = false;

  const countries = ["India"];

  const addressTypes = ["Home", "Office"];

  if (editAdd.name.length !== 0) {
    editMode = true;
  }

  console.log({ addresses });

  const handleEdit = async (e) => {
    e.preventDefault();
    // try {
    //   setMsg("Saving data to Server");
    const response = await axios.put(`api/addresses/${editAdd.id}`, {
      address: {
        name: name,
        phonenumber: phonenumber,
        zipcode: zipcode,
        address: address,
        city: city,
        state: state,
        country: country,
        addresstype: addressType,
      },
    });
    if (response.status === 200) {
      console.log({ addresses });
      // setAddresses(
      //   addresses.map((address) => {
      //     return address.id === response.data.address.id
      //       ? response.data.address
      //       : address;
      //   })
      // );
    }
    // } catch (error) {
    //   setMsg("Couldn't save data to the Server");
    // } finally {
    //   setMsg("");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMsg("Saving data to Server");
      const {
        status,
        data: { address: addressFromServer },
      } = await axios.post("api/addresses", {
        address: {
          name: name,
          phonenumber: phonenumber,
          zipcode: zipcode,
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

      <h4>{msg}</h4>

      <form
        onSubmit={editMode ? handleEdit : handleSubmit}
        className='address-form'
      >
        <div className='flex-input'>
          <div className='input'>
            <input
              type='text'
              className='input-txt'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className='flt-label'>Your Name</span>
          </div>

          <div className='input'>
            <input
              type='number'
              className='input-txt'
              required
              value={phonenumber}
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
              value={zipcode}
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
                      value={addressType}
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
