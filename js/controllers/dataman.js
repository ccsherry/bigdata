 app.controller('DataManCtrl', ['$scope', '$http', function($scope, $http) {
//饼
    var qq=document.getElementById('main');
    var myChart = echarts.init(qq);
    var data = genData(50);

        option = {
            title : {
                text: '数据占比情况',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data.legendData,

                selected: data.selected
            },
            series : [
                {
                    name: '占比',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData,
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

        function genData(count) {
    
            var legendData = ['智慧天线','网络天眼','other'];
            var data1=[1,2,3,4]
            var seriesData = [];
            var selected = {};
            for (var i = 0; i < legendData.length; i++) {
                seriesData.push({
                    name: legendData[i],
                    value: data1[i]
                });
                selected[legendData[i]] = i < 6;
            }

            return {
                legendData: legendData,
                seriesData: seriesData,
                selected: selected
            };

            function makeWord(max, min) {
                var nameLen = Math.ceil(Math.random() * max + min);
                var name = [];
                for (var i = 0; i < nameLen; i++) {
                    name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                }
                return name.join('');
            }
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

//折线图
    var pp=document.getElementById('main2');
    var myChart = echarts.init(pp);
    app.title = '多 X 轴示例';

    var colors = ['#d14a61', '#5793f3', '#675bba'];


    option = {
        color: colors,

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['智慧天线', '网络天眼']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '总数据量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '总数据量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name:'智慧天线',
                type:'line',
                xAxisIndex: 1,
                smooth: true,
                data: [2300, 5900, 9000, 5000, 2870, 7070, 3756, 2812, 4870, 1998,6000, 2300]
            },
            {
                name:'网络天眼',
                type:'line',
                smooth: true,
                data: [3988, 5899, 1112, 2345, 4678, 6920, 2361, 4660, 5540, 1840, 1003, 1000]
            }
        ]
    };
    
    // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

//

}]);