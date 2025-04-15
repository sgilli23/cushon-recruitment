import Link from "next/link";

type typeButtonProps = {
  name: string;
  href: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
};

const TypeButton = (props: typeButtonProps) => {
  return (
    <button
      className="bg-purple-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full"
      type={props.type}
      onClick={props.onClick}
    >
      <Link href={props.href}>{props.name}</Link>
    </button>
  );
};

export default TypeButton;
