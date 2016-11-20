var ing_start = "";
var ing_no = 0;

$(document).on("mousedown","#arcade-button",function(){



$.ajax({
        url: '/auto_gen/start_slip/',
        type:'POST',
        dataType: 'json',
       
        beforeSend: function(xhr, settings) {
         ing_start = setInterval(incr, 15);
        xhr.setRequestHeader("X-CSRFToken", readCookie('csrftoken'));
    },
        success: function(data) {
        
    }
    });

})


function incr(no){
	
	if(ing_no > 100){
        ing_no = 100;
	}
	 ing_no2 = ing_no;
	ing_no2 = (typeof no == "undefined") ?  ing_no : no;
	$("#bar").removeClass();
	color = "green";
	  if(ing_no2 < 80 && ing_no2 > 50){
           color = "orange";
	  }
	  else if(ing_no2 > 80){
         color = "red";
	  }
	  $("#ing_no").text(ing_no2);
	$("#bar").addClass("c100 p"+ing_no2+" "+color);
	ing_no++;
}


$(document).on("mouseup touchend","#arcade-button",function(){
clearInterval(ing_start);
incr(0)
ing_no = 0;

$.ajax({
        url: '/auto_gen/stop_slip/',
        type:'POST',
        dataType: 'json',
        
        beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRFToken", readCookie('csrftoken'));
    },
        success: function(data) {
        
    }
    });

})





    var cookies;

    function readCookie(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }

        return cookies[name];
    }

    window.readCookie = readCookie; // or expose it however you want

