//Component list-post
Vue.component('count-post',{
    props:{
        posts: []
    },
    template:`
    <div id="count-post" >
        <h5>Posts: {{this.posts.length}}</h5>
    </div>
    `,
    methods:{
        createPost: function(){
            //Insere data de criação do post
            this.post.data = new Date();
            this.$emit('event-create-post', this.post);
        console.log(this.post)
        },
        
    }
    
})



//definição
Vue.component('post',{
    template: `
        <div id="post" class="shadow p-3 mb-5 bg-white rounded">
            <div id="card" class="" style="width: 14rem;">
                <h3>{{titulo}}</h3>
                </br>
                <span>{{descrisao}}</span>
                <div id="data">
                    {{data}}
                </div>
                <button class="btn btn-danger" v-on:click="deletarPost()">Delete</button>
            </div>
        </div>
    `,
    props: {
        id: Number,
        titulo: String,
        descrisao: String,
        data: Date,
    },
    methods:{
        deletarPost: function(){
            this.$emit('event-deletar-post', this.id)
            console.log(this.id);
        }
    }
})  

//Component list-post
Vue.component('list-post',{
    props:{
        posts: Array
    },
    template:`
    <div id="list-post">
        <post @event-deletar-post="deletarPost" v-for="post in posts"
            v-bind:id="post.id"
            v-bind:titulo="post.titulo"
            v-bind:descrisao="post.descrisao"
            v-bind:data="post.data"
        ></post>
    </div>
    `,
    methods:{
        deletarPost: function(e){
            console.log('pai' + e)
            this.$emit('event-deletar-post-avo', e);
        }
    }
    
})

//Component list-post
Vue.component('create-post',{
    data: function(){
        return {
            post: {},
        }
    },
    template:`
    <div id="create-post" >
        <h1>Criar posts</h1>
        <label>Título</label>
        <input placeholder="Título" v-model="post.titulo"/>
        <label>Descrição</label>
        <textarea placeholder="Descrição" v-model="post.descrisao" @keyup.enter="createPost"/>
        
    </div>
    `,
    methods:{
        createPost: function(){
            //Insere data de criação do post
            this.post.data = new Date();
            this.$emit('event-create-post', this.post);
        console.log(this.post)
        },
        
    }
    
})

//Component count-post
Vue.component('count-post ',{
    props:{
        posts: Array
    },
    template:`
    <div id="count-post">
        fewfsdfd
    </div>
    `,
})






var app = new Vue({
    el: '#app',
    data: {
        posts: [
            {
            "id": 0,
            "titulo": "Metro City",
            "descrisao": "Super tower",
            "data": new Date()
            },
            {
                "id": 1,
                "titulo": "Metro City",
                "descrisao": "Super tower",
                "data": new Date()
            },
            {
                "id": 2,
                "titulo": "Metro City",
                "descrisao": "Super tower",
                "data": new Date()
                
            }
        ]
    },
    methods:{
        adicionarPost: function(e){
            this.posts.push(e);       
        },
        deletarPost: function(e){
            for(var i=0; i < this.posts.length; i++){
                if(e == this.posts[i].id){
                    this.posts.splice(i,1);
                }
            }
        }
    }
    // created: fetch('services/posts.json').then(function(response){
    //             console.log(response)
    //             this.posts = response.json();
    //         }
    // )
    
  })