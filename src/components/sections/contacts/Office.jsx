import TelMailBlock from "../regional_offices/TelMailBlock";

const Office = ({ office }) => {
  return (
    <article className="w-full bg-white p-8 rounded-2xl flex flex-col gap-4 justify-between text-[15px]">
      <h4 className="text-xl font-bold leading-[1.3] text-center">{office.region}</h4>
      <p className="text-center">
        Голова: <span className="text-grey ">{office.director || "вакансія"}</span>
      </p>

      <TelMailBlock director={office.director} region={office.region} id={office._id} />
    </article>
  );
};

export default Office;
