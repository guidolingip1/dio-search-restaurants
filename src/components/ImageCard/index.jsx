import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  padding: 10px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  color: #ffffff;
`;

const ImageCard = ({photo, title}) => {
  return ( 
    <Card photo={photo} > 
    <Title>{title}</Title>
    </Card>
   );
}
 
export default ImageCard;