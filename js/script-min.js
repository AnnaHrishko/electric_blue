function customHeight(){$(window).width()>991&&$(".wraper_for_custom_height").each(function(){var t=$(".custom_row",this);t.css("height","auto");var o=Math.max.apply(Math,t.map(function(){return $(this).height()}).get());t.height(o),console.log(o)})}customHeight(),$(window).resize(function(){customHeight(),console.log("hello")});