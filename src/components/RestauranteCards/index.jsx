import React from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCards = ({ restaurant }) => (
    <Restaurant>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor='#e7711c'/>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
        <RestaurantPhoto src={restaurant.photos ? restaurant.photo[0].getUrl() : console.log('aaa') }
        alt="foto do restaurante"
      />
    </Restaurant>
   );
 
export default RestaurantCards;