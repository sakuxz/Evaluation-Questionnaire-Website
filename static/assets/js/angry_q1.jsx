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
              <label>作者花了多少錢吃這一頓下午茶:</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="money" value="700" />
                  <label>700</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="money" value="800" />
                  <label>800</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="money" value="900" />
                  <label>900</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="money" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="ui submit button" onClick={this.checkQue} >下一頁</div>

          </div>
        </form>
      </div>
    );
  },
  componentDidMount: function() {
    $('.checkbox').checkbox();
  },
  checkQue: function () {
    if($("input[name='money']:checked").val() === ""){
      alert("答案未填完整");
    }else if($("input[name='money']:checked").val() !== "900"){
      setTimeout(function () {
        this.props.closeQue();
      }.bind(this),0);
      alert("答案錯誤，請重看網頁內容在做填答");
      $('.pop-up').removeClass('flash');
      $('.pop-up').text('填寫問卷');
      $("html,body").animate({
  			scrollTop: 0
  		}, 1200, 'swing', function () {
        $('.rank').visibility({
          onTopVisible: function(calculations) {
            $('.pop-up').addClass('flash');
            $('.pop-up').text('下一步')
          }
        });
  		});
    }else{
      this.props.nextFlow();
    }
  }
});
