import React,{Component} from 'react';
import echarts from 'echarts';

class TVchart2 extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }



        componentDidMount() {
            var TVchart2 = echarts.init(document.getElementById('TVchart2'));
            var base = +new Date(2016, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var date = [];
            var data = [Math.random() * 100];
        
            for (var i = 1; i < 550; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() -0.49) * 10 + data[i - 1]));
            }

            var option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center', 
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'模拟数据',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(102, 70, 131)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(25, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(25, 70, 131)'
                                }])
                            }
                        },
                        data: data
                    }
                ]
            };
            


            // 使用刚指定的配置项和数据显示图表。
            TVchart2.setOption(option);
   
        }

    render(){
        

        return (

            <div className="chart">
                <div>
                    <i className="fa fa-bar-chart fa-lg"></i> 
                    <span>区域主观评分趋势</span>
                </div>
                <div id="TVchart2"></div>
            </div>
        )
    }
}
export default TVchart2;
