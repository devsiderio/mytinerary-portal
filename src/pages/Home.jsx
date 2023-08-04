import Arrow from "../components/Arrow";
import CardPolaroid from "../components/CardPolaroid";

export default function Home() {
  let data = [
    { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
    {
      id: "america3",
      city: "Rio de Janeiro",
      photo: "/img/america/rioDeJaneiro.jpg",
    },
    { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    {
      id: "oceania4",
      city: "Wellington",
      photo: "/img/oceania/wellington.jpg",
    },
  ];

  return (
    <main className="grow flex flex-col items-center justify-center max-w-7xl w-full px-80 ">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-[742px] flex-col justify-center items-start gap-10 inline-flex">
          <div className="self-stretch text-zinc-900 text-5xl font-bold flex">
            Find the perfect destination
          </div>
          <div className="w-[628px] text-zinc-900 text-opacity-60 text-2xl font-semibold flex">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </div>
          <div className="w-[346px] px-5 py-4 bg-indigo-600 rounded-lg justify-center items-center gap-4 inline-flex">
            <div className="text-white text-2xl font-semibold">View More</div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mx-50">
          <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
          <div className="flex flex-wrap justify-center">
            {data.slice(12, 16).map((each, index) => (
              <CardPolaroid
                key={index}
                src={each.photo}
                alt={each.id}
                text={each.city}
              />
            ))}
          </div>
          <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </div>
      </div>
    </main>
  );
}
