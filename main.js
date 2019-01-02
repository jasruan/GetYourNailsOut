$(document).ready(function(){
    $('.hero-text > h1').hide().fadeIn(800).effect( "bounce", { distance: 80,times: 3 },900);
    $('#hero-tabs , .slogan, .business-info').hide().fadeIn(1100);
    
    $('#hero-tabs > a').click(function(e){ 
        event.preventDefault();
        if(this.id == "service"){
            $('#load-test').load('loadPage.php', function(){
                $("#load-area").load('services.php');
                $("#load-header").addClass('service-jumbo');
            });
        }
        else if(this.id == "product"){
            $('#load-test').load('loadPage.php', function(){
                $("#load-area").load('products.php');
                $("#load-header").addClass('product-jumbo');
            });
        }
        else{
            $('#load-test').load('loadPage.php', function(){
                $("#load-area").load('contact.php');
                $("#load-header").addClass('contact-jumbo');
            });
        }
    });
    $('#servicePage').click(function(){
        $('#load-area').load('services.php');
        $("#load-header").removeClass().addClass('service-jumbo');
        return false;
    });
    $('#productPage').click(function(){
        $('#load-area').load('products.php');
        $("#load-header").removeClass().addClass('product-jumbo');
        return false;
    });
    $('#contactPage').click(function(){
        $('#load-area').load('contact.php');
        $("#load-header").removeClass().addClass('contact-jumbo');
        return false;
    });

  
    function pageSlideshow(){
        let imageArray = 
        ["media/beauty-conceptual-nail-polish.jpg",
        "media/cacti-cactus-cactus.jpg,",
        "media/adult-beauty-cosmetic.jpg"];
    }
});