import CardClass from "../card-class/CardClass";
import Card from "../card/Card";

const Content = () => {
  return (
    <>
      <Card title="Card One" description="I am first description" />
      <Card title="Card Two" description="I am second description" />
      <CardClass />
    </>
  );
};

export default Content;
