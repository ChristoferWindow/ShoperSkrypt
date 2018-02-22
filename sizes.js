
<script>
$(document).ready(function() {
      console.log("Start indexing");
      function index_sizes(){
      console.log('inside index');
      var index;
      var table;
      table = document.getElementsByClassName('product_th_cus');

      console.log(table.rows[1].innerHTML+"table test rows");

      for (i = 0;  i< table[0].length(); row= table[0].rows[i], i++) {
        console.log(row[0]+"row  test");
           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           for (var j = 0, col; col = row.cells[j]; j++) {
             let text = col;
             console.log("text  test"+text);
          /*   if(col.indexOf("Rozmiar"))
             {
               index[0]= col.
             }
            */
             //iterate through columns
             //columns would be accessed using the "col" variable assigned in the for loop
           }
         }
        return;
      }
      index_sizes();
});
</script>
