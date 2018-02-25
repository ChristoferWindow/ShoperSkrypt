



      function main_assign()
      {
        var ele = document.getElementById('option_10');
        if(typeof(ele)!='undefined' && ele !=null)
        {
          var index = size_index();
          var keys =[];
          console.log("index type"+typeof(index));

          for(var k in index){console.log("Keys:"+k);}

          console.log("index:"+index);
          console.log("main values");
          assign_values(index);
        }

      }
      //get values from selection tag and assign sizes




      //index sizes from table
      function size_index(){
        let table = document.getElementsByClassName("product_table_cus");
        var index= [];
        var i_index = 0;
        var iter = 0; //index of first dim of array
        var len = table[0].rows.length;
        console.log("Len:"+len);
        while(i_index<len) {
           //iterate trough rows




               console.log("second for, iter:"+ i_index);
               var col_inner = table[0].rows[i_index].cells[0].innerHTML; //size param
               var col_param = table[0].rows[i_index].cells[1].innerHTML;//size value
               var col_size = col_inner.substr(col_inner.indexOf(' ')+1);
                console.log("Rozmiar:"+ col_size+"  Wartość:"+col_param);
        //       index[1][0].push("col_size");
          //     index[i_index][1].push(col_param);
                if(col_inner.search("Rozmiar")!==-1)
                {
                  console.log("Inner wtf:"+col_inner+"Ite:"+iter);
                  index[iter] = index[iter] || [];
                  index[iter].push(col_inner,col_param);
                  console.log("Index+:"+index[iter]);
                  console.log("Ind:"+col_inner+"Val:"+col_param);
                }
                else if(col_inner.search("Rozmiar")==-1){

                }
                iter++;



          //     col_param=0;
        //       col_size=0;
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop


           //rows would be accessed using the "row" variable assigned in the for loop
           i_index++;

         }
         return index;
      }

      function assign_values(ind){
         console.log("assing values");
         var index = ind;
         var size_list =  document.getElementById('option_10');
         var len_si = size_list.length-1;
         console.log("index inh:"+index[2][1]);
         for(var z=1;z<len_si;z++)
         {
           console.log("inside index:"+index[z][1]+"z:"+z);
           size_list.options[z].innerHTML += index[z][1];

         }


       }

       $(document).ready(main_assign);
