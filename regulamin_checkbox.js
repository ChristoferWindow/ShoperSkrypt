var isAllChecked = function( className ){
  'use strict';

  let elems = $( className );
  let isAllchecked = false;
  let numChecked = 0;

  $.each( elems, function(idx, item){
      if( item.checked )
        numChecked += 1;
  });

  if( numChecked === elems.length )
    isAllchecked = true;

  return isAllchecked;
}
var required_check = $(" #kontakt-sc  input[type='checkbox']");
var submmit_butt = $("#kontakt-sc input[type='submit']");
$("#kontakt-sc input[type='submit']").prop("disabled",true);

$(" #kontakt-sc  input[type='checkbox']").click(function(event){
  if(isAllChecked(required_check))
  {
      $("#kontakt-sc input[type='submit']").prop("disabled", false); // Element(s) are now enabled.
  }
  else{
    $(".f-grid").append("Coś mi się tu wyświetla");
  }

});
