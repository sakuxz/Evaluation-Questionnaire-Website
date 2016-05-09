require('index.scss');

const React = require('react');
const ReactDOM = require('react-dom');

const ReadMe = require('./readme');
const UserInfo = require('./userInfo');
//const Q1_1 = require('./q1_1');

var FloatingButton = React.createClass({
  getInitialState: function() {
    return {
      open: true,
      enableClose: false,
      flowAt: 0
    };
  },
  render: function() {
    var form;
    if(this.state.flowAt === 0){
      form = <ReadMe nextFlow={this.nextFlow} />;
    }else if(this.state.flowAt === 1){
      form = <UserInfo nextFlow={this.nextFlow} />;
    }else if(this.state.flowAt === 2){
      //form = <Q1_1 nextFlow={this.nextFlow} />;
    }

    var buttonClass = "readme yellow circular ui icon button fab";
    return (
    <div>
      <div id="question" onClick={this.openQue} className={(this.state.open)?buttonClass+" open":buttonClass}>
        <div>
          <i className="edit icon"></i>
        </div>
        {form}
      </div>

      <div className="pop-up">填寫問卷</div>
      <div onClick={this.closeQue} className={(this.state.open)?"mask open":"mask"} ></div>
    </div>
    );
  },
  nextFlow: function(close) {
    if(close === true){
      setTimeout(function() {
        this.setState({
          open: false
        });
      }.bind(this),0);
    }
    var next = this.state.flowAt+1;
    if(next > 1){
      this.setState({
        enableClose: true
      });
    }
    this.setState({
      flowAt: next
    });
  },
  openQue: function(e) {
    e.stopPropagation();
    this.setState({
      open: true
    });
  },
  closeQue: function() {
    if(this.state.enableClose){
      this.setState({
        open: false
      });
    }
  },
  componentDidMount: function() {
    // this.setState({
    //   open: false
    // });
    // $("body").click(function(e) {
    //   this.setState({
    //     open: false
    //   });
    // }.bind(this));
  }
});

ReactDOM.render(
  <FloatingButton/>, document.querySelector(".content-wrapper"));
