// basic syntax $(selector).action()
// we write document .ready to prevent loading jquery befor document is loaded.
$(document).ready(function(){
    // selector can be elements(button) or classname(.hide) or id(#hide).
    // jquery has method hide() and show()
    // $(".hide").click(function(){
    //     $(".a").hide();
    // });
    // $(".show").click(function(){
    //     $(".a").show();
    // });

    $(".hide").click(function(){
        $(".a").toggle();
    })
});

$(document).ready(function(){
    //paragraph will disappear when double clicked.
    $("#hide-para").dblclick(function(){
        $(this).hide("fast",
            //callback function
            function(){
            alert("I disappeared");
            window.location.href = "/html-dom/dice-game.html";
        }); 
    });
});

// mouseenter,mouseleave,mousedown,mouseup,hover
$(document).ready(function(){
    $("#mouseenter").hide();
    $(".mouseenter").mouseenter(function(){
        $("#mouseenter").show();
    });
    $(".mouseenter").mouseleave(function(){
        $("#mouseenter").hide(500);
    });
});

// $(document).ready(function(){
//     $("#mouseenter").hide();
//     $(".mouseenter").hover(function(){
//         $("#mouseenter").show();
//     });
// });

$(document).ready(function(){
    $(".onexample").on({
        mouseenter : function(){
            $(this).css("background-color","lightgray");
        },
        mouseleave : function(){
            $(this).css("background-color","lightpink");
        },
        click : function(){
            $(this).css("background-color","yellow");
        },
    })
}); 
// $(document).ready(function(){
//     $("#fade").click(function(){
//       $("#div1").fadeIn(); //default fast
//       $("#div2").fadeIn("slow");
//       $("#div3").fadeIn(2000);
//     });
// });
// $(document).ready(function(){
//     $("#fadeout").click(function(){
//         $("#div1").fadeOut(2000);
//         $("#div2").fadeOut("slow");
//         $("#div3").fadeOut("fast");
//     });
// });
$(document).ready(function(){
    $("#fadetoggle").click(function(){
        $("#div1").fadeToggle(2000);
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle("fast");
    });
});
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#boxbutton").click(function(){
        //queue functionality
        var div = $("#p1");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px' , opacity: '0.8'}, "slow");
        div.animate({height: '50px', opacity: '0.4'}, "slow");
        div.animate({width: '50px', opacity: '0.8'}, "slow");
        // can even specify the property's animation as "show", "hide", or "toggle".
    });
});
// jquery chaining.
$(document).ready(function(){
    $("#chain").click(function(){
      $("#p1").slideUp(2000).slideDown(2000);
    });
});
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#chp").text("changed to Paragraph 2");
    });
});
$(document).ready(function(){
    $("#chglink").click(function(){
      $("#w3s").attr("href", function(i,origValue){
        // i specifies the index of attribute(href) if multiple found then index will be  0,1,2 ....
        return origValue + "/jquery/"; 
      });
    }); 
});