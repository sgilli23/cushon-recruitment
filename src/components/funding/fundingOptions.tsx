import FundCard from "./fundCard";
import getIsas from "utils/fetchIsas";
import { Isa } from "schemas/isa";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "utils/FormContext";
import { useForm } from "react-hook-form";

// For purpose of this demo, this only allows one option to be selected. In future implementations, this would be altered to allow multiple selections and de-selections. There'd also be more useful error and loading states.

const FundingOptions = () => {
  const { formData, setFormData } = useFormContext();
  const { setValue, handleSubmit } = useForm({
    defaultValues: formData.step1,
  });

  const { data, isError, isLoading } = useQuery({
    queryFn: async () => await getIsas(),
    queryKey: ["isas"],
  });

  if (isError) {
    return <div>Error fetching ISA options, please try again later</div>;
  }

  if (isLoading) {
    return <div>Loading ISA options...</div>;
  }

  const onSubmit = (data: { fundingOption?: string }) => {
    setFormData({ ...formData, step1: data });
  };

  const handleSelection = (isaName: string) => {
    setValue("fundingOption", isaName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.isas.map((isa: Isa) => (
          <FundCard
            name={isa.name}
            description={isa.description}
            href={isa.href}
            key={isa.id}
            isSelected={formData.step1.fundingOption === isa.name}
            handleButton={() => handleSelection(isa.name)}
          />
        ))}
      </div>
    </form>
  );
};

export default FundingOptions;
