import Button from "./Button";

export default function Specials() {
  const specials = [
    {
      image: "https://via.placeholder.com/150",
      title: "Dish Name 1",
      price: "$25",
      description: "This is a brief description of Dish Name 1. This is a brief description of Dish Name 1. This is a brief description of Dish Name 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Dish Name 2",
      price: "$30",
      description: "This is a brief description of Dish Name 2. This is a brief description of Dish Name 2. This is a brief description of Dish Name 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Dish Name 3",
      price: "$20",
      description: "This is a brief description of Dish Name 3. This is a brief description of Dish Name 3. This is a brief description of Dish Name 3.",
    },
  ];

  return (
    <div className="p-16">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Specials</h2>
        <Button title={'View All'} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {specials.map((special, index) => (
          <div key={index} className="border rounded-lg">
            <img src={special.image} alt={special.title} className="w-full h-auto object-contain" />
            <div className="p-4">
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-xl font-semibold">{special.title}</h3>
              <span className="text-lg font-semibold text-primary">{special.price}</span>
            </div>
            <p className="mt-4">{special.description}</p>
            <div className="mt-4">
              <span className="hover:text-blue-600">Read more</span>
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}