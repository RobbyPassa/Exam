/* your code should go here */

var tmpl ="<li>" + 
          "<img src='image_link'>"+
          "<h2>testo</h2>" +
          "<button class='opt-choose' value='tema'>Choose</button></li>"


$(document).ready(function(){
    
    for (var i = 0; i < data.length; i++) {
        var add_to_ul = tmpl.replace("'image_link'", data[i].img)                                 
                            .replace("'testo'", data[i].name)
                            .replace("'tema'", data[i].id);
        $(".themes").append(add_to_ul);
    }
  
    $('.opt-choose').on('click', function(){
        $('#preview').toggleClass("done hidden");
    })

  
});







