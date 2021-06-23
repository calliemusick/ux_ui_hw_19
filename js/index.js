

$( ".theProblemCTA button" ).hover(
    function() {
        $( this ).animate({
            height: '+=5px',
            width: '+=50px'
          }); 
    }, function() {
        $( this ).animate({
            height: '-=5px',
            width: '-=50px'
          });
    }
);


$(".dropdown").hover(
    function(){
        $(".dropdown-content").show();
    }, function(){
        $(".dropdown-content").hide();
    }
);