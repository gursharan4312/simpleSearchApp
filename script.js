$("#search").keyup(function(){
      $.getJSON('data.json',function(data){
           var searchInput = $("#search").val();
           var output = "<ul>";
           var myExp = new RegExp(searchInput,"i");

           $.each(data,function(key,val){
               if((val.name.search(myExp) != -1)||(val.bio.search(myExp)!=-1)){
                    output += "<li id='searchItem'>";
                    output += "<h2>"+val.name+"</h2>";
                    output += "<img src='images/"+val.shortname+"_tn.jpg' alt='"+val.name+"'>";
                    output += "<p>"+val.bio+"</p>";
                    output += "</li>";
               }//end if

           });//each loop

           output += "</ul>";
           $("#searchData").html(output);
    });//get JSON
});//keyUp function
