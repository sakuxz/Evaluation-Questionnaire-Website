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

        <form>
          <div className="ui form">
            <h4 className="ui dividing header">在瀏覽完網站後，請根據你的實際感受據實回答</h4>

            <div className="inline fields">
              <label>豆腐麵好吃嗎:</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="delicious" value="好吃" className="hidden"/>
                  <label>好吃</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="delicious" value="普通" className="hidden"/>
                  <label>普通</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="delicious" value="難吃" className="hidden"/>
                  <label>難吃</label>
                </div>
              </div>
            </div>

            <div className="inline fields">
              <label>豆腐麵開在哪裡:</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="plcce" value="彰化" className="hidden"/>
                  <label>彰化</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="plcce" value="台中" className="hidden"/>
                  <label>台中</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="plcce" value="員林" className="hidden"/>
                  <label>員林</label>
                </div>
              </div>
            </div>

          </div>
        </form>
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
