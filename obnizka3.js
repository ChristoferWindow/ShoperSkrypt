$(document).ready(function() {
    function promo_price() {
	if(document.getElementById('przecenajs'))
	{

	var cena = 0;
	var stara_Cena=0;
	var procent =0;
    cena = jQuery('#przecenajs').attr("data-cena");
    procent = jQuery('#przecenajs').attr("data-procent");
    cena = parseInt(cena);
    procent = procent/100;
    stara_Cena = jQuery('.main-price').html();
    stara_Cena = stara_Cena.substring(0, 5);
    stara_Cena = parseFloat(stara_Cena.split(',').join('.'));
    if (!isNaN(cena) ) {
       cena = parseInt(cena);
       stara_Cena = (stara_Cena+cena);
       var stara = stara_Cena.toFixed(2);

        $('.staraCena').remove();
        $('.promojstext').remove();

       jQuery('.promo_container').append('<div class="promojstext" style="font-size: 15px;color: #d66260; margin-bottom: 5px;">Promocja -'+cena+',00 zł</div> ');
       jQuery('.promojswynik').append('<span class="staraCena"><del>'+stara+' zł</del></span>');
    }
    else if (!isNaN(procent)){
      stara_Cena.toFixed(2);
      var stara_procent = (stara_Cena/(1-procent));
       var stara_of = stara_procent.toFixed(2);



        $('.staraCena').remove();
        $('.promojstext').remove();
       jQuery('.promo_container').append('<div class="promojstext" style="font-size: 15px;color: #d66260; margin-bottom: 5px;">Promocja -'+procent*100+'%</div> ');
      jQuery('.promojswynik').append('<span class="staraCena"><del>'+stara_of+'</del></span>');
    }
    	cena =0;
        stara_Cena=0;
        return false;
	}
	}
    setInterval(promo_price,300);
});
$(document).ajaxComplete(function(){
  promo_price();
});
