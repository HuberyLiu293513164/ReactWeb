var TVchart3 = echarts.init(document.getElementById('TVchart3'));
option = {
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
TVchart3.setOption(option);