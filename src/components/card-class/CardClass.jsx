import React from "react";

class CardClass extends React.Component {
  render() {
    const imageUrl =
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
      <div className="card">
        <img src={imageUrl} alt="example_image" />
        <h2>Card Class component</h2>
        <p>Card class description</p>
      </div>
    );
  }
}

export default CardClass;
