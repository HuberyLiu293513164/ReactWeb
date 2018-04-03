import React,{Component} from 'react';
// import echarts from 'echarts';
import "./css/IndexLineChart.css";
import '../../font-awesome/css/font-awesome.min.css';
import Germany from '../../img/Germany.png'
import India from '../../img/India.png'
import Russia from '../../img/Russia.png'
import Spain from '../../img/Spain.png'
import yiselie from '../../img/yiselie.png'


class IndexLineChart extends Component{
    constructor(){
        super();
        this.state = {
     
            country:'',
            countryDate:[
                {
                    countryPic:Germany,
                    name:'德国',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:India,
                    name:'印度',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:Russia,
                    name:'俄罗斯',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:Spain,
                    name:'西班牙',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:yiselie,
                    name:'以色列',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:Germany,
                    name:'德国',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
                {
                    countryPic:Germany,
                    name:'德国',
                    bad:16789,
                    good:14278,
                    all:10000,
                    onOff:true
                },
            ],
        }
    }

    change = (ev) =>{
        let {countryDate,onOff} = this.state;
        let val = ev.target.value;

        let countryDate2 =[];
        countryDate2 = countryDate.concat();

        countryDate2.forEach((e,i)=>{
            if(e.name.includes(val)&&(val)){
                e.onOff = true;
            }else if (!val){
                e.onOff = true;
            }else{
                e.onOff = false;
            }
        })
        
        
        console.log(countryDate2)
       

        this.setState({
            country:val,
            countryDate : countryDate2,
        })
    }




    render(){
        let {country,countryDate} =  this.state;

        let countryDateDiv =countryDate.map((e,i)=>{
            if(e.onOff){
                return(
                <div className='userD'  key={i}>
                    <div className="lineCI"><img src={e.countryPic} /></div>
                    <div className="lineC">{e.name}</div>
                    <div className="lineC">{e.bad}</div>
                    <div className="lineC">{e.good}</div>
                    <div className="lineC">{e.all}</div> 
                </div>  
                )
            }
        })

                
 

        return (
            <div className="users">
                <div className="userh">
                    <i className="fa fa-flag-o fa-lg"></i> 
                    <span>注册用户</span>
                </div>
                <div className="userC">
                    <div className="tittle"></div>
                    <div className="tittle">国家:<input value={country} onChange={this.change} /></div>
                    <div className="tittle">劣质体验用户量</div>
                    <div className="tittle">优质体验用户量</div>
                    <div className="tittle">通量</div>
            </div>

            
                {countryDateDiv}
           
                
        
            </div> 
        )
    }
}
export default IndexLineChart;
