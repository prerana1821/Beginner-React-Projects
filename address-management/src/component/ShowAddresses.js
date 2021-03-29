import { AddressCart } from "./AddressCart";
export const ShowAddresses = ({ addresses, setAddresses, msg, setMsg }) => {
  return (
    <div>
      <AddressCart
        addresses={addresses}
        setAddresses={setAddresses}
        msg={msg}
        setMsg={setMsg}
      />
    </div>
  );
};
