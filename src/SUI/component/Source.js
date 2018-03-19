import React,{Component} from 'react';
import Head from './Head-index';
import Side from './Side-index';
import SourceContent from './Source-content';



class Source extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Head />
                <Side />
                <SourceContent />
            </div>

        )
    }
}
 
export default Source;