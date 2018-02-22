
<script>
$(document).ready(function() {
      console.log("Start indexing");
      function index_sizes(){
      console.log('inside index');
      var index;
      var table;
      table = document.getElementsByClassName('product_th_cus');

      console.log(table[0].rows[1].innerHTML+"table test rows");

      for (i = 0 , row= table[0].rows[i]; i< table[0].rows.length; i++) {
        console.log(row.innerHTML+":row  test");
           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           for (var j = 0, col= row.cells[j]; j < row.cells.length; j++) {
             let text = col.innerHTML;
             console.log("text  test :"+text);
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
});
</script>
