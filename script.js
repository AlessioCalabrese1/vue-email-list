const app = new Vue({
    el: "#app",

    data: {
        emailList: [],
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

        console.log(this.emailList);
    }
})