var app = new Vue({
  el: '#app',
  data: {
    open: false,
    checkAns: {
      angry: null,
      pride: null,
      surprise: null,
      worry: null,
    }
  },
  computed: {
    checkAngry: function () {
      if(this.checkAns.angry != 900 && this.checkAns.angry != null) {
        setTimeout(function () {
          alert("答案錯誤，請重看網頁內容在做填答");
        }, 0);
      }
      return (this.checkAns.angry == 900)
    },
    checkPride: function () {
      if(this.checkAns.pride != "爸爸" && this.checkAns.pride != null) {
        setTimeout(function () {
          alert("答案錯誤，請重看網頁內容在做填答");
        }, 0);
      }
      return (this.checkAns.pride == "爸爸")
    },
    checkSurprise: function () {
      if(this.checkAns.surprise != 50 && this.checkAns.surprise != null) {
        setTimeout(function () {
          alert("答案錯誤，請重看網頁內容在做填答");
        }, 0);
      }
      return (this.checkAns.surprise == 50)
    },
    checkWorry: function () {
      if(this.checkAns.worry != 4 && this.checkAns.worry != null) {
        setTimeout(function () {
          alert("答案錯誤，請重看網頁內容在做填答");
        }, 0);
      }
      return (this.checkAns.worry == 4)
    },
  },
  created: function () {
  }
})
