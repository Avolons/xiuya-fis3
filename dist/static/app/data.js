new Vue({
  el:"body",
  data:function(){
    return{
      // 类型列表
      typeList:[
        {
          title:"全部",
          id:"212",
          number:14,
          isShow:false
        },
        {
          title:"和田玉",
          id:"212",
          number:14,
          isShow:true,
        },
        {
          title:"红玉",
          id:"212",
          number:14,
          isShow:false
        },
        {
          title:"白玉",
          id:"212",
          number:14,
          isShow:false
        },
        {
          title:"翡翠",
          id:"212",
          number:14,
          isShow:false
        },
        {
          title:"紫罗兰与玉",
          id:"212",
          number:14,
          isShow:false
        },
      ],
      // 资料列表
        dataList:[
          {
            title:"玉石种类 2016年《解石技术培训教程绝密版》",
            format:"20M",
            size:"Mp3",
            price:"200.00",
            type:"BUY",
            id:"123"
          },
          {
            title:"玉石种类 2016年《解石技术培训教程绝密版》",
            format:"20M",
            size:"Mp3",
            price:"200.00",
            type:"BUY",
            id:"123"
          },
          {
            title:"玉石种类 2016年《解石技术培训教程绝密版》",
            format:"20M",
            size:"Mp3",
            price:"200.00",
            type:"DOWN",
            id:"123"
          },
          {
            title:"玉石种类 2016年《解石技术培训教程绝密版》",
            format:"20M",
            size:"Mp3",
            price:"200.00",
            type:"BUY",
            id:"123"
          },
        ]
    };
  },
  methods:{
    //购买资料
    buyData:function(item){
        console.log(item);
    },
    // 下载资料
    downLoad:function(item){
        console.log(item);
    },
    //类型选择
    typeCheck:function(item){
      for(var i=0;i<this.typeList.length;i++){
        this.typeList[i].isShow=false;
        item.isShow=true;
      }

    }
  },
  ready:function(){
    laypage({
      cont: $('#pageControl'), //容器。值支持id名、原生dom对象，jquery对象,
      pages: 100, //总页数
      skip: true, //是否开启跳页
      skin: '#AF0000',
      groups: 3 //连续显示分页数
    });
  }
});
