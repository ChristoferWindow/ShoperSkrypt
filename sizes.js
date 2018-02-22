
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

      for (var i = 0, row; row = table[0].rows[i]; i++) {
        console.log("iterator:"+i);
         console.log("row:"+row.innerHTML);
         //iterate through rows
         //rows would be accessed using the "row" variable assigned in the for loop
         for (var j = 0, col; col = row.cells[j]; j++) {
           console.log("iterator:"+j);
           console.log("col:"+col.innerHTML);
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
