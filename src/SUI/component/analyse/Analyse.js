import React,{Component} from 'react';
import Head from '../Head-index';
import Side from '../Side-index';
import AnalyseContent from './Analyse-content';




class Analyse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Analyse">
                <Head />
                <Side />                
                <AnalyseContent />
            </div>

        )
    }
}
 
export default Analyse;