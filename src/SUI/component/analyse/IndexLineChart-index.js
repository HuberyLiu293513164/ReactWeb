import React,{Component} from 'react';
import echarts from 'echarts';
import "./css/LineChart.css";
import '../../font-awesome/css/font-awesome.min.css';

class IndexLineChart extends Component{
    constructor(){
        super();
        this.state = {
            BJval1:'',
            BJval2:'',
            HBval1:'',
            HBval2:'',

            option:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
            
                grid: {
                    left: '-3%',
                    right: '0%',
                    bottom: '-65%',
                    top:'10%',
                    containLabel: true
                },
                xAxis:  {
                    show: 'false',
                    axisLine: {
                        show: false
                    },
                },
                yAxis: {
                    type: 'category',
                    data: ['']
                },
                series: [
                    {
                        name: '上行带宽比率',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [1]
                    },
                    {
                        name: '下行带宽比率',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [2]
                    },
            
                ]
            },
        }
    }
    changeBJ1 = (ev)=>{
        this.setState({
            BJval1 : ev.target.value
        })
    }
    changeBJ2 = (ev)=>{
        this.setState({
            BJval2 :ev.target.value
        })
    }
    changeHB1 = (ev)=>{
        this.setState({
            HBval1 : ev.target.value
        })
    }
    changeHB2 = (ev)=>{
        this.setState({
            HBval2 :ev.target.value
        })
    }


        
    componentDidUpdate(){
        let {BJval1,BJval2,option} = this.state
        
        let optionCopyBJ = {};

        
        Object.assign(optionCopyBJ,option);
       
        
        optionCopyBJ.series[0].data[0] = BJval1;
        optionCopyBJ.series[1].data[0] = BJval2;
   

        console.log(optionCopyBJ)
       
        
        // 使用刚指定的配置项和数据显示图表。
        
        // if(BJval1 || BJval2){
            // console.log('BJ')
            let myChart1 = echarts.init(document.getElementById('lineEcharts1'));
            myChart1.setOption(optionCopyBJ);
        // }else if(HBval1 || HBval2){
        //     console.log('HB')
        //     let myChart2 = echarts.init(document.getElementById('lineEcharts2'));
        //     myChart2.setOption(optionCopyHB);
        // }
    }



        componentDidMount() {
            let {option} = this.state
            // 基于准备好的dom，初始化echarts实例
            var myChart1 = echarts.init(document.getElementById('lineEcharts1'));
        
            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);
            
        }

    render(){
        let {BJval1,BJval2,HBval1,HBval2} = this.state
        return (
            <div className="users">
                <div className="userh">
                    <i className="fa fa-flag-o fa-lg"></i> 
                    <span>设置上下行带宽比</span>
                </div>
                <div className="userC">
                    <div className="tittle"></div>
                    <div className="tittle">地区</div>
                    <div className="tittle">上行带宽比率</div>
                    <div className="tittle">下行带宽比率</div>
                    <div className="tittle">上下行带宽比</div>

                    <div className="lineCI"></div>
                    <div className="lineC">北京</div>
                    <div className="lineC">
                        <input  value={BJval1} onChange = {this.changeBJ1} placeholder="请输入设置参数"/>
                    </div>
                    <div className="lineC">
                        <input  value={BJval2} onChange = {this.changeBJ2} placeholder="请输入设置参数"/>
                    </div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts1"></div>
                    </div>

                </div>
            </div> 
        )
    }
}
export default IndexLineChart;
