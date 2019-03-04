
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
               /* $("#load-area").load('products.php');
                $("#load-header").addClass('product-jumbo');
                */
                createProduct();
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
       
       createProduct();
        return false;
    });
    let createProduct=()=>{
        $('#load-area').load('products.php');
        $("#load-header").removeClass().addClass('product-jumbo');
        $.getJSON('productlist.json', (data)=>{
            console.log(data);
            $('#all-products').append(`<h1>Nail Products</h1><div id='nail-products'></div><h1>Beauty Products</h1><div id='beauty-products'></div>`);
            let nails = data.nails;
            for(let nProd in nails){
                $('#nail-products').append(
                    `<div class='product_card' data-prod_id='${nails[nProd].prod_id}'><h3>${nails[nProd].prod_name}</h3>
                    <div class='product_image'>
                    <img src="${nails[nProd].image}" alt="${nails[nProd].prod_name}"/>
                   </div>
                    <p class='product_price'>$${nails[nProd].price}</p>
                    </div>`
                );
            }
            let beauty = data.beauty;
            for(let bProd in beauty){
                $('#beauty-products').append(
                `<div class='product_card' data-prod_id='${beauty[bProd].prod_id}'><h3>${beauty[bProd].prod_name}</h3>
               <div class='product_image'>
                <img src="${beauty[bProd].image}" alt="${beauty[bProd].prod_name}"/>
                </div>
                <p class='product_price'>$${beauty[bProd].price}</p>
                </div>`
                );
            }
            });
    }
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