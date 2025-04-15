import { createContext, useContext, useState } from "react";

interface FormData {
  step1: { fundingOption?: string };
  step2: { cashAmount?: number };
}

const initialFormData: FormData = {
  step1: { fundingOption: undefined },
  step2: { cashAmount: undefined },
};

const FormContext = createContext({
  formData: initialFormData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFormData: (_data: FormData) => {},
  activeStep: 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setActiveStep: (_step: number) => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeStep, setActiveStep] = useState(1);
  return (
    <FormContext.Provider
      value={{ formData, setFormData, activeStep, setActiveStep }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
