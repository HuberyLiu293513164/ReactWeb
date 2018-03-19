var myCharttTuopu = echarts.init(document.getElementById('tuopuChart'));



var data1 = {
    "name": "北京",
    "children": [
        {
            "name": "昌平IDC",
            "children": [
                {
                     "name": "昌平市区节点",
                     "children": [
                      {"name": "昌平西节点", "value": 721},
                      {"name": "昌平东节点", "value": 4294}
                     ]
                },
                {
                    "name": "小汤山节点",
                    "value": 3322
                }
            ]
        },
        {
            "name": "朝阳IDC",
            "children": [
                {"name": "望京节点", "value": 8833},
                {"name": "朝阳东节点", "value": 1732},
                {"name": "朝阳西节点", "value": 3623}
           ]
        },
        {
            "name": "海淀IDC",
            "children": [
                {"name": "上地节点", "value": 4116}
            ]
        },
        {
           "name": "大兴IDC",
           "children": [
            {"name": "大兴亦庄节点", "value": 1616},
            {"name": "东高地节点", "value": 1027},
            {"name": "黄村节点", "value": 3891},
            {"name": "大兴三号节点", "value": 891},
            {"name": "大兴三号节点", "value": 2893},
            {"name": "大兴三号节点", "value": 5103},
            {"name": "大兴三号节点", "value": 3677},
            {"name": "大兴三号节点", "value": 781},
            {"name": "大兴三号节点", "value": 4141},
            {"name": "大兴三号节点", "value": 933},
       
            {
             "name": "旧宫节点",
             "children": [
              {"name": "大兴三号节点", "value": 593},
              {"name": "大兴三号节点", "value": 330},
              {"name": "大兴2号节点", "value": 287},
              {"name": "大兴3号节点", "value": 277},
              {"name": "大兴5号节点", "value": 292},
              {"name": "大兴6号节点", "value": 595},
              {"name": "大兴7号节点", "value": 594},
              {"name": "大兴8号节点", "value": 460},
              {"name": "大兴9号节点", "value": 603},
              {"name": "大兴10号节点", "value": 625},
              {"name": "大兴11号节点", "value": 748},
              {"name": "大兴12号节点", "value": 461},
              {"name": "大兴13号节点", "value": 597},
              {"name": "大兴14号节点", "value": 619},
              {"name": "大兴15号节点", "value": 283},

             ]
            },
            {"name": "马驹桥节点", "value": 843},
            {"name": "马驹桥节点1", "value": 1554},
            {"name": "马驹桥节点2", "value": 970},
            {"name": "马驹桥节点3", "value": 13896},
           
           ]
          },
        {
           "name": "西城IDC",
           "children": [
            {"name": "西城1", "value": 2105},
            {"name": "西城1", "value": 1316},
            {"name": "西城1", "value": 3151},
            {"name": "西城1", "value": 3770},
            {"name": "西城1", "value": 2435},
            {"name": "西城1", "value": 4839},
            {"name": "西城2", "value": 1756},
            {"name": "西城3", "value": 4268},
            {"name": "西城4", "value": 1821},
            {"name": "西城5", "value": 5833}
           ]
        }
    ]
};

myCharttTuopu.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: '展开/折叠',
            icon: 'rectangle'
        }] ,
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',
            name: '展开/折叠',
            data: [data1],

            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '5%',

            symbolSize: 10,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        },
    ]
});