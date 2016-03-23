require('index.scss');

const React = require('react');
const ReactDOM = require('react-dom');

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
            <label for="fruit">Select your favorite fruit:</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" checked="" tabindex="0" className="hidden"/>
                <label>Apples</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabindex="0" className="hidden"/>
                <label>Oranges</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabindex="0" className="hidden"/>
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
  <QuestionForm/>, document.querySelector(".content-wrapper"));
