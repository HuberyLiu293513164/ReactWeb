import React,{Component} from 'react';
import echarts from 'echarts';
import "../css/IndexLineChart.css";
import '../font-awesome/css/font-awesome.min.css';

class IndexLineChart extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }



        componentDidMount() {
            // 基于准备好的dom，初始化echarts实例
            var myChart1 = echarts.init(document.getElementById('lineEcharts1'));
            var myChart2 = echarts.init(document.getElementById('lineEcharts2'));
            var myChart3 = echarts.init(document.getElementById('lineEcharts3'));
            var myChart4 = echarts.init(document.getElementById('lineEcharts4'));
            var myChart5 = echarts.init(document.getElementById('lineEcharts5'));
            var myChart6 = echarts.init(document.getElementById('lineEcharts6'));
            var myChart7 = echarts.init(document.getElementById('lineEcharts7'));
            var myChart8 = echarts.init(document.getElementById('lineEcharts8'));
       
            var option1 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option2 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option3 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option4 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option5 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option6 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option7 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            var option8 = {
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
                        name: '上线用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        data: [16789]
                    },
                    {
                        name: '优质体验用户量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        
                        data: [14278]
                        
                    },
            
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option1);
            myChart2.setOption(option2);
            myChart3.setOption(option3);
            myChart4.setOption(option4);
            myChart5.setOption(option5);
            myChart6.setOption(option6);
            myChart7.setOption(option7);
            myChart8.setOption(option8);
        }

    render(){
        

        return (
            <div className="users">
                <div className="userh">
                    <i className="fa fa-flag-o fa-lg"></i> 
                    <span>注册用户</span>
                </div>
                <div className="userC">
                    <div className="tittle"></div>
                    <div className="tittle">国家</div>
                    <div className="tittle">上线用户量</div>
                    <div className="tittle">优质体验用户量</div>
                    <div className="tittle">质差比</div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts1"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts2"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts3"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts4"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts5"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts6"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts7"></div>
                    </div>

                    <div className="lineCI"><img src={require('../img/Germany.png')} /></div>
                    <div className="lineC">德国</div>
                    <div className="lineC">16789</div>
                    <div className="lineC">14278</div>
                    <div className="lineEcharts">
                        <div className="lineEchartsi" id="lineEcharts8"></div>
                    </div>

                </div>
            </div> 
        )
    }
}
export default IndexLineChart;
