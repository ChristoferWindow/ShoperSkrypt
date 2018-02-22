
<script>
$(document).ready(function() {
  if(document.getElementsByClassName('product_th_cus'))
  {
      console.log("Start indexing");
      function index_sizes(){
      console.log('inside index');
      var index;
      var table;
      table = document.getElementsByClassName('product_th_cus');

      console.log(table[0].rows.length+"table rows length");

      for ( var i = 0 ; i< table[0].rows.length; i++) {
        console.log("first loop:"+i);

        console.log(table[0].rows[i].innerHTML+":row  test:"+i);
           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           for (var j = 0; j < row.cells.length-1; j+=1) {
             var row = table[0].rows[j]
             var col = row.cells[j];
             var cells= row.cells.length;
             var col2 = row.cells[j+1];
             console.log(cells+":cells length :"+j);
             console.log(text+":col test");
             console.log(text2+":col 2 test");
            if(col.innerHTML.search("Rozmiar"))
             {
               console.log("Mamy Rozmiar")
             }

             //iterate through columns
             //columns would be accessed using the "col" variable assigned in the for loop
          }
      }
        return;
      }
      index_sizes();
    }
});
</script>
