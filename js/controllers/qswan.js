 app.controller('QsWanCtrl', ['$scope', '$http', function($scope, $http) {

    var qq=document.getElementById('main');
    var myChart = echarts.init(qq);

    option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '负荷', '业务量'],
        source: [
            {product: 'Matcha Latte', '负荷': 43.3, '业务量': 85.8,},
            {product: 'Milk Tea', '负荷': 83.1, '业务量': 73.4 },
            {product: 'Cheese Cocoa', '负荷': 86.4, '业务量': 65.2},
            {product: 'Walnut Brownie', '负荷': 72.4, '业务量': 53.9}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'}
    ]
};


// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


//
var pp=document.getElementById('main2');
    var myChart = echarts.init(pp);
option = {
    title : {
        text: 'LTE无线利用率',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['负荷','业务量']
    },
    series : [
        {
            name: '比例',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:885, name:'负荷'},
                // {value:310, name:'邮件营销'},
                // {value:234, name:'联盟广告'},
                // {value:135, name:'视频广告'},
                {value:1548, name:'业务量'}
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


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




}]);