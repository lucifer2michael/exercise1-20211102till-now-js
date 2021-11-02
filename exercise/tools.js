//  创建一个可以简单执行动画的函数
        /* 参数   obj要执行动画的对象 attr要执行动画的样式,left,top,width,right  
        target执行动画的目标位置
        speed移动速度 
        callback回调函数，动画执行完毕后执行
             */
        function move(obj,attr,target,speed,callback){
            clearInterval(obj.timer);

            var current=parseInt(getStyle(obj,attr));
            if(current>target){speed=-speed;}
            obj.timer=setInterval(function(){
                var oldValue=parseInt(getStyle(obj,attr));
                var newValue=oldValue+speed;
                if(speed<0&&newValue<target||speed>0&&newValue>target)
                {newValue=target;}
                obj.style[attr]=newValue+"px";
            if(newValue==target){
                clearInterval(obj.timer);
                callback&&callback();
            }
            },30)
        }
         /*
			 * 定义一个函数，用来获取指定元素的当前的样式
			 * 参数：
			 * 		obj 要获取样式的元素
			 * 		name 要获取的样式名
			 */
			
			function getStyle(obj , name){
				
				if(window.getComputedStyle){
					//正常浏览器的方式，具有getComputedStyle()方法
					return getComputedStyle(obj , null)[name];
				}else{
					//IE8的方式，没有getComputedStyle()方法
					return obj.currentStyle[name];
				}}