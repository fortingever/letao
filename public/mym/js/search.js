$(function(){


    // 先封装一个函数来获取local里面的值

    function  getHistory(){

        var history=localStorage.getItem('search_list') || '[]';

        var arr = JSON.parse(history);

        // console.log(arr);

        return arr;
    }


    // 渲染历史记录
    function   render(){
        var arr =getHistory();
        $('.lt_history').html( template('tmp',{arr:arr}));
    }

    render();


    // 清空历史记录

    $('.lt_history').on('click','.clear_btn',function(e){
        mui.confirm('确定要清空历史记录么?','温馨提示',['取消','确定'],function(e){
            if(e.index===1){

                localStorage.removeItem('search_list');

                render();
            }
        })
    })

      //3. 删除搜索列表
  //3.1 注册点击事件
  //3.2 获取到点击的对应的index
  //3.3 获取历史记录 得到数组
  //3.4 删除数组对应下标的值
  //3.5 重新设置到缓存里面
  //3.6 重新渲染

  $('.lt_history').on('click','.btn_delete',function(){


    var that = $(this);
    
    // console.log(index);
    mui.confirm('确定要删除历史记录么?','温馨提示',['取消','确定'],function(e){

        if(e.index===1){

            var arr=getHistory();

            var index=that.data('id');

            arr.splice(index,1);

            localStorage.setItem('search_list',JSON.stringify(arr));

            render();

        }
    })



  })

   //4. 添加搜索列表
  //4.1 注册点击事件
  //4.2 获取到输入的关键字
  //4.3 获取到历史记录，得到数组
  //4.4 把关键字添加到数组最前面
  //4.5 重新设置到缓存里面
  //4.6 重新渲染


  $('.search_btn').on('click',function(){
      var key = $('.search_input').val().trim();

      if(key === ""){
          mui.toast('请输入关键字');
          return false;
      }

      var arr = getHistory();

 

      var index = arr.indexOf(key);



      if(index != -1){
        arr.splice(index,1);
      }

      if(arr.length >= 10){
        arr.pop();
        }


      arr.unshift(key);


      localStorage.setItem('search_list',JSON.stringify(arr));

      render();


      

      location.href = "searchList.html?key="+key;

  })



})