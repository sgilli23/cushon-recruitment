import Cart from "components/cart/cart";
import FundingOptions from "components/funding/fundingOptions";

export default function GetStartedPage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
      <div className="md:col-span-3">
        <FundingOptions />
      </div>
      <div className="md:col-start-4">
        <Cart />
      </div>
    </div>
  );
}
