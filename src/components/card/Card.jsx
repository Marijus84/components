import "./Card.css";

const Card = (props) => {
  const imageUrl =
    "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="card">
      <img src={imageUrl} alt="example_image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
