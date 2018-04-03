import React,{Component} from 'react';
import {Map, Marker,NavigationControl,InfoWindow,MapTypeControl,ScaleControl,Boundary} from 'react-bmap';

class Mapindex extends Component {
    componentDidMount() {
        
    }
  render() {
    
    return (
            <div className="svg">
                <div className="mapcss">
                <Map 
                    style={{height: '420px'}} 
                    center={{lng: 100.402544, lat: 35.928216}}
                    zoom="4">
                    <NavigationControl /> 
                    <MapTypeControl />
                    <ScaleControl />
                </Map>
            </div>
       </div>
      )
  }
}

export default Mapindex;



