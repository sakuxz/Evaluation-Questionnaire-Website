require('index.scss');

const React = require('react');
const ReactDOM = require('react-dom');

const ReadMe = require('./readme');
const UserInfo = require('./userInfo');
const Surprise_q1 = require('./surprise_q1');
const Surprise_q2 = require('./surprise_q2');
const Surprise_q3 = require('./surprise_q3');
const Surprise_q4 = require('./surprise_q4');

if(localStorage.userData === undefined || localStorage.userData === "" )
{
  open("/","_self");
}

var FloatingButton = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      enableClose: true,
      flowAt: 2,
      tempData: null,
      tempData2: null,
      tempData3: null
    };
  },
  render: function() {
    var form;
    if(this.state.flowAt === 0){
      form = <ReadMe nextFlow={this.nextFlow} />;
    }else if(this.state.flowAt === 1){
      form = <UserInfo nextFlow={this.nextFlow} />;
    }else if(this.state.flowAt === 2){
      form = <Surprise_q1 closeQue={this.closeQue} nextFlow={this.nextFlow} />;
    }else if (this.state.flowAt === 3) {
      form = <Surprise_q2 closeQue={this.closeQue} nextFlow={this.nextFlow} saveTempData={this.saveTempData} tempData={this.state.tempData} />;
    }else if (this.state.flowAt === 4) {
      form = <Surprise_q3 closeQue={this.closeQue} prevFlow={this.prevFlow} nextFlow={this.nextFlow} saveTempData2={this.saveTempData2} tempData2={this.state.tempData2}/>;
    }else if (this.state.flowAt === 5) {
      form = <Surprise_q4 closeQue={this.closeQue} prevFlow={this.prevFlow} nextFlow={this.nextFlow} saveTempData3={this.saveTempData3} tempData3={this.state.tempData3} tempData2={this.state.tempData2} tempData={this.state.tempData} />;
    }

    var buttonClass = "yellow circular ui icon button fab";
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
  prevFlow: function(close) {
    var prev = this.state.flowAt-1;
    this.setState({
      flowAt: prev
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
  saveTempData: function(data) {
    this.setState({
      tempData: data
    });
  },
  saveTempData2: function(data) {
    this.setState({
      tempData2: data
    });
  },
  saveTempData3: function(data) {
    this.setState({
      tempData3: data
    });
  },
  componentDidMount: function() {
    $('html,body').css('overflow', 'initial');
    if(navigator.userAgent.search('.NET4.0')!=-1){
      $('html,body').css('overflow', 'auto');
    }
    $('.rank').visibility({
      onTopVisible: function(calculations) {
        $('.pop-up').addClass('flash');
        $('.pop-up').text('下一步')
      }
    });
  }
});

ReactDOM.render(
  <FloatingButton/>, document.querySelector(".content-wrapper"));
