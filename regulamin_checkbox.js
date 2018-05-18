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
var required_check = $(" #kontakt-sc .required_box input[type='checkbox']");
var submmit_butt = $("#kontakt-sc input[type='submit']");
if(
