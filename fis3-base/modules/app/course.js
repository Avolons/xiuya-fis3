$(document).ready(function() {
	new Vue({
		el: "body",
		data: function() {
			return {
				// 静态页面，整体数据层
				//导航栏第一级
				nav_top:[
				{
					title:"全部",
					id:1457,
				},
				{
					title:"职称23",
					id:1457,
				},
				],
				//导航栏同级
				nav_same:[
				[{
					title:'全部fg',
					id:1548
				},
				{
					title:'问题解决',
					id:1548
				},
				{
					title:'项目管理s',
					id:1548
				},
				{
					title:'总结汇报',
					id:1548
				}],
				[{
					title:'全部sdf',
					id:1548
				},
				{
					title:'问题解决',
					id:1548
				},
				{
					title:'项目管理dsfa',
					id:1548
				},
				{
					title:'总结汇报',
					id:1548
				}]
				],
				//导航栏子集
				nav_childrens:[
				{
					title:'全部',
					id:1548
				},
				{
					title:'问题解决',
					id:1548
				},
				{
					title:'项目管理',
					id:1548
				},
				{
					title:'总结汇报',
					id:1548
				}
				],
				//课程数据列表
				courselist:[
				{
					imgsrc:"/img/coursecenter/course-lizi.png",
					title:'创造巅峰学习状态',
					studypeople:2000,
					courseNumber:12,
					alltime:'6小时50分'
				},
				{
					imgsrc:"/img/coursecenter/course-lizi.png",
					title:'创造巅峰学习状态',
					studypeople:2000,
					courseNumber:12,
					alltime:'6小时50分'
				},
				{
					imgsrc:"/img/coursecenter/course-lizi.png",
					title:'创造巅峰学习状态',
					studypeople:2000,
					courseNumber:12,
					alltime:'6小时50分'
				},
				{
					imgsrc:"/img/coursecenter/course-lizi.png",
					title:'创造巅峰学习状态',
					studypeople:2000,
					courseNumber:12,
					alltime:'6小时50分'
				},
				{
					imgsrc:"/img/coursecenter/course-lizi.png",
					title:'创造巅峰学习状态',
					studypeople:2000,
					courseNumber:12,
					alltime:'6小时50分'
				},
				]
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