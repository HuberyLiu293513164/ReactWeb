import React,{Component} from "react"; 
class NavUl extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <ul>
            <span className="span">
                <i className="fa fa-home fa-lg"></i> 
                <span>首页</span>
            </span>
        </ul>
        )
    }
}
 
export default NavUl;