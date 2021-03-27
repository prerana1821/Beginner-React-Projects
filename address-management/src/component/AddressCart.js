import axios from "axios";
import { AddressForm } from "./AddressForm";

export const AddressCart = ({
  addresses,
  setAddresses,
  setShowAddressForm,
  msg,
  setMsg,
}) => {
  const handleEdit = (address) => {
    // console.log({ address });
    <AddressForm
      //   addresses={addresses}
      //   setAddresses={setAddresses}
      //   setShowAddressForm={setShowAddressForm}
      //   msg={msg}
      //   setMsg={setMsg}
      editAdd={address}
    />;
    setShowAddressForm(true);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`api/addresses/${id}`);

    if (response.status === 204) {
      setAddresses(
        addresses.filter((address) => {
          return address.id !== id;
        })
      );
    }
  };

  return (
    <div className='container'>
      {addresses.map(
        ({ id, name, phonenumber, zipcode, address, city, state, country }) => {
          return (
            <div className='card' key={id}>
              <div className='card-info'>
                <h3>{name}</h3>
                <div className='card-content'>
                  <small>{phonenumber}</small>
                  <small>{zipcode}</small>
                </div>
                <h4 className='card-info-para'>{address}</h4>
                <div className='card-content'>
                  <span className='card-info-para'>{city}</span>
                  <span className='card-info-para'>{state}</span>
                  <span className='card-info-para'>{country}</span>
                </div>
                <div className='card-content mg-1'>
                  <button
                    className='btn primary'
                    onClick={() =>
                      handleEdit({
                        id,
                        name,
                        phonenumber,
                        zipcode,
                        address,
                        city,
                        state,
                        country,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className='btn secondary'
                    onClick={() => handleDelete(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
