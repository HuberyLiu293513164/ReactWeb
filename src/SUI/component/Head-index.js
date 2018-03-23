import React,{Component} from 'react';
import "../css/Public_head.css"
import jsonp from '../../jsonp_1.0';



class Head extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val:'',
            // data:[],
            dataLi:'',
         }
    }

    change = (ev) =>{
       let val = ev.target.value;
       this.setState({
           val
       },()=>{
           let {val} = this.state;
           let that = this;
        jsonp({
            url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
            data:{
              wd:val
            },
            success:function(data){
                // console.log(data)
                // that.setState({
                //     data:data.s
                // });
                let dataLi = data.s.map((e,i)=>{
                    return <li key={i}>{e}</li>
                });
                that.setState({
                    dataLi : dataLi
                })

            },
            callback:'cb'
          })

       })
    }



    render() { 
        let {val,dataLi} = this.state;
        return ( 
            <div className="header">
                <div className="headera">
                    <a href='javascript:;'>SIG Vivid Insight</a>
                </div>
                <div className="Hsearch">
                    <form action = 'http://www.baidu.com/s' target= '_blank' >
                        <em className="searchpic"/>
                        <input className="searchValue" name= {'wd'}  type={'text'} placeholder="搜索" value={val} onChange = {this.change}/>
                        <input className="searchB" type="submit" value="Go"/>
                        {/* <ul className="searchItem" id="ul">{data}</ul> */}
                        <ul className="searchItem" id="ul">
                            {dataLi}
                        </ul>
                    </form>
                </div>
                <div className="Hright2">
                    <img src = {require('../img/avatar-mini4.jpg')}/>
                    <span>Administrator</span>
                    <b className="caret"></b>
                </div>
                <div className="Hright1">
                    <em className="itemspic"></em>
                    <em className="mailpic"></em>
                    <em className="blingpic"></em>
                </div>
            </div>
         )
    }
}
 
export default Head;

