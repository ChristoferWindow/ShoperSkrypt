<script>
 if(document.getElementsByClassName('product_th_cus') !==null)
  {


      function main_assign()
      {
        var index = size_index();
        var keys =[];
        console.log("index type"+typeof(index));

        for(var k in index){console.log("Keys:"+k);}

        console.log("index:"+index);
        console.log("main values");
        assign_values(index);
      }
      //get values from selection tag and assign sizes




      //index sizes from table
      function size_index(){
        var table = document.getElementsByClassName("product_th_cus");
        var index= [[],[]];
        var iter = 0; //index of first dim of array
        for (var i = 0, row; row = table[0].rows[i]; i++) {
           //iterate through rows
           iter = i;
           if(row.cells[0].innerHTML.search("Rozmiar") !==-1)
           {
             for (var j = 0, col; col = row.cells[j]; j++) {
               console.log("second for, iter:"+ iter);
               var col_inner = row.cells[0].innerHTML;
               var col_param = row.cells[1].innerHTML;
               var col_size = col_inner.substr(col_inner.indexOf(' ')+1);
               index[iter][0] = col_size;
               index[iter][1] = col_param;
               console.log("Index:"+iter+"size:"+index[iter][0]+"val:"+index[iter][1]);
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
             }
           }
           //rows would be accessed using the "row" variable assigned in the for loop

         }
         return index;
      }
      function index_sizes(){
        var iter=0;
        var it=0;
        var keys =[];
        var index = [[],[]];
        var table;
        table = document.getElementsByClassName('product_th_cus');
        console.log('inside index');
        console.log(table[0].rows.length+"table rows length");

        for (var i = 0,len = table[0].rows.length, row = table[0].rows[i]; i < len; i++) {
             iter = i;
             console.log("len is:"+len);
          console.log("iterator 1 for:"+iter);
           console.log("row 1 for:"+row.innerHTML);

           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           if(row.cells[0].innerHTML.search("Rozmiar") !=-1)
           {
             console.log("Row cells:"+row.cells[0].innerHTML);
           for ( var j = 0; j<2; j++) {
             var col_inner = row.cells[0].innerHTML;
             var col_param = row.cells[1].innerHTML;
             var col_size = col_inner.substr(col_inner.indexOf(' ')+1);
             console.log("it 2 for :"+iter);




              index[iter][0] = col_size;
              index[iter][1] = col_param;
              console.log("iterator:"+j);
               console.log("index x:"+index[iter][0]+"y:"+index[iter][1]);
               console.log("Rozmiar jest:"+col_inner);
               console.log("Rozmiar parametr"+col_param);
             }

             //iterate through columns
             //columns would be accessed using the "col" variable assigned in the for loop
           }
        }
        console.log("i outside:"+i);

        for(var k in index){console.log("Keys:"+k);}
        return index;
      }
      function assign_values(ind){
         console.log("assing values");
         var index = ind;
         var size_list =  document.getElementById('option_10');
         console.log("index inh:"+index[2][1]);
         for(var z=1;z<size_list.length;z++)
         {
           console.log("inside index:"+index[2][1]+"z:"+z);
           size_list.options[z].innerHTML += index[z][1];

         }


       }

       main_assign();
    }



</script>
