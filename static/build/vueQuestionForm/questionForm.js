if (localStorage.userData === undefined || localStorage.userData === "" ) {
  open("/","_self");
}

Vue.component('question-form', {
  template: '#question-form',
  props: ['title', 'formInfo', 'prevPage', 'nextPage', 'first', 'last', 'hcolor'],
  methods: {
    formValidate: function () {
      if ($(this.$el).serializeArray().length == this.formInfo.length) return true;
      else return false;
    },
    shouldGoNext: function () {
      if (this.formValidate()) this.nextPage();
      else {
        alert('尚有欄位未填寫');
      }
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
    open: false,
    enableOpen: false,
    checkAns: {
      angry: null,
      pride: null,
      surprise: null,
      worry: null,
    },
    situation: {
      angry: null,
      pride: null,
      surprise: null,
      worry: null,
    },
    angryData: angryData,
    worryData: worryData,
    prideData: prideData,
    surpriseData: surpriseData,
    position: 0,
    isSend: false,
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
  methods: {
    toggleOpen: function () {
      if (this.enableOpen)
        this.open = !this.open;
      else
        alert('請先填寫頁面中的問題');
    },
    validateSituation: function () {
      this.enableOpen = true;
      for (key in this.situation){
        if (this.situation[key] === null) {
          this.enableOpen = false;
          return;
        }
      }
    },
    nextPage: function () {
      if (this.position < 3) {
        this.position++;
        $('.question-form-wrapper').animate({
    			scrollTop: 0
    		}, 600);
      } else {
        this.submitAns();
      }
    },
    prevPage: function () {
      if (this.position !== 0) {
        this.position--;
        $('.question-form-wrapper').animate({
    			scrollTop: 0
    		}, 600);
      }
    },
    submitAns: function () {
      if(this.isSend) return;
      var data = JSON.parse(localStorage.userData);
      data.situation = 'all_in_one'
      data.ans = [].concat(angryData, worryData, prideData, surpriseData);
      for (key in this.situation) {
        data.ans.push({
          name: key,
          choose: this.situation[key],
          title: key+" 情境的評價"
        });
      }
      this.isSend = true;
      uploadAns(data, function() {
        localStorage.removeItem("userData");
        swal({
            title: "Good job!",
            text: "實驗到此結束，謝謝您的協助",
            type: "success"
        }, function() {
            open("/","_self");
        });
      }, function() {
        alert("網路錯誤，請重試");
      });
    }
  }
});

function uploadAns(data, success, fail){
  $.ajax({
    url: '/ans',
    type: 'POST',
    data: {answer: JSON.stringify(data)}
  })
  .done(function(msg) {
    success(msg)
  })
  .fail(function(e) {
    fail(e);
  });
}
