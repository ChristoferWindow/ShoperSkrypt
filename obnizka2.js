$(document).ready(function() {
    function promo_price() {
			if(document.getElementById('przecenajs'))
			{
        var cena = 0;
        var procent = jQuery('#przecenajs').attr("data-procent");
        var stara_Cena=0;
        cena = parseInt(cena);
        procent = procent/100;
        console.log(procent);
        console.log(cena);
        cena = jQuery('.main-price').html();
        console.log(cena);
        cena = cena.substring(0, 5);
        console.log(cena);
        cena= parseInt(cena.split(',').join('.'));
        console.log(cena);

        if (!isNaN(procent) && procent!=0 ) {
            stara_Cena = parseInt(cena * procent+ cena);
                console.log('stara cena procent'+stara_Cena);
             $('.staraCena').remove();
           jQuery('.dostepny3d').append('<span class="staraCena"><del>'+stara_Cena+',00</del></span>');
        }
        else if (isNaN(procent) || procent==0 ){
                 $('.staraCena').html(" ");
        }
    	}
		}
    promo_price();
    $('.form-basket').on("click",promo_price);
});
