import { useState } from "react";
import axios from "axios";
import { AddressForm } from "./AddressForm";

export const AddressCart = ({ addresses, setAddresses, msg, setMsg }) => {
  const [editAddress, setEditAddress] = useState({});
  const [edit, setEdit] = useState(false);

  const handleEdit = (address) => {
    setEdit(true);
    setEditAddress(address);
  };

  const handleDelete = async (id) => {
    try {
      setMsg("Deleting address from the server...");
      const { status } = await axios.delete(`api/addresses/${id}`);
      if (status === 204) {
        setAddresses(
          addresses.filter((address) => {
            return address.id !== id;
          })
        );
      }
    } catch (error) {
      setMsg("Could't delete the data");
    } finally {
      setMsg("");
    }
  };

  return (
    <div className='container'>
      {edit && <AddressForm editAdd={editAddress} />}
      {addresses.map(
        ({
          id,
          name,
          phonenumber,
          zipcode,
          address,
          city,
          state,
          country,
          addresstype,
        }) => {
          return (
            <div className='card' key={id}>
              <div className='card-info'>
                <h3>{name}</h3>
                <div className='card-content'>
                  <small>{phonenumber}</small>
                  <small>{addresstype}</small>
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
                    onClick={() => {
                      handleEdit({
                        id,
                        name,
                        phonenumber,
                        zipcode,
                        address,
                        city,
                        state,
                        country,
                        addresstype,
                      });
                    }}
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
      <h3>{msg}</h3>
    </div>
  );
};

// import axios from "axios";
// import { AddressForm } from "./AddressForm";

// export const AddressCart = ({
//   addresses,
//   setAddresses,
//   setShowAddressForm,
// }) => {
//   const handleEdit = (address) => {
//     console.log({ address });
//     <AddressForm
//       // addresses={addresses}
//       // setAddresses={setAddresses}
//       // setShowAddressForm={setShowAddressForm}
//       // msg={msg}
//       // setMsg={setMsg}
//       editAdd={address}
//     />;
//     setShowAddressForm(true);
//   };

//   const handleDelete = async (id) => {
//     const { status } = await axios.delete(`api/addresses/${id}`);

//     if (status === 204) {
//       setAddresses(
//         addresses.filter((address) => {
//           return address.id !== id;
//         })
//       );
//     }
//   };

//   return (
//     <div className='container'>
//       {addresses.map(
//         ({
//           id,
//           name,
//           phonenumber,
//           zipcode,
//           address,
//           city,
//           state,
//           country,
//           addresstype,
//         }) => {
//           return (
//             <div className='card' key={id}>
//               <div className='card-info'>
//                 <h3>{name}</h3>
//                 <div className='card-content'>
//                   <small>{phonenumber}</small>
//                   <small>{addresstype}</small>
//                   <small>{zipcode}</small>
//                 </div>
//                 <h4 className='card-info-para'>{address}</h4>
//                 <div className='card-content'>
//                   <span className='card-info-para'>{city}</span>
//                   <span className='card-info-para'>{state}</span>
//                   <span className='card-info-para'>{country}</span>
//                 </div>
//                 <div className='card-content mg-1'>
//                   <button
//                     className='btn primary'
//                     onClick={() =>
//                       handleEdit({
//                         id,
//                         name,
//                         phonenumber,
//                         zipcode,
//                         address,
//                         city,
//                         state,
//                         country,
//                       })
//                     }
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className='btn secondary'
//                     onClick={() => handleDelete(id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         }
//       )}
//     </div>
//   );
// };
