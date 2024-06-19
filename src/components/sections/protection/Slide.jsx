import Title from "@/components/Title";

const Slide = ({ slide, title }) => {
  return (
    <article className="w-full h-fit">
      <Title tag="h2" styles="mt-4 mb-12">
        {title}
      </Title>
      <ul className="grid grid-cols-3 gap-x-12 gap-y-4">
        {slide.map((el, index) => (
          <li key={el.title} className="flex gap-x-2 items-start">
            <div className="flex items-center gap-x-2">
              <p className="text-red text-[22px] leading-[1.3]">0{index + 1}</p>
              <div className="h-0.5 w-8 bg-red" />
            </div>

            <div>
              <h3 className="text-[22px] font-bold leading-[1.3]">{el.title}</h3>
              <p className="text-lg text-grey leading-6 py-4">{el.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Slide;
