const nomadImage = new Image();
nomadImage.src = "/images/nomad.avif";

const speslImage = new Image();
speslImage.src = "/images/spesl.png";

const capraImage = new Image();
capraImage.src = "/images/capra.png";

export const menuArray = [
  {
    name: "Santa Cruz Nomad 6",
    description: [
      "The Santa Cruz Nomad 6: A high-performance mountain bike built for tackling rugged trails and steep descents with precision and style.",
    ],
    id: "0",
    price: 4.999,
    bikeImg: nomadImage.src,
  },
  {
    name: "Stumpjumper S-Works T-Type",
    description: [
      "The S-Works Stumpjumper T-Type: A top-tier mountain bike built for conquering challenging trails with unparalleled precision and agility.",
    ],
    price: 12.499,
    bikeImg: speslImage.src,
    id: "1",
  },
  {
    name: "YT Capra Core 5",
    description: [
      "The YT Capra Core 5: A lightweight, agile carbon mountain bike designed for tackling challenging trails with precision and confidence.",
    ],
    price: 5.999,
    bikeImg: capraImage.src,
    id: "2",
  },
];
