



      function main_assign()
      {
        var tes_exi = document.getElementById('option_10');
        var tes_exi2 = document.getElementById('option_33');
        if((typeof(tes_exi)!='undefined' && tes_exi !=null) || (typeof(tes_exi2)!='undefined' && tes_exi2 !=null) )
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
                  iter++;
                }
                else if(col_inner.search("Rozmiar")==-1){

                }
           i_index++;

         }
         return index;
      }

      function assign_values(ind){
         console.log("assing values");
         var index = ind;
         var size_list=0;
         var ele = document.getElementById('option_10');
         var ele2 = document.getElementById('option_33');
         if(typeof(ele2)!='undefined' && ele2 !=null)
         {
           size_list =  document.getElementById('option_33');
           console.log("option 33");
         }
         else if(typeof(ele)!='undefined' && ele !=null)
         {
           size_list= document.getElementById('option_10');
           console.log("option 10");
         }

         console.log("Size list:"+size_list);
         var len_si = size_list.length-1;
         var len_arr = index.length;
         var arr_it = 0;

         for(var z=1;z<=len_si;z++)
         {
           console.log("inside index:"+index[arr_it][1]+"z:"+arr_it);
           size_list.options[z].innerHTML += "  ("+index[arr_it][1]+")";
           arr_it++;

         }


       }

       $(document).ready(main_assign);
