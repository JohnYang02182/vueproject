const v_app = Vue.createApp({
    data() {
        return {
            myName: "John",
            myAge: 29,
            myLink: "https://pbs.twimg.com/media/E52EvABVUAQxdZ-?format=jpg&name=medium"
        };
    },
    methods: {
        addAge() {
           var myAgeF = this.myAge + 5;
           return myAgeF;
        },
        randomNum(){
            var randomN = Math.random();
            return Math.floor(randomN * 2);
        }
    }
});
v_app.mount("#assignment");