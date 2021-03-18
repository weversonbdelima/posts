var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      produtos: [
          {id: 0, nome: 'A', preco: 10.00, quantidade: 0, subtotal: 0},
          {id: 1, nome: 'B', preco: 20.00, quantidade: 0, subtotal: 0},
          {id: 2, nome: 'C', preco: 30.00, quantidade: 0, subtotal: 0},
          {id: 3, nome: 'D', preco: 30.00, quantidade: 0, subtotal: 0},  
          {id: 4, nome: 'E', preco: 30.00, quantidade: 0, subtotal: 0},  
          {id: 5, nome: 'F', preco: 30.00, quantidade: 0, subtotal: 0},  
          {id: 6, nome: 'G', preco: 30.00, quantidade: 0, subtotal: 0},  
      ],
      
    },
    methods:{
        subtotal: function(produto){
            return produto.preco * produto.quantidade;
        },
        total: function(produtos){
            var total = 0;
            for(var i = 0; i < produtos.length; i++){
                total += produtos[i].preco * produtos[i].quantidade;
            }
            return total;
        },
        
    }
  })