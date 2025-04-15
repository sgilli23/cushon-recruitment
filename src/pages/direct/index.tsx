import TypeButton from "components/buttons/typeButton";

export default function Page() {
  return (
    <div className="grid grid-cols-1 my-10 p-4">
      <div className="border-gray-400 bg-white rounded-xl p-4 justify-between">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            All about our direct retail options...
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex justify-end">
          <TypeButton name="Get Started" href="/direct/getStarted" />
        </div>
      </div>
    </div>
  );
}
