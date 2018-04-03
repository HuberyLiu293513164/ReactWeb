import React,{Component} from 'react';
import Head from '../Head-index';
import Side from '../Side-index';
import StationContent from './Station-content';
import './css/Station.css'



class Station extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Head />
                <Side />                
                <StationContent />
            </div>

        )
    }
}
 
export default Station;