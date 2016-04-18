const React = require('react');
const ReactDOM = require('react-dom');

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <div className="ui form">
          <h4 className="ui dividing header">實驗說明</h4>
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
  componentDidMount: function() {
    $('.checkbox').checkbox();
    $('.fields .field:nth-child(2) label').each(function(index, el) {
      el.click();
    });
  }
});
