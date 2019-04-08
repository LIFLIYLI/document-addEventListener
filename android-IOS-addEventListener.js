	//安卓监听键盘
		//获取原窗口的高度
		var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
		window.onresize = function() {
			//键盘弹起与隐藏都会引起窗口的高度发生变化
			var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
			if(resizeHeight - 0 < originalHeight - 0) {
				//软弹起
	
			} else {
				//收起

			}
		}
    
    //ios弹起
				document.body.addEventListener('focusin', () => { 
        //软键盘弹起事件
					
				})
				document.body.addEventListener('focusout', () => {    
        //软键盘关闭事件
				
				})
