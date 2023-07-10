import Card from "../card/Card";

const Content = () => {
  const cardsData = [
    {
      id: 1,
      title: "Harry Potter",
      description: "Harry Potter is a fictional book written by J.K. Rowling",
      rating: 8.5,
    },
    {
      id: 2,
      title: "1984",
      description: "1984 George Orwell book",
      rating: 9.2,
    },
    {
      id: 3,
      title: "The Lord of the Rings",
      description:
        "The Lord of the Rings is a fictional book written by J.R.R. Tolkien",
      rating: 7.9,
    },
  ];

  return (
    <>
      {cardsData.map(({ title, description, rating, id }) => (
        <Card
          key={id}
          title={title}
          description={description}
          rating={rating}
        />
      ))}

      {/* <Card
        title={cardsData[0].title}
        description={cardsData[0].description}
        rating={cardsData[0].rating}
      />
      <Card
        title={cardsData[1].title}
        description={cardsData[1].description}
        rating={cardsData[1].rating}
      />
      <Card
        title={cardsData[2].title}
        description={cardsData[2].description}
        rating={cardsData[2].rating}
      /> */}
    </>
  );
};

export default Content;
