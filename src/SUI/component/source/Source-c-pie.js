import React,{Component} from 'react';
import echarts from 'echarts';

class Webpie extends Component{
    constructor(props){
        super(props);
        this.state = {
            option:{
                title : {
                    text: '资源通量',
                    subtext:'单位：TB',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '70%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'爱奇艺'},
                            {value:310, name:'腾讯视频'},
                            {value:234, name:'乐视TV'},
                            {value:135, name:'小米有乐'},
                            {value:1548, name:'优酷视频'},
                            
            
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            optionHB:{
                title : {
                    text: '资源通量',
                    subtext:'单位：TB',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '70%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'爱奇艺'},
                            {value:310, name:'腾讯视频'},
                            {value:234, name:'乐视TV'},
                            {value:1356, name:'小米有乐'},
                            {value:1548, name:'优酷视频'},
                           
            
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            optionNMG:{
                title : {
                    text: '资源通量',
                    subtext:'单位：TB',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '70%',
                        center: ['50%', '60%'],
                        data:[
                            {value:835, name:'爱奇艺'},
                            {value:310, name:'腾讯视频'},
                            {value:834, name:'乐视TV'},
                            {value:1356, name:'小米有乐'},
                            {value:548, name:'优酷视频'},
                           
            
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            optionSX:{
                title : {
                    text: '资源通量',
                    subtext:'单位：TB',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '70%',
                        center: ['50%', '60%'],
                        data:[
                            {value:535, name:'爱奇艺'},
                            {value:810, name:'腾讯视频'},
                            {value:234, name:'乐视TV'},
                            {value:56, name:'小米有乐'},
                            {value:1548, name:'优酷视频'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            
        }
    }

    componentDidUpdate(){
        var myChart = echarts.init(document.getElementById('webpie'));
        let {option,optionHB,optionNMG,optionSX} = this.state;
        console.log(this.props.typeWeb)
        let {typeCity} = this.props;
        if(typeCity == '河北'){
            myChart.setOption(optionHB);
        }else if(typeCity == '内蒙古'){
            myChart.setOption(optionNMG); 
        }else if(typeCity == '陕西'){
            myChart.setOption(optionSX);
        }else if(typeCity == '北京'){
            myChart.setOption(option);
        }
    }

    componentDidMount() {
        let {option,optionHB,optionNMG,optionSX} = this.state;
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('webpie'));
            // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    render(){
        let webpie = <div id="webpie"></div> 
        return(
            <div className="pieAll" >  
            {webpie}
            </div>
        )
    }
}
export default Webpie;
