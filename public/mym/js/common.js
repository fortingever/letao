
    mui('.mui-scroll-wrapper').scroll({
        indicators: false
    });



    mui(".mui-slider").slider({
        interval: 1000
      });

 

        function getsearch(key){
                var search=location.search;
            
                //   console.log(search);
                  search = decodeURI(search);
            
                  search = search.slice(1);
            
                    arr = search.split('&');
            
                //   console.log(arr);
            
                  var obj={};
            
                  arr.forEach(function(v){
                    console.log(v);
            
                    var key = v.split('=')[0];
            
                    var value = v.split('=')[1];
            
                    obj[key]=value;
                  })
            
                  return obj[key];
        }
     

    //   return obj;
      


    
// console.log(tools.getsearchObj());



