import Button from "./Button";
import greekSalad from "./../assets/greek-salad.jpg";
import bruchetta from "./../assets/bruchetta.svg";
import lemonDessert from "./../assets/lemon-dessert.jpg";
import delivery from "./../assets/motorcycle-delivery-single-box.svg";

export default function Specials() {
  const specials = [
    {
      image: greekSalad,
      title: "Greek salad",
      price: "$12.99",
      description: "This is a brief description of Dish Name 1. This is a brief description of Dish Name 1. This is a brief description of Dish Name 1.",
    },
    {
      image: bruchetta,
      title: "Bruchetta",
      price: "$5.99",
      description: "This is a brief description of Dish Name 2. This is a brief description of Dish Name 2. This is a brief description of Dish Name 2.",
    },
    {
      image: lemonDessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This is a brief description of Dish Name 3. This is a brief description of Dish Name 3. This is a brief description of Dish Name 3.",
    },
  ];

  return (
    <section className="p-16 sm:px-[20%] px-10 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">THIS WEEKS SPECIALS!</h2>
        <Button title={'Online Menu'} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {specials.map((special, index) => (
          <article key={index} className="border rounded-2xl flex flex-col justify-between bg-[#EDEFEE]">
            <img src={special.image} alt={special.title} className="w-full rounded-t-2xl object-contain" />
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-xl font-semibold">{special.title}</h3>
                <span className="text-lg font-semibold text-primary">{special.price}</span>
              </div>
              <p className="mt-4">{special.description}</p>

            </div>
            <div className="p-4 ">
                <span>Order a delivery &nbsp;  <img src={delivery} className="inline-block w-5" alt="delivery"/></span>
              </div>
          </article>
        ))}
      </div>
    </section>
  );
}