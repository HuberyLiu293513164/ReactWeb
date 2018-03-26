import React,{Component} from 'react';
import Head from '../Head-index';
import Side from '../Side-index';
import UserContent from './User-content';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Head />
                <Side />
                <UserContent />
            </div>

        )
    }
}
 
export default User;