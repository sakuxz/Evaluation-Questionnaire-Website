require('index.scss');

const React = require('react');
const ReactDOM = require('react-dom');

var FloatingButton = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      dasda:"jghjhgjh"
    };
  },
  render: function() {
    var buttonClass = "yellow circular ui icon button fab";
    return (
      <button id="question" onClick={this.openQue} className={(this.state.open)?buttonClass+" open":buttonClass}>
        <div>
          <div className="pop-up">填寫問卷</div>
          <i className="edit icon"></i>
        </div>
        <QuestionForm />
      </button>
    );
  },
  openQue: function(e) {
    e.stopPropagation();
    this.setState({
      open: true
    });
  },
  componentDidMount: function() {
    this.setState({
      open: false
    });
    $("body").click(function(e) {
      this.setState({
        open: false
      });
    }.bind(this));
  }
});

var QuestionForm = React.createClass({
  getInitialState: function() {
    return {
      data: {
      }
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <div className="ui form">
          <h4 className="ui dividing header">基本資料</h4>
          <div className="fields">
            <div className="field">
              <label>名字</label>
              <input type="text" placeholder="First Name"/>
            </div>
            <div className="field">
              <label>姓氏</label>
              <input type="text" placeholder="Middle Name"/>
            </div>
          </div>
          <div className="inline fields">
            <label>Select your favorite fruit:</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" className="hidden"/>
                <label>Apples</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" className="hidden"/>
                <label>Oranges</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" className="hidden"/>
                <label>Pears</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $('.checkbox').checkbox();
    $('.fields .field:nth-child(2) label').each(function(index, el) {
      el.click();
    });
  }
});

ReactDOM.render(
  <FloatingButton/>, document.querySelector(".content-wrapper"));
