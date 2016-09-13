new Vue({
			//数据渲染区
			el: 'body',
			data:function(){
				return {
					videoObj: null,
					//*****视屏播放数据对象
					videoData: [{
						src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
						type: 'application/x-mpegURL',
						label: '标清',
						res: 360
					}, {
						src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
						type: 'application/x-mpegURL',
						label: '高清',
						res: 720
					}, {
						src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
						type: 'application/x-mpegURL',
						label: '超清',
						res: 1080
					}],
					//右侧功能栏是否显示
					rightShow: true,
					//*****顶部数据区域
					headerTitle: '80,90后员工职业技能素养提升', //标题
					headerAllTime: 54, //总时长
					headerHaveTime: 28, //已用时长
					headerMessage: 3, //消息数量
					charctar: {
						imgsrc: './img/videoplayer/video-content-charcter.png',
						name: '寂寞星球的玫瑰',
					},
					/****
					课程列表数据
					****/
					courseList: {
						title: '8090后员工管理方法',
						//一级目录
						childernone: [{
							title: '名字不知道是啥王总告之',
							childern: [{
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}]
						}, {
							title: '名字不知道是啥王总告之',
							childern: [{
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}]
						}, {
							title: '名字不知道是啥王总告之',
							childern: [{
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}]
						}, {
							title: '名字不知道是啥王总告之',
							childern: [{
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}]
						}, {
							title: '名字不知道是啥王总告之',
							childern: [{
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}, {
								title: '8090后员工的管理方法',
								alltime: 50.25,
								videodata: [{
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
									type: 'application/x-mpegURL',
									label: '标清',
									res: 360
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '高清',
									res: 720
								}, {
									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
									type: 'application/x-mpegURL',
									label: '超清',
									res: 1080
								}],
								select: false
							}]
						}, ]
					},
					/****
					我的笔记部分
					****/
					//**********输入框
					noteInput: {
						text: '',
						//是否是私密状态
						secret: false
					},
					//*********数据部分
					noteData: {
						//所有笔记
						allnote: [{
							img: '/img/videoplayer/video-content-charcter.png',
							title: '全部笔记',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '全部笔记',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}],
						//我的笔记
						mynote: [{
							img: '/img/videoplayer/video-content-charcter.png',
							title: '我的笔记',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}]
					},
					/****
					我的问答部分
					****/
					//**********输入框
					answerInput: 'sdfas',
					//********数据部分
					answerData: {
						//所有笔记
						allanswer: [{
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}],
						//我的笔记
						myanswer: [{
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}, {
							img: '/img/videoplayer/video-content-charcter.png',
							title: '寂寞星球的玫瑰',
							text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
							time: '2016-01-02 10:39'
						}]
					},
					/***
					页面元素切换数据
					***/
					tabelcheck: {
						// 课程目录，笔记和问答的切换
						leftcheck: {
							course: {
								value: false
							},
							note: {
								value: true
							},
							answer: {
								value: false
							}
						},
						// 我的笔记
						notecheck: {
							mynote: {
								value: false
							},
							allnote: {
								value: true
							}
						},
						// 我的问答
						answercheck: {
							myanswer: {
								value: false
							},
							allanswer: {
								value: true
							}
						}
					},
				}
			},
			//方法区域
			methods:{
				/****
				  笔记和问答的切换
				  ****/
				  noteCheck:function(item){
				    if (!item.value) {
				      this.tabelcheck.notecheck.mynote.value=false;
				      this.tabelcheck.notecheck.allnote.value=false;
				      item.value=true;
				    }
				  },
				  answerCheck:function(item){
				    if (!item.value) {
				      this.tabelcheck.answercheck.myanswer.value=false;
				      this.tabelcheck.answercheck.allanswer.value=false;
				      item.value=true;
				    }
				  },
				  /****
				      发表提问和发表笔记
				  ****/
				  //笔记
				  publishGet:function(text,type){
				    //清除空格
				    text=text.trim();
				    //当真是存在数据时
				    if(text){
				      //发送后开始使用ajax
				        var newdata={
				          img:this.charctar.imgsrc,
				          title:this.charctar.name,
				          text:this.noteInput.text,
				          time:this.getDate()
				        };
				        //当当前状态处于私密性质，下面可以使用ajax进行数据获取
				        if (type) {
				          this.noteData.mynote.unshift(newdata);
				        }else{
				          this.noteData.allnote.unshift(newdata);
				        };
				        //清空输入框内容
				        this.noteInput.text='';
				      }
				  },
				  //提问
				  publishanswer:function(text){
				    //清除空格
				    text=text.trim();
				    //当真是存在数据时
				    if(text){
				      //发送后开始使用ajax
				        var newdata={
				          img:this.charctar.imgsrc,
				          title:this.charctar.name,
				          text:this.answerInput,
				          time:this.getDate()
				        };
				        this.answerData.allanswer.unshift(newdata);
				        this.answerData.myanswer.unshift(newdata);
				        this.answerInput='';
				      }
			    	},
			    	//时间格式化函数
					  getDate:function(){
					    var date=new Date();
					    var year=date.getFullYear();
					    var month=date.getMonth()+1;
					    var day=date.getDate();
					    var hours=date.getHours();
					    var minutes=date.getMinutes();
					    return year+'-'+month+'-'+day+'  '+hours+':'+minutes ;
					},
					/****
					     右侧显示区域的切换
					  *****/
					   rightCheck:function(item){
					     //假设处于显示状态，就清除他的显示，否则先去除其他的显示，再将其显示
					     if (item.value==true) {
					        item.value=false;
					        //自定义事件，通知子组件改变状态
					        this.rightShow==true ? this.rightShow=false : this.rightShow=true;
					     }else{
					       //所有的数据先设置为不显示
					       var result=0;
					       //如果所有的按钮都处于未被点击状态，那么
					       for (var i in this.tabelcheck.leftcheck) {
					         if (this.tabelcheck.leftcheck[i].value==false) {
					           result++;
					         }
					       };
					       if (result==3) {
					         this.rightShow==true ? this.rightShow=false : this.rightShow=true;
					         item.value=true;
					       }else{
					         for (var i in this.tabelcheck.leftcheck) {
					           this.tabelcheck.leftcheck[i].value=false;
					         };
					          item.value=true;
					       }
					     }
					   },
					//******视屏重载方法
				    videoReload:function(videoObj,data,videoDom){
				      videoObj=videojs(videoDom, {
				          controls: true,
				          plugins: {
				            videoJsResolutionSwitcher: {
				              default: 'low',
				              dynamicLabel: true
				            }
				          }
				        }, function() {
				          var player = this;
				          window.player = player;
				          /*此处放置视屏数据，格式为数组，下面有被注释的示例*/
				          player.updateSrc(data);
				          player.on('resolutionchange', function() {
				            console.info('Source changed to %s', player.src())
				          });
				    });
				    }, 
				     /****
					  视屏切换功能
					  ****/
					  videocheck(item){
					    //循环数组，清除所有的列表点击样式
					    var num= this.courseList.childernone;
					    for (var i=0;i<num.length;i++) {
					      for (var j=0;j<num[i].childern.length;j++) {
					        num[i].childern[j].select=false;
					      }
					    };
					    //将当前列表的显示样式设置为被点击状态
					    item.select=true;
					    //子组件冒泡事件，将视屏数据传送过去
					    this.videoReload(this.videoObj,item.videodata,'video');
					  },
				    
			},
			ready:function(){
				this.videoReload(this.videoObj,this.videoData,'video');
			}
		});