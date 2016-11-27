var app = new Vue({
  el: '#chat-wrapper',
  data: {
    chats: [
      { text: 'Learn JavaScript', isYour: false, time: new Date().getTime() },
      { text: 'Learn Vue', isYour: true, time: new Date().getTime() },
      { text: 'Build something awesome', isYour: true, time: new Date().getTime() }
    ],
    inputText: ''
  },
  methods: {
    addChat: function () {
      if (!this.inputText) return;
      this.chats.push({
        isYour: true,
        text: this.inputText,
        time: new Date().getTime(),
      })
      this.handleChat(this.inputText);
      this.inputText = '';
      $('html,body').animate({
  			scrollTop: $('body').height()
  		}, 500);
    },
    handleChat: function (text) {
      console.log(text);
      this.addResponse(text);
    },
    addResponse: function (text) {
      this.chats.push({
        isYour: false,
        text: text,
        time: new Date().getTime(),
      });
    }
  }
})
