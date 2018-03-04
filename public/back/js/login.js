$(function(){


    //使用表单校验插件
$('form').bootstrapValidator({

  
    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
  
    //3. 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名长度必须在2到6之间'
          },
          callback:{
            message: '用户名不存在'
          }
      }
    },
    password: {
        validators: {
          //不能为空
          notEmpty: {
            message: '密码不能为空'
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 10,
            message: '用户名长度必须在6到10之间'
          },
          callback:{
            message: '密码错误'
          }
      }
    }
    }
  
  });

    $('form').on('success.form.bv',function(e){

      e.preventDefault();
      console.log('1111');

      $.ajax({
        type:'post',
        url:"/employee/employeeLogin",
        data:$('form').serialize(),
        success:function(info){
            console.log(info);
            if(info.success){
              location.href = "index.html";
            }
            
        if(info.error === 1000){
          //alert("用户名不存在");

          //手动调用方法，updateStatus让username校验失败即可
          //第一个参数：改变哪个字段
          //第二个参数：改成什么状态  VALID:通过  INVALID:不通过
          //第三个参数：选择提示的信息
          $("form").data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
        }

        if(info.error === 1001){
          //alert("密码错误");

          $("form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
        }
        }

      })
    })

  $("[type='reset']").on("click", function () {
    
        //重置样式
        $('form').data("bootstrapValidator").resetForm();
    
      });




})