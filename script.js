const app = new Vue({
    el: "#app",

    data: {
        emailList: [],
        sentinel: false,
    },

    methods: {

    },

    created() {
        for (let index = 0; index < 20; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    this.emailList.push(response.data.response);
                    if (this.emailList.length == 20) {
                        this.sentinel = true;
                    }
                });
        }
    }
})