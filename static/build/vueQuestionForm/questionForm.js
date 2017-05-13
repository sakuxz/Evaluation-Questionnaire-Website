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
});

var app = new Vue({
  el: '#app',
  data: {
    open: false,
    enableOpen: false,
    p0Data: p0Data,
    p1Data: p1Data,
    p2Data: p2Data,
    p3Data: p3Data,
    position: 0,
    isSend: false,
  },
  computed: {
  },
  methods: {
    toggleOpen: function () {
      if (this.enableOpen)
        this.open = !this.open;
      else
        alert('請先與客服聯繫喔~');
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
      data.ans = [].concat(p0Data, p1Data, p2Data, p3Data);
      // for (key in this.situation) {
      //   data.ans.push({
      //     name: key,
      //     choose: this.situation[key],
      //     title: key+" 情境的評價"
      //   });
      // }
      data.ans.push({
        name: "time",
        choose: moment().diff(parseInt(localStorage.startTime))
      });
      this.isSend = true;
      uploadAns(data, function() {
        localStorage.removeItem("userData");
        localStorage.removeItem("startTime");
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
  },
  mounted: function () {
    $('#start-question').click(function () {
      this.toggleOpen();
    }.bind(this));
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
