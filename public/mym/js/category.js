$(function(){
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        success:function(info){
            // console.log(info);
            $('.first').html(template('nav_tmp',info));
            
            render(info.rows[0].id);
        }
    })

    function render(id){
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            data:{
                id:id
            },
            success:function(info){
                // console.log(info);
                $('.second').html( template('second_tmp',info) );
            }
        })
    }

    $('.first').on('click','li',function(){
        $(this).addClass('now').siblings().removeClass('now');

        var id =$(this).data('id');

        render(id);

        mui('.mui-scroll-wrapper').scroll()[1].scrollTo(0,0,500);//100毫秒滚动到顶2


    })


})