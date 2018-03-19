var sourceChart = echarts.init(document.getElementById('sourceChart'));
option = {
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
    ]
};


sourceChart.setOption(option);