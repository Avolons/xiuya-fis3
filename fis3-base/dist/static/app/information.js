new Vue({
	el:'body',
	data:function  () {
		return{
			//table切换
			table:{
				itr:{show:true},
				list:{show:false},
				talk:{show:false}
			}
		}
	},
	//方法区
	methods:{
		tablecheck:function  (item) {
			if (item.show) {
				return false;
			}else{
				this.table.itr.show=false;
				this.table.list.show=false;
				this.table.talk.show=false;
				item.show=true;
			}
		}
	}
})