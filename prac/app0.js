new Vue({
  el: '#vue-app',
  data: {
    name: 'wook',
    job: 'ddd',
    website: 'http://www.thenetninja.com',
    websiteTag: '<a href="http://www.thenetninja.co.uk">',
  },
  methods: {
    greet: function (time) {

      return 'Good' + time + '' + this.name;
    },
  },
});

new Vue({
  el: '#vue-app2',
  data: {
    age: 30,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('You clicked link');
    },
  },
});

new Vue({
  el: '#vue-app3',
  data: {
    name:'',
    age:'',
  },
  methods: {
    logName: function () {
      console.log('you entered your name');
    },
    logAge: function () {
      console.log('you entered your age');
    },
  },
});


new Vue({
  el: '#vue-app4',
  data: {
    age: 42,
    a:0,
    b:0,
  },
  methods: {

  },
  Computed: {
      addToA:function(){
        return this.a + this.age;
      },
      addToB:function(){
        return this.b + this.age;
      }
  },
});


new Vue({
  el: '#vue-app5',
  data: {
    available:true,
    nearby: false,
  },
  methods: {
  },
  Computed: {
    compClasses:function(){
      return {
        available:this.available,
        nearby:this.nearby
      };
    }
  },
});

new Vue({
  el: '#vue-app6',
  data: {
    error: false,
    success:false,
  },
  methods: {

  },
  Computed: {

  }
});

new Vue({
  el: '#vue-app7',
  data: {
    characters:['Mario','Udd','Youshi','test'],
    ninjas : [
      {name:'Ryu',age:'24'},
      {name:'Yoshi',age:'35'},
      {name:'koy',age:'55'}
    ]
  },
  methods: {

  },
  Computed: {

  }
});
