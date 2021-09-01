const app = Vue.createApp({
    data() {
        return {
            alertText: "Hey",
            getTextContent: "",
            getTextEnterContent: ""
        };
    },
    methods: {
        showAlert() {
            alert(this.alertText);
        },
        getText(event) {
            this.getTextContent = event.currentTarget.value;
        },
        getTextEnter(event) {
            this.getTextEnterContent = event.target.value;
        }
    }
});

app.mount("#assignment");