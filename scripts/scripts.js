//definição
var postComponent = Vue.extend({
    template: `
        <div id="post"class="shadow p-3 mb-5 bg-white rounded">
            <div id="card" class="" style="width: 14rem;">
                <h3>{{title}}</h3>
                </br>
                <span>{{descrisao}}</span>
                <div id="data">
                    <span>{{data}}</span>
                </div>
            </div>
        </div>
    `,
    props: {
        title: String,
        descrisao: String,
        data: Date,
    },
})  

//Registro
Vue.component('post', postComponent);

//Importando dados


var app = new Vue({
    el: '#app',
    data: {
        posts: [
            {
            "id": 0,
            "title": "Metro City",
            "descrisao": "Super tower",
            "data": new Date()
            },
            {
                "id": 0,
                "title": "Metro City",
                "descrisao": "Super tower",
                "data": new Date()
            },
            {
                "id": 0,
                "title": "Metro City",
                "descrisao": "Super tower",
                "data": new Date()
                
            }
        ]
    },
    // created: fetch('services/posts.json').then(function(response){
    //             console.log(response)
    //             this.posts = response.json();
    //         }
    // )
    
  })