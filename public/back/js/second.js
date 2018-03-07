$(function(){


    var secondPage = 1;
    var pageSize = 5;


    function  render(){
        $.ajax({
        type:'get',
        url:'/category/querySecondCategoryPaging',
        data:{
            page:secondPage,
            pageSize:pageSize
        },
        success:function(info){
            console.log(info);
            $('tbody').html(template('tmp',info));

            $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,
                currentPage:secondPage,
                totalPages:Math.ceil(info.total/pageSize),
                onPageClicked:function (a,b,c,page) {
                    secondPage = page;
                  render();
                }
              });
        }
    })
    }

    render();

})