import React from 'react'
import {MapContainer, TileLayer, Marker } from 'react-leaflet';
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css';

import './styles/app.css'
import MenuCard from './components/card'

import burguerImg from './images/hamburguer.png'
import holofoteImg from './images/holofote.png'
import whatsappIcon from './images/whatsapp.svg'
import instaIcon from './images/instagram.svg'
import ifoodIcon from './images/ifood.svg'
import mapMarkerIcon from './images/mapMarker.svg'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      classname: "burger",
      classnameContact :"contact"
    }
    this.mapIcon = leaflet.icon({
      iconUrl: mapMarkerIcon,
      iconAnchor: [29, 68],
      iconSize: [68, 78],
  })
  }


  componentDidMount() {
      window.addEventListener('scroll', this.MovesBurger);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.MovesBurger);
  }

  MovesBurger = (event) =>{
    if(window.scrollY >= 300){
      this.setState({classname : "burgerScrolled", classnameContact:"contactScrolled"})
    }
    else{
      this.setState({classname : "burger", classnameContact:"contact"})
    }
  }
  

  render(){
    return(
      <div className="App">
      <header>
        <div className={this.state.classnameContact}>
          <a><img src={ifoodIcon}></img></a>
          <a><img src={instaIcon}></img></a>
          <a><img src={whatsappIcon}></img></a>
        </div>
      </header>
      <main>
         <h1 className="title">O melhor Burger de Floripa</h1>
         <div className="content">
            <img className="left" src={holofoteImg} alt="Holofote"></img>
            <img className={this.state.classname} id="burger" src={burguerImg} alt="Burger"></img>
            <img className="right" src={holofoteImg} alt="Holofote"></img>
         </div>
         <h4>"O Poderoso Chefão"</h4>
         <p className="description">O burger mais vendido da casa, seu diferencial está no sabor incrível do molho do chefe!</p>
         <section>
           <h4>Conheça nosso cardápio</h4>
            <MenuCard></MenuCard>
         </section>
         <section>
           <h4>Onde estamos localizados?</h4>
           <p className="description">Nossa casa está localizada no sul da Ilha de Florianópolis - SC. Realizamos entrega para todos os bairros da ilha da magia, peça por delivery ou venha provar!</p>
           <MapContainer
            center={[-27.6987904,-48.5011278]}
            zoom={13}
            style={{width: '320px', height:'300px'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker 
                position={[-27.6987904,-48.5011278]}
                icon={this.mapIcon}
                >
                </Marker>
            </MapContainer>
         </section>
      </main>
    </div>
    )
  };
}

export default App;
