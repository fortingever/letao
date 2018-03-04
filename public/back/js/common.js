//进度条功能
//禁用进度环
NProgress.configure({ showSpinner: false });

//注册一个全局的ajaxStart事件，所有的ajax在开启的时候，会触发这个事件
$(document).ajaxStart(function () {
  //开启进度条
  NProgress.start();
});

$(document).ajaxStop(function () {
  //完成进度条
  setTimeout(function () {
    NProgress.done();
  }, 500);

});
if(location.href.indexOf("login.html") == -1){
  $.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    success:function (data) {
      if(data.error === 400){
        //说明用户没有登录，跳转到登录页面
        location.href = "login.html";
      }
    }
  })
}
  $(".chirld").prev().on("click", function () {
    // console.log('111')
    $(this).next().slideToggle();
  });
  // 隐藏导航栏
  $('.btn_left').on('click',function(){
      // console.log(111)
    $('.lt_nav').toggleClass('now');
    $('.lt_main').toggleClass('now');
  });
$('.btn_right').on('click',function(){
  $('#logoutModal').modal('show');


  $('.btn_ok').off().on('click',function(){
    console.log(111);
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      success:function(data){
        console.log(data);
        if(data.success){
          location.href="index.html";
        }
      }
    })
  })
})