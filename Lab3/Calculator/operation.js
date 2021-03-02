var vue = new Vue({
    el: '#app',
    data: {
      result: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operations: ['+','-','*','/'],
      prevOps: 0,
      decimalAdded: false,
    },
    methods: {
      input: function(char) {
        this.result = this.result.toString();
        this.result+=char;
      },
      reset: function() {
        this.result = '';
      },
      calc: function() {
        this.result = eval(this.result);
      },
       addDecimal: function() 
      {
        if (this.decimalAdded == false) {
          if (this.prevOps != 0) {
            this.result = '0.';
          } else {
            this.result += '.';
          }
           
      }
    }
    }
  })