var webpie = echarts.init(document.getElementById('webpie'));
option = {
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
        data:['爱奇艺','腾讯视频','乐视TV','小米有乐','优酷视频','其他']
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
                {value:1548, name:'其他'},

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
};


webpie.setOption(option);