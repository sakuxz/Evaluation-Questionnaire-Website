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
    // using checkWorry
    // enableOpen: false,
    checkAns: {
      angry: null,
      pride: null,
      surprise: null,
      worry: null,
    },
    situation: [
      {
        type: 'angry',
        title: '讓人失望透頂 CP 值極低的下午茶 ♥Destino 你是我的命運餐廳',
      },
      {
        type: 'worry',
        title: '踩到地雷【Pachamama】團購卷 (怎麼辦?! 還有 4 張卷沒用完)',
      },
      {
        type: 'pride',
        title: '【福鼎湯包店】有做功課有差，果然好吃 (得意) ！',
      },
      {
        type: 'surprise',
        title: '不起眼、卻超出想像好吃的餐廳!!',
      },
    ],
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
    changeOrder: function (idx) {
      var prevIdx = (idx === 0) ? this.situation.length-1 : idx-1;
      var t = this.situation[idx];
      Vue.set(this.situation, idx, this.situation[prevIdx])
      Vue.set(this.situation, prevIdx, t)
    },
    toggleOpen: function () {
      if (this.checkWorry)
        this.open = !this.open;
      else
        alert('請先填寫頁面中的問題');
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

      var situ = processSituationData(this.situation);
      for (key in situ) {
        data.ans.push({
          name: key,
          choose: situ[key],
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

function processSituationData(data) {
  var ret = {
    angry: null,
    pride: null,
    surprise: null,
    worry: null,
  };
  data.forEach(function (e, i) {
    ret[e.type] = i+1;
  });
  return ret;
}

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
