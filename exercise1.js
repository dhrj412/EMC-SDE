//Transforming icons 

var x = document.querySelectorAll('.resource-tiles .col-md-3');
for (let i = 0; i < x.length; i++) {
    x[i].classList.add('col-md-6');
    x[i].classList.remove('col-md-3');
}

//serach box and icons vertical view in container
var tiles = document.querySelector('.resource-tiles').innerHTML;
var prod = document.querySelector('.product-selector .divHomeEntrySelection').innerHTML;
var cont = document.querySelector('.product-selector .row');
cont.innerHTML = '<div class="col-lg-6 col-md-6 resource-tiles hidden-xs hidden-sm" id="dynamic_icons" style="margin-top:0px;">'+tiles+'</div> <div class="col-lg-6 col-md-6 col-xs-12 col-xs-offset-0 divHomeEntrySelection" id="dynamic_search">'+prod+'</div>';
document.querySelector('#divResourceLinks .resource-tiles').classList.add('hidden-lg');