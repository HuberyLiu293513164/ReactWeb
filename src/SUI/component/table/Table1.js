import React,{Component} from 'react';
import './css/table1.css'
class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='member'>
                <div className='memberbox'>
                    <div className='memberTittle'>
                        <span>用户名</span>
                        <span>用户名</span>
                        <span>用户名</span>
                        <span className='last'>用户名</span>
                    </div>
                    <div className='memberContent'>

                    </div>
                </div>
            
            </div>
         )
    }
}
 
export default Table1;