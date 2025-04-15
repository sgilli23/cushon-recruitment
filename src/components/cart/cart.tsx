import NavigationButton from "components/buttons/navigationButton";
import CardWrapper from "components/layout/cardWrapper";
import { Label } from "radix-ui";
import { useFormContext } from "utils/FormContext";

const Cart = () => {
  const { formData } = useFormContext();
  const fundingOption = formData.step1.fundingOption;
  const cashAmount = formData.step2.cashAmount;

  return (
    <CardWrapper>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Your Investment</div>
        <hr className="mb-8" />
        <div className="flex justify-between items-center">
          <Label.Root className="font-bold ">Funding Option:</Label.Root>
          <p>{fundingOption}</p>
        </div>
        <hr className="my-8" />
        <div className="flex justify-between items-center">
          <Label.Root className="font-bold">Cash Amount:</Label.Root>
          <p>{cashAmount && `£${cashAmount}`}</p>
        </div>
        <hr className="my-8" />

        <NavigationButton />
      </div>
    </CardWrapper>
  );
};

export default Cart;
