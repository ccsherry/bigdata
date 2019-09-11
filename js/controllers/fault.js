 app.controller('faultController', ['$scope', '$http', function($scope, $http) {
 
 var map = new BMap.Map("container");          // 创建地图实例

 


  map.centerAndZoom(new BMap.Point(120.219375416,30.2592444615), 11); // 初始化地图，设置中心点坐标和地图级别
  var json_data = [[120.204,30.215],[120.213752,30.21334],[120.214502,30.232241]];
	var pointArray = new Array();
	for(var i=0;i<json_data.length;i++){
		var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
		map.addOverlay(marker);    //增加点
		pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
		marker.addEventListener("click",attribute);
	}
	//让所有点在视野范围内
	map.setViewport(pointArray);
	//获取覆盖物位置
	function attribute(e){
		var p = e.target;
		alert("详细数据" + p.getPosition().lng + "," + p.getPosition().lat);    
	}	






  // function showInfo(e){
  //   alert(e.point.lng + ", " + e.point.lat);
  // }
  // map.addEventListener("click", showInfo);



    // var point = new BMap.Point(120.219375416,30.2592444615);
    // map.centerAndZoom(point, 15);             // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); // 允许滚轮缩放

    //判断浏览区是否支持canvas
    // function isSupportCanvas(){
    //     var elem = document.createElement('canvas');
    //     return !!(elem.getContext && elem.getContext('2d'));
    // }
 
}]);


