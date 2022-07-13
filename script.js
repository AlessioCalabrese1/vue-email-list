const app = new Vue({
    el: "#app",

    data: {
        emailList: [],
        sentinel: false,
    },

    methods:{

    },

    created(){
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) =>{
            this.emailList.push(response.data.response);
            });
        }
        setTimeout(() =>{this.sentinel = true;}, 1000) ;
        console.log(this.emailList);
    }
})