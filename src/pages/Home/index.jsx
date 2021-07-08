import TextField, {HelperText, Input} from '@material/react-text-field';
import Slider from 'react-slick';
import React, { useState} from "react";
import { useSelector } from "react-redux";
import MaterialIcon from '@material/react-material-icon/dist/index';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCards, Modal, Map } from '../../components';
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles'


const Home = () => {
  const [inputValue, setInputValue] = useState('pizza');
  const [modalOpened, setModalOpened] = useState(true);
  const [query, setQuery] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings ={
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
        <TextField
            label='Pesquisar Restaurante'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          ><Input
            value={inputValue}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
            <Card photo={restaurante} title ='teste'/>
          </Carousel>
          <button onClick ={() => setModalOpened(true)}>Abrir Modal</button>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCards restaurant={restaurant}/>
        ))}
      </Container>
      <Map query={query}/>
      {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>*/}
    </Wrapper>
  );
}

export default Home;