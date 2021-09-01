const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value >= 50) {
        const t = this;
        setTimeout(function() {
          t.counter = 0;
        }, 1000);
      }
    }
  },
  computed: {
    fullNamec() {
      console.log("I have been touched!");
      if(this.name === "") {
        return "";
      }
      return this.name + " " + "Smith";
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
