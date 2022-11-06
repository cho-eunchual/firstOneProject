$(function(){ // jQuery 준비

    $('#tab__body ul li').click(function(){
        $('#result dl').hide();

        for(let i=0; i<10; i++){
        if($('#list'+i).is(':checked') == true){
            $('#result .list'+i).show();
        }

     }        
    });


}); // jQuery 종료

 