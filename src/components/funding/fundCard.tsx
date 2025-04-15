import CardWrapper from "components/layout/cardWrapper";

type fundCardProps = {
  name: string;
  description: string;
  href: string;
  handleButton: () => void;
  isSelected: boolean;
};

const FundCard = ({
  name,
  description,
  href,
  handleButton,
  isSelected,
}: fundCardProps) => {
  return (
    <CardWrapper>
      <img
        src={href}
        alt="Stones balancing on a plank of wood with the backdrop of a rocky seascape"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        <button
          className={
            isSelected
              ? "bg-emerald-700 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
              : "bg-purple-700 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
          }
          type="submit"
          onClick={handleButton}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </CardWrapper>
  );
};
export default FundCard;
