$(document).ready(function() {
  if(document.getElementById('przecenajs'))
  {
    function promo_price() {
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
           var stara = stara_Cena+cena;

            $('.staraCena').remove();
            $('.promojstext').remove();

           jQuery('.promo_container').append('<div class="promojstext" style="font-size: 15px;color: #d66260; margin-bottom: 5px;">Promocja -'+cena+',00 zł</div> ');
           jQuery('.promojswynik').append('<span class="staraCena"><del>'+stara+' zł</del></span>');
        }
        else if (!isNaN(procent)){
          stara_Cena.toFixed(2);
        	stara_Cena = (stara_Cena/(1-procent));

          var twoja = Math.ceil(stara_Cena);
          console.log(twoja+'liczba');

            $('.staraCena').remove();
            $('.promojstext').remove();
           jQuery('.promo_container').append('<div class="promojstext" style="font-size: 15px;color: #d66260; margin-bottom: 5px;">Promocja -'+procent*100+'%</div> ');
          jQuery('.promojswynik').append('<span class="staraCena"><del>'+stara_Cena+',00 zł</del></span>');
        }
        	cena =0;
          stara_Cena=0;
          return false;
    	}


      setInterval(promo_price,300);
  function addZeroes( num ) {
   // Cast as number
   var num = Number(num);
   // If not a number, return 0
   if (isNaN) {
        return 0;
   }
   // If there is no decimal, or the decimal is less than 2 digits, toFixed
   if (String(num).split(".").length < 2 || String(num).split(".")[1].length<=2 ){
       num = num.toFixed(2);
   }
   // Return the number
   return num;
}
}

});
$(document).ajaxComplete(function(){
  promo_price();
});
