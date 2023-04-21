


function customHeight() {
   if ($(window).width() > 991) {
     $('.wraper_for_custom_height').each(function(){  
         var $columns = $('.custom_row',this);
         $columns.css("height", "auto");
         var maxHeight = Math.max.apply(Math, $columns.map(function(){
             return $(this).height();
         }).get());
         $columns.height(maxHeight);
         console.log(maxHeight)
    });
  } 
}

customHeight()


$(window).resize(function() {
  customHeight()
  console.log("hello")
});