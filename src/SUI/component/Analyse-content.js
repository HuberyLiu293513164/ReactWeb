import React,{Component} from 'react'
import IndexLineChart from './IndexLineChart-index.js';
import '../css/Analyse-content.css';



class AnalyseContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='AnalyseContent'>
             <IndexLineChart/>
            </div>
        )
    }
}
 
export default AnalyseContent;