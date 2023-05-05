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

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".career_form").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "name": {
                required: true,
            },
            "link_cv": {
                required: true,
            },
        },
        messages: {
            "email": {
                required: "Required feild",
                emailRegex: "Enter valid email address",
            },
            "name": {
                required: "Required feild",
            },
            "link_cv": {
                required: "Required feild",
            },
        },
    });
});