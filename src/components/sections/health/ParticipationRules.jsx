import { inter } from "@/app/[locale]/(client)/fonts";
import Title from "@/components/Title";

const ParticipationRules = () => {
  const rules = [
    "вступили до Профспілки не менше року до старту проєкту;",
    "протягом року безперервно сплачують внески до Профспілки;",
    "не отримували матеріальної допомоги протягом останнього року до моменту розіграшу (винятком є УБД, допомоги на ювілей, поховання та нововведені на воєнний час матеріальні допомоги);",
    "не отримували путівок протягом останніх чотирьох років.",
  ];

  return (
    <>
      <div className="w-full bg-white rounded-[20px] py-10 px-20 my-14">
        <Title tag={"h2"}>
          Хто може взяти участь в розіграші?
          <br /> <span className="text-red">Профспілчани</span>, які:
        </Title>
        <ul className="list-disc list-inside flex flex-col gap-y-[18px] mt-8">
          {rules.map(rule => (
            <li
              key={rule}
              className={`${inter.className} text-lg leading-[1.2] flex items-center gap-x-6`}
            >
              <div className="w-6 h-6 rounded-full bg-red bg-opacity-20 flex items-center justify-center">
                <div className="w-[11px] h-[11px] rounded-full bg-red" />
              </div>
              <span className="w-[calc(100%-48px)]">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-white rounded-[20px] py-10 px-20 flex flex-col gap-y-6">
        <p className={`${inter.className} text-lg leading-[1.2]`}>
          Розіграш путівок проводиться в режимі “прямий ефір” в групі Facebook кожного осередку, що
          гарантує прозорість та чесність розподілу путівок. Також на розіграш ми запрошуємо
          спостерігачів з членів профкому, профгрупоргів, учасників розіграшу та незалежних осіб.
          Переможців обираємо користуючись сайтом random.org.
        </p>
        <p className={`${inter.className} text-lg leading-[1.2]`}>
          При відмові переможця скористатись отриманою путівкою, право отримання такої путівки
          переходить до наступного по порядку профспілковця в списку розіграшу, що обиратиметься
          навмання. Путівка надається лише члену Профспілки, без права передачі іншим особам.
        </p>
      </div>
    </>
  );
};

export default ParticipationRules;
