$(function(){

    var currentPage=1;
    var pageSize=5;


function render(){
        $.ajax({
        type:'get',
        url:'/user/queryUser',
        data:{
            page:currentPage,
            pageSize:pageSize
        },
        success:function(info){
            console.log(info);
            $('tbody').html(template('tmp',info));

            $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,
                currentPage: currentPage,
                totalPages: Math.ceil(info.total/pageSize),
                onPageClicked:function (a,b,c,page) {
                  currentPage = page;
                  render();
                }
              });
        }
    });
}

render();
})