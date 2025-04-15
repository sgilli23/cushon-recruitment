import TypeButton from "components/buttons/typeButton";

const HomePage = () => {
  return (
    <div className="flex flex-col row-span-full">
      <h1 className="text-7xl text-center text-white text-balance m-10">
        {" "}
        Because life should be balanced
      </h1>
      <div className="flex flex-row gap-10 justify-center">
        <TypeButton
          name="Workplace"
          href="/"
          onClick={() => window.alert("Still balancing!")}
        />
        <TypeButton name="For Home" href="/direct" />
      </div>
    </div>
  );
};

export default HomePage;
