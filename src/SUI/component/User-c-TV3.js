import React,{Component} from 'react';
import echarts from 'echarts';

class TVchart3 extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }



        componentDidMount() {
            var TVchart3 = echarts.init(document.getElementById('TVchart3'));


            var option = {
                xAxis: {
                    type: 'category',
                    data: ['小汤山', '望京', '上地', '旧宫', '大兴1', '大兴2', '大兴3']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };
            


            // 使用刚指定的配置项和数据显示图表。
            TVchart3.setOption(option);
   
        }

    render(){
        

        return (

            <div className="chart">
                <div>
                    <i className="fa fa-bar-chart fa-lg"></i> 
                    <span>区域质差机房</span>
                </div>
                <div id="TVchart3"></div>
            </div>
        )
    }
}
export default TVchart3;
