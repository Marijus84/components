import "./Card.css";
import Star from "../../assets/star.svg";

const Card = ({ title, description, rating }) => {
  const imageUrl =
    "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  //! early return
  if (rating > 9) return null;

  //! condtional rendering using if before return
  if (rating > 8) {
    return (
      <div className="card">
        <img src={imageUrl} alt="example_image" />
        <h2>{title}</h2>
        <p>{description}</p>
        {rating > 8 ? <h3>Rating: {rating}</h3> : <h6>Rating: {rating}</h6>}
        {rating > 8 && (
          <img className="star" src={Star} alt="high rating star" />
        )}
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Book is not worth reading</h3>
    </div>
  );

  // return (
  //   <div className="card">
  //     <img src={imageUrl} alt="example_image" />
  //     <h2>{title}</h2>
  //     <p>{description}</p>
  //! conditional rendering with ternary operator
  //     {rating > 8 ? <h3>Rating: {rating}</h3> : <h6>Rating: {rating}</h6>}

  //! conditional rendering with double && operator
  //     {rating > 8 && <img className="star" src={Star} alt="high rating star" />}
  //   </div>
  // );
};

export default Card;
