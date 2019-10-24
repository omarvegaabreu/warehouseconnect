$(document).ready(function () {
    
    //var todayDate = new Date()
  
    getProducts();
  
    $(document).on('click', 'button.delete', function (r) {
        deleteProduct($(this).attr('data-value'))
      })

    function getProducts () {
      $.get('/products', function (data) {
        for (var i = 0; i < data.length; i++) {
          var row = createNewRow(data[i], i)
          $('#productBody').append(row)
        }
      })
    }
  
    function createNewRow (product, index) {
      var row = '<tr>' +
        '<th scope="row">' + (index + 1) + '</th>' +
        '<td>' + product.ProductName + '</td>' +
        '<td>' + product.ProductDetails + '</td>' +
        '<td>' + product.Brand + '</td>' +
        '<td>' + product.Units + '</td>' +
       
        '<td>' +
          '<button class="delete product-options animated infinite pulse" data-value="' + product.ProductId + '">edit</button>' + 
        '</td>' +
        '<td>' +
          '<button class="edit product-options animated infinite pulse" data-value="' + product.ProductId + '">delete</button>' +
        '</td>' +
      '</tr>'
  
      return row
    }
  
    function deleteProduct (id) {
      $.ajax({
        method: 'DELETE',
        url: '/products/' + id
      })
        .then(function () {
          $('#productBody').empty()
          getProducts()
        })
    }
  })
  