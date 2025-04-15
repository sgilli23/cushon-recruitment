import Cart from "components/cart/cart";
import CashInput from "components/cash/cashInput";

export default function SetAmountPage() {
  return (
    <div>
      <div className="grid grid-cols-1 p-4 gap-4 md:grid-cols-4">
        <div className="md:col-span-3">
          <CashInput />
        </div>
        <div className="md:col-start-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}
