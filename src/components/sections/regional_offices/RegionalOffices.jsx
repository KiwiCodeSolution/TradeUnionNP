import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOffice from "./RegionalOffice";

const OFFICES_TEST = [
  {
    region: "Вінницька Профспілка",
    region_name: "Вінницької",
    quantity: 210,
    image: "/images/ppo/vinnicka-ppo.jpg",
    director: "Олександр Козак",
    position: "Голова Вінницької ППО",
    email: "help@profspilka.org",
    phone: "+380681105335",
    avatar: "/images/ppo/kozak.jpg",
    admission_address: "",
    application_address: "",
    committee: [
      "Олександр Козак (голова ППО)",
      "Наталя Сидорчук (заступниця голови ППО)",
      "Артем Долженко",
    ],
    link_news: "https://www.facebook.com/groups/vinnitsa.profspilka.np/",
  },
  {
    region: "Волинська Профспілка",
    region_name: "Волинської",
    quantity: 206,
    image: "/images/ppo/volinska-ppo.jpg",
    director: "Денис Краснобай",
    position: "Голова Волинської ППО",
    email: "help@profspilka.org",
    phone: "+380675455023",
    avatar: "/images/ppo/denis_krasnobay.jpg",
    admission_address: "",
    application_address: "",
    committee: [
      "Денис Краснобай (голова ППО)",
      "Тетяна Шворак (заступниця голови ППО)",
      "Оксана Сущук",
      "Віталія Красько",
      "Роман Кузава",
      "Олександр Арендарчук",
    ],
    link_news: "https://www.facebook.com/groups/volinskaprofspilka.np",
  },
  {
    region: "Дніпропетровська Профспілка",
    region_name: "Дніпропетровської",
    quantity: 719,
    image: "/images/ppo/dnipropetrovska-ppo.jpg",
    director: "Григорій Борисов",
    position: "Голова Дніпропетровської ППО",
    email: "help@profspilka.org",
    phone: "+380675468904",
    avatar: "/images/ppo/borisov.jpg",
    admission_address:
      "м. Дніпро; Борисов Григорій, термінал; ном.тел. одержувача: +380675468904; за шаблоном внутрішніх відправок",
    application_address: "",
    committee: [
      "Григорій Борисов (голова ППО)",
      "Світлана Папета (заступниця голови ППО)",
      "Інга Бурцева",
      "Юрій Логвиненко",
    ],
    link_news: "https://www.facebook.com/groups/Dnepr.profspilkaNP/",
  },
  {
    region: "Донецька Профспілка",
    region_name: "Донецької",
    quantity: 210,
    image: "/images/ppo/donecka-ppo.jpg",
    director: "",
    position: "Голова Донецької ППО",
    email: "help@profspilka.org",
    phone: "+380677008125",
    avatar: "",
    admission_address:
      "м.Бахмут; Харченко Михайло, відділення НП №1; ном.тел. одержувача: +380675071231; за шаблоном внутрішніх відправок",
    application_address: "",
    committee: ["Ганна Колодруб", "Алеся Міщенко"],
    link_news: "https://www.facebook.com/groups/donetskaprofspilka.np",
  },
];

const RegionalOffices = () => {
  return (
    <BaseSection>
      <Wrapper styles={"py-16"}>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-16">
          {OFFICES_TEST.map(el => (
            <RegionalOffice key={el.region} item={el} />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default RegionalOffices;
