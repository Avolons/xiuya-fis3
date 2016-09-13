$(document).ready(function() {
	new Vue({
		el: "body",
		data: function() {
			return {
				// 静态页面，整体数据层
			}
		},
		ready: function() {
			laypage({
				cont: $('#pagecontrol'), //容器。值支持id名、原生dom对象，jquery对象,
			    pages: 100, //总页数
			    skip: true, //是否开启跳页
			    skin: '#AF0000',
			    groups: 3 //连续显示分页数
			});
		}
	});
})