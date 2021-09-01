const app = Vue.createApp({
    data() {
        return {
            turnClassName: "",
            changeClass: "",
            judegeClass: true,
            addColor: "",
        }
    },
    watch: {
        
    },
    computed: {
        getClassName() {
            // console.log(this.turnClassName);
            // if (this.turnClassName === 'user1' || this.turnClassName === 'user2') {
            //     this.changeClass = this.changeClass + " " + this.turnClassName;
            //     return this.changeClass;
            // }
            // else {
            //     return "";
            // }
            return {
                user1: this.turnClassName === "user1",
                user2: this.turnClassName === "user2",
                visible: this.judegeClass,
                hidden: !this.judegeClass,
            }
        },
    },
    methods: {
        // toggleClass() {
        //     if (this.judegeClass === true) {
        //         this.changeClass = "hidden";
        //         this.judegeClass = !this.judegeClass;
        //     }
        //     else if (this.judegeClass === false) {
        //         this.changeClass = "visible";
        //         this.judegeClass = !this.judegeClass;
        //     }
        //     this.changeClass = this.changeClass + " " + this.turnClassName;
        // }
        toggleClass() {
            this.judegeClass = !this.judegeClass;
        }
    }
});

app.mount("#assignment");