
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
function checkStock(){
    if( $(stock).val() == 0 ){
        return false;
    }
    else
        return true;
};

function updateStatus(message){
    if (message == "oos") {
        $(status).show();
        $(status).html("Error: This product is out of stock.");
        $(status).addClass("error");
    }
}

function setOutOfStock(){
    $(stock).val("0");
    $(add2CartBtn).hide();
    $(outOfStockBtn).show();
    updateStatus("oos");
};

function resetPage(){
    $(stock).val("5");
    $(add2CartBtn).show();
    $(outOfStockBtn).hide();
    $(status).hide();
};

// Event Listeners
$(navIcon).on('click', function(){
    $(this).toggleClass('open');
    $(navMenu).slideToggle();
});

$(cartIcon).on('click', function(){
    if( $(navIcon).hasClass('open'))
        $(navMenu).trigger('click');
        
    $(cart).slideToggle();
});

$(reset).on('click', function() {
   resetPage(); 
});

$(setOOS).on('click', function(){
    setOutOfStock();
});
