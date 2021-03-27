import { AddressCart } from "./AddressCart";
export const ShowAddresses = ({
  addresses,
  setAddresses,
  msg,
  setMsg,
  setShowAddressForm,
}) => {
  return (
    <div>
      <h3>{msg}</h3>
      <AddressCart
        addresses={addresses}
        setAddresses={setAddresses}
        msg={msg}
        setMsg={setMsg}
        setShowAddressForm={setShowAddressForm}
      />
    </div>
  );
};
