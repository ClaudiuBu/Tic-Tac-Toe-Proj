var onOff;



$('.square').click(function(e){
    if(!onOff){
    //if empty add class
    $(this).animate({
        backgroundColor: "#332267",
      },1500).addClass('x-square');
        onOff=true;
    }
    else{
        $(this).animate({
            backgroundColor: "#332267",
          },100).addClass('o-square');
         onOff=false;
        }
    //else nothing
})