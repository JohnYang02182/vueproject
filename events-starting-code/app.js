const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    addNum(num){
      this.counter+=num;
    },
    reduceNum(num){
      this.counter-=num;
    },
    resetName(event,lastname){
      this.name = event.target.value + lastname;
    }
  }
});

app.mount('#events');
