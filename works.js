$('#grid2 img').each(function(){
    var $this = $(this); 
    $this.wrap('<div class="item"><a></a></div>');

});
$('#grid2').addClass('effect-2');

$(window).load(function(){
  var $container = $('.grid');
  // initialize
  $container.masonry({
    //columnWidth: 200,
    itemSelector: '.item'
  })




$(".image").on("click", function(){


	$(".imageholder").append("<img src='"+$(this).attr("src")+"' class='popup_img' />")
	//$(this).attr("src")

	$('#overlay').removeClass("overlay-cl");
  	$('#overlay').addClass( "overlay-op");
  	$("html,body").css("overflow","hidden");
});





  $('#overlay').click(()=>{
  	$('#overlay').removeClass( "overlay-op");
  	$('#overlay').addClass("overlay-cl");
  	$("html,body").css("overflow","auto");
  	$(".imageholder").empty();
  })

})


function display($this) {
    var source = $("img", $this).attr("src");
    alert("The souce of the image is " + source);
}

getsrc = function($this){
	console.log($($this).attr('src'));
}

