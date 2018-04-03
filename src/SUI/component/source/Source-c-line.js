import React,{Component} from 'react';
import echarts from 'echarts';

class Webline extends Component{
    constructor(props){
        super(props);
        this.state = {
            series : [
                {
                    name:'爱奇艺',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120000, 132000, 101000, 134000, 90000, 230000, 210000]
                },
                {
                    name:'腾讯视频',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220000, 182000, 191000, 234000, 290000, 330000, 410000]
                },
                {
                    name:'乐视TV',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150000, 232000, 201000, 154000, 190000, 330000, 310000]
                },
                {
                    name:'小米有乐',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320000, 332000, 301000, 334000, 390000, 330000, 320000]
                },
                {
                    name:'优酷视频',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[320000, 432000, 301000, 334000, 290000, 330000, 320000]
                }
            ],
            seriesHB : [
                {
                    name:'爱奇艺',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120000, 132000, 80000, 134000, 90000, 230000, 210000]
                },
                {
                    name:'腾讯视频',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220000, 182000, 41000, 234000, 290000, 330000, 410000]
                },
                {
                    name:'乐视TV',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150000, 232000, 161000, 154000, 190000, 330000, 310000]
                },
                {
                    name:'小米有乐',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320000, 332000, 151000, 334000, 390000, 330000, 320000]
                },
                {
                    name:'优酷视频',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[220000, 432000, 236000, 339000, 295000, 430000, 220000]
                }
            ],
            seriesNMG : [
                {
                    name:'爱奇艺',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[420000, 132000, 101000, 139000, 90000, 230000, 210000]
                },
                {
                    name:'腾讯视频',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[520000, 182000, 101000, 234000, 290000, 330000, 410000]
                },
                {
                    name:'乐视TV',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[450000, 232000, 201000, 154000, 110000, 330000, 310000]
                },
                {
                    name:'小米有乐',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120000, 332000, 301000, 364000, 310000, 390000, 320000]
                },
                {
                    name:'优酷视频',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[620000, 432000, 301000, 334000, 490000, 330000, 320000]
                }
            ],
            seriesSX : [
                {
                    name:'爱奇艺',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120000, 132000, 101000, 84000, 90000, 230000, 210000]
                },
                {
                    name:'腾讯视频',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220000, 182000, 191000, 234000, 290000, 650000, 410000]
                },
                {
                    name:'乐视TV',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150000, 532000, 201000, 154000, 190000, 640000, 310000]
                },
                {
                    name:'小米有乐',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[620000, 732000, 301000, 434000, 390000, 330000, 320000]
                },
                {
                    name:'优酷视频',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[620000, 432000, 301000, 734000, 690000, 730000, 720000]
                }
            ],
        }
    }

    componentDidUpdate(){
        var myChart = echarts.init(document.getElementById('sourceChart'));
        console.log(this.props.typeWeb)
        let {series,seriesHB,seriesNMG,seriesSX} = this.state;
    
        var option = {
            title: {
                text: '资源码率',
                subtext: '单位:bps',
                left:'90',
                top:'40'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['9:00','11:00','13:00','15:00','17:00','19:00','21:00']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : 
                series
            ,  
        };
        var optionHB = {
            title: {
                text: '资源码率',
                subtext: '单位:bps',
                left:'90',
                top:'40'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['9:00','11:00','13:00','15:00','17:00','19:00','21:00']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : 
                seriesHB    
        };
        var optionNMG = {
            title: {
                text: '资源码率',
                subtext: '单位:bps',
                left:'90',
                top:'40'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['9:00','11:00','13:00','15:00','17:00','19:00','21:00']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : 
                seriesNMG    
        };
        var optionSX = {
            title: {
                text: '资源码率',
                subtext: '单位:bps',
                left:'90',
                top:'40'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['9:00','11:00','13:00','15:00','17:00','19:00','21:00']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : 
                seriesSX    
        };

        let {typeCity,typeWeb} = this.props;
        if(typeCity == '河北'){
            myChart.setOption(optionHB);
        }else if(typeCity == '内蒙古'){
            myChart.setOption(optionNMG); 
        }else if(typeCity == '陕西'){
            myChart.setOption(optionSX);
        }else if(typeCity == '北京'){
            myChart.setOption(option);
        }

        

        // let seriesCopy = [];
        // series.forEach((e,i)=>{
        //     if(e.name == typeWeb){
        //         seriesCopy.push(e);
        //     }
        // }) 
        // console.log(seriesCopy);
        // let optionCopy = {};
        // Object.assign(optionCopy,option);
       
        // optionCopy.series = seriesCopy;

        // console.log(optionCopy);
        // console.log(option);

        // myChart.setOption(optionCopy);
    }


        componentDidMount() {
            // 基于准备好的dom，初始化echarts实例
            
            var myChart = echarts.init(document.getElementById('sourceChart'));
            
            var option = {
                title: {
                    text: '资源码率',
                    subtext: '单位:bps',
                    left:'90',
                    top:'40'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['9:00','11:00','13:00','15:00','17:00','19:00','21:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : 
                    this.state.series    
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
   
        }

    render(){
        

        return (
            <div className="lineAll" >  
                <div id="sourceChart"></div>                           
            </div>
        )
    }
}
export default Webline;
