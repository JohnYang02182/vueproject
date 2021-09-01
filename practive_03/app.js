const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            messege: ""
        }
    },
    watch: {
        counter() {
            if (this.counter < 37) {
                this.messege = "not there yet";
            }
            else if(this.counter > 37) {
                this.messege = "too much!";
            }
            else {
                this.messege = "result";
            }
        },
        messege() {
            const t = this;
            setTimeout(() => {
                t.messege = "";
            }, 5000);
        }
    },
    methods: {
        addFive(num) {
            this.counter += num; 
        },
        addOne(num) {
            this.counter += num;
        }
    }
});
app.mount("#assignment");