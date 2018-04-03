import React,{Component} from 'react';
import Head from '../Head-index';
import Side from '../Side-index';
import TableContent from './Table-content';
import './css/Table.css'



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Analyse">
                <Head />
                <Side />                
                <TableContent />
            </div>

        )
    }
}
 
export default Table;