const app = Vue.createApp({
    data() {
        return {
            borderChangeO: false,
            borderChangeT: false,
            borderChangeTh: false
        }
    },
    computed: {
        borderSave() {
            // if(jud === "A") {
            //     console.log("lllll");
            //     return {
            //         red: this.borderChangeO
            //     };
            // }
            // else if(jud === "C") {
            //     return {
            //         red: this.borderChangeTh
            //     };
            // }
            // console.log("cccc");
            return {
                red: this.borderChangeO
            };
        }
    },
    methods: {
        borderChange(boxNum) {
            if(boxNum === "first") {
                this.borderChangeO = !this.borderChangeO;
                console.log("A");
            }
            else if(boxNum === "two") {
                this.borderChangeT = !this.borderChangeT;
                console.log("B");
            }
            else if(boxNum === "three") {
                this.borderChangeTh = !this.borderChangeTh;
                console.log("C");
            }
        }
    }
});

app.mount("#styling");