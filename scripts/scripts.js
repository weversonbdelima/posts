//definição
var produtosComponent = Vue.extend({
    template: `
        <div id="produto"class="shadow p-3 mb-5 bg-white rounded">
            <div id="card" class="card" style="width: 14rem;">
            <img class="card-img-top" src="imagens/img01.jpg" alt="Card image cap" style="height: 16rem">
                <div id="produto-corpo" class="card-body">
                    <h5 class="card-title">
                        <span>{{nome}}</span>
                    </h5>
                    <span class="card-text">Preço: {{preco}}</span>
                    <label>Quantidade</label>
                    <input type="number" @keyup.enter="getSubTotal" v-model="quantidade" />
                    <span class="card-text" ref="subTotal">Subtotal: {{subTotal}}</span>
                </div>
            </div>
        </div>
    `,
    props: {
        nome: String,
        image: String,
        preco: Number,
    },
    data: function() {
        return{
            quantidade: 0,
            subTotal: 0
        }
    },
    methods:{
        getSubTotal: function(){
            this.subTotal = this.preco * this.quantidade;
            this.$emit('child-subtotal', this.subTotal);
        }
    }
})  

//Registro
Vue.component('produto', produtosComponent);

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      produtos: [
          {id: 0, nome: 'A', image: 'imagens/img01.jpg', preco: 10.00, quantidade: 0, subtotal: 0},
          {id: 1, nome: 'B', image: '', preco: 20.00, quantidade: 0, subtotal: 0},
          {id: 2, nome: 'C', image: '', preco: 30.00, quantidade: 0, subtotal: 0},
          {id: 3, nome: 'D', image: '', preco: 40.00, quantidade: 0, subtotal: 0},  
          {id: 4, nome: 'E', image: '', preco: 50.00, quantidade: 0, subtotal: 0},  
          {id: 5, nome: 'F', image: '', preco: 60.00, quantidade: 0, subtotal: 0},  
          {id: 6, nome: 'G', image: '', preco: 70.00, quantidade: 0, subtotal: 0},  
      ],
      total: 0
    },
    methods:{
        getTotal: function(e){
            this.total += e;
        },
        
    }
  })