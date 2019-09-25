
// Declare Variables
const navIcon = "#navIcon",
    navMenu = ".js-menu",
    cartIcon = ".cartIcon",
    cart = ".cart",
    stock = "#stock",
    add2CartBtn = "#adc",
    outOfStockBtn = "#oos",
    reset = "#reset",
    setOOS = "#setOOS",
    status = "#status-message";

// Functions
function toggleMenu(menu){
    switch (menu) {
        case 'cart':
            $(navMenu).slideUp();
            if( $(navIcon).hasClass("open") )
                $(navIcon).removeClass("open");
            $(cart).slideToggle();
            break;
        case 'nav':
            $(cart).slideUp();
            $(navMenu).slideToggle();
            break;
        default:
            break;
    }
}

function updateStatus(message){
    if (message) {
        $(status).slideDown();
        $(status).html("This product is out of stock.");
        $(status).addClass("error");
        if( $(status).hasClass("success") )
            $(status).removeClass("success");
    }
    else{
        $(status).slideDown();
        $(status).html("Item added to cart.")
        $(status).addClass("success");
        if( $(status).hasClass("error") )
            $(status).removeClass("error");
    }
};

function setOutOfStock(){
    $(stock).val("0");
    $(add2CartBtn).hide();
    $(outOfStockBtn).show();
    updateStatus(true);
};

function resetPage(){
    $(stock).val("5");
    $(add2CartBtn).show();
    $(outOfStockBtn).hide();
    $(status).slideUp();
    $(status).classList = "";
};



// Event Listeners
$(navIcon).on('click', function(){
    $(this).toggleClass('open');
    toggleMenu("nav");
});

$(cartIcon).on('click', function(){
    toggleMenu("cart");
});

$(add2CartBtn).on('click', function() {
   if ( $(stock).val() != "0" ) {
       updateStatus(false);
   }
});

$(reset).on('click', function() {
   resetPage(); 
});

$(setOOS).on('click', function(){
    setOutOfStock();
});
