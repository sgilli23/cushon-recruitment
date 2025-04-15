import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormContext } from "utils/FormContext";

const NavigationButton = () => {
  const { activeStep, setActiveStep, formData } = useFormContext();
  const location = usePathname();
  // I've used the formData here rather than react-hook-forms isDirty as in my previous experience the isDirty feature is glitchy!
  const isDirty = formData.step1.fundingOption != undefined;

  // If we had more steps, this would be a switch statement
  if (location.endsWith("setAmount")) {
    setActiveStep(2);
  } else {
    setActiveStep(1);
  }

  return (
    <>
      {activeStep === 2 && (
        <div className="flex flex-row justify-start ">
          <button className="bg-purple-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/direct/getStarted">Previous</Link>
          </button>
        </div>
      )}
      {activeStep === 1 && isDirty && (
        <div className="flex flex-row justify-end ">
          <button className=" bg-purple-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/direct/getStarted/setAmount">Next</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default NavigationButton;
