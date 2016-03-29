const React = require('react');
const ReactDOM = require('react-dom');

export default React.createClass({
  displayName: 'UserInfo',
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <form>
          <div className="ui form">
            <h4 className="ui dividing header">個人基本資料</h4>

            <div className="inline fields">
              <label>1. 請問您的性別是 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="sex" className="hidden"/>
                  <label>男</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="sex" className="hidden"/>
                  <label>女</label>
                </div>
              </div>
            </div>

            <div className="grouped inline fields">
              <label>2. 請問您的年齡是 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age" className="hidden"/>
                  <label>18~24歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age" className="hidden"/>
                  <label>25~29歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age" className="hidden"/>
                  <label>30~34歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age" className="hidden"/>
                  <label>34歲以上</label>
                </div>
              </div>
            </div>

            <p style={{color: "black"}}>3. 請問您的基本資料 :</p>

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

            <div className="ui submit button" onClick={this.starTest} >開始測驗</div>

          </div>
        </form>
      </div>
    );
  },
  starTest: function() {
    this.props.nextFlow(true);
    $("#test").text('情境'+Math.floor(Math.random()*5+1) );
  },
  componentDidMount: function() {
    $('.checkbox').checkbox();
    $('.fields .field:nth-child(2) label').each(function(index, el) {
      el.click();
    });
  }
});
