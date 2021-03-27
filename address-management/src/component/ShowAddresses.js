import { AddressCart } from "./AddressCart";
export const ShowAddresses = ({
  addresses,
  setAddresses,
  msg,
  setShowAddressForm,
}) => {
  return (
    <div>
      <h3>{msg}</h3>
      <AddressCart
        addresses={addresses}
        setAddresses={setAddresses}
        setShowAddressForm={setShowAddressForm}
      />
    </div>
  );
};
