import Slider from "@mui/material/Slider";
import CardWrapper from "components/layout/cardWrapper";
import { Label } from "radix-ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "utils/FormContext";
import CashToast from "./cashToast";

const CashInput = () => {
  const [numValue, setNumValue] = useState(100);
  const { formData, setFormData } = useFormContext();
  const { setValue, handleSubmit } = useForm({
    defaultValues: formData.step2,
  });

  useEffect(() => {
    if (numValue) {
      setValue("cashAmount", numValue);
    }
  }, [setValue, numValue]);

  const handleSliderChange = (event: Event, newValue: number) => {
    setNumValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumValue(Number(event.target.value));
  };

  const onSubmit = (data: { cashAmount?: number }) => {
    setFormData({ ...formData, step2: data });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardWrapper>
        <div className="flex flex-col items-center gap-4 mt-2">
          <div className="w-sm flex flex-col items-center gap-4 px-8">
            <Label.Root className="text-8xl font-medium text-purple-700">
              £{numValue}
            </Label.Root>
            <Slider
              value={typeof numValue === "number" ? numValue : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={100}
              max={25000}
              step={100}
              name="cashAmount"
            />
          </div>
          <div className="flex gap-4">
            <Label.Root
              className="font-medium text-purple-700"
              htmlFor="amount"
            >
              Amount £
            </Label.Root>
            <input
              className="inline-flex h-8 w-40 items-center justify-center rounded px-2.5 text-purple-500 shadow-md shadow-black  outline-none selection:text-purple-500 focus:shadow-indigo-900"
              type="number"
              id="amount"
              min={100}
              max={25000}
              value={numValue}
              onInput={handleInputChange}
            />
          </div>
          <div className="flex justify-end p-10">
            <CashToast />
          </div>
        </div>
      </CardWrapper>
    </form>
  );
};

export default CashInput;
