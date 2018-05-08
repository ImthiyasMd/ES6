<html>
  <head>
    <title>Exercise 3</title>
  </head>
  <body>
    <section id="container"></section>
    <script>
      let data = [
          {title: 'apple', price: 2, qty: 30},
          {title: 'banana', price: 1, qty: 30},
          {title: 'chikoo', price: 1, qty: 30}
      ];
      title = "fruits";

      class TableGenerator{
        constructor(data, title){
          this.data = data;
          this.title = title;
        }

        render(){
          let thead = '<table> <thead> <th>title</th> <th>price</th> <th>qty</th> </thead>';
          let tbody = '<tbody>';          
          for(let item of this.data){
            tbody += `<tr> <td>${item.title}</td> <td>${item.price}</td> <td>${item.qty}</td> </tr>`;
          }
          tbody += '</tbody></table>';
          thead += tbody;
          document.getElementById('container').innerHTML = thead;
        }
      }

      let tableObj = new TableGenerator(data);
      tableObj.render();
    </script>
  </body>
</html>

