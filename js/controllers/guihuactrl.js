 app.controller('guihuaController', ['$scope', '$http', function($scope, $http) {
 
 var map = new BMap.Map("container");          // 创建地图实例

    var point = new BMap.Point(120.219375416,30.2592444615);
    map.centerAndZoom(point, 15);             // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); // 允许滚轮缩放

    //判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

}]);