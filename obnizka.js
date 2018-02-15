var cena=0;
var procent=0;
cena = document.querySelector('.price.none').innerHTML;
console.log(cena);
procent = document.getElementById('przecenajs').getAttribute('data-procent');
console.log("Cena"+cena);
console.log("procent"+cena);
cena = parseInt(cena);
procent = procent/100;
console.log(procent);
console.log(cena);
var old_price = document.getElementsByClassName('form-basket').getElementsByClassName("main-price").innerHTML;
console.log(stara_Cena);
stara_Cena = stara_Cena.substring(0, 5);
console.log(stara_Cena);
stara_Cena = parseInt(stara_Cena.split(',').join('.'));
if(!isNaN(cena))
{
	cena = parseInt(cena);
	stara_cena = parseInt(stara_Cena+cena);
	document.getElementsByClassName('form-basket').getElementsByClassName('staraCena').innerHTML=" ";
	document.getElementsByClassName('form-basket').getElementsByClassName('dostepny3d').innerHTML='<span class="staraCena"><del>'+stara_Cena+',00</del></span>';
}
else if(!isNaN(procent))
{
	stara_Cena = parseInt(stara_Cena*procent+stara_Cena);
	document.getElementsByClassName('form-basket').getElementsByClassName('staraCena').innerHTML=" ";
	document.getElementsByClassName('form-basket').getElementsByClassName('dostepny3d').innerHTML='<span class="staraCena"><del>'+stara_Cena+',00</del></span>';
}
