import React from "react";
import PropTypes from "prop-types";

//{fav} = props.fav

function Food({name, picture, rating}){
  return (
    <div>
      <h1>I love {name}</h1>
      <h3>{rating} / 5.0</h3>
      <img src = {picture} alt ={name}/>
    </div>
  );
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
const foodLike = [ { rating :5, id: 1, name : "kimbap", image: "https://www.seriouseats.com/2020/01/20200122-gimbap-vicky-wasik-24.jpg" },
                  {rating : 0, id: 2, name : "kimchi", image: "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg"  }];

function renderFood(dish){
  console.log(dish);
  return <Food name = {dish.name} rating = {dish.rating} picture ={dish.image}/>
}
function App() {
  return (
    <div>
    {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
