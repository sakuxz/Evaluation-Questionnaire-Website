const React = require('react');
const ReactDOM = require('react-dom');

var RadioGroup = React.createClass({
  render: function() {
    var field = [];
    for(var i = 1;i<8;i++){
      field.push( (
        <div className="field"  key={i} >
          <div className="ui radio checkbox">
            <input type="radio" name={this.props.data.name} value={i}/>
            <label>{i}</label>
          </div>
        </div>
      ) );
    }
    return (
      <div className="inline fields">
        <label>{this.props.data.title}</label>
        {field}
        <div className="field hidd">
          <div className="ui radio checkbox">
            <input type="radio" name={this.props.data.name} value="" defaultChecked='true' />
            <label>null</label>
          </div>
        </div>
      </div>
    );
  }
});

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
      que: [
        {
          title: "問題一",
          name: "A1"
        },
        {
          title: "問題二",
          name: "A2"
        },
        {
          title: "問題三",
          name: "A3"
        },
        {
          title: "問題四",
          name: "A4"
        },
        {
          title: "問題五",
          name: "A5"
        }
      ]
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <form>
          <div className="ui form">
            <h4 className="ui dividing header">在瀏覽完網站後，請根據你的實際感受據實回答</h4>

            {
              this.state.que.map(function(e, i) {
                return <RadioGroup data={e} key={i} />;
              })
            }

            <div className="ui submit button" onClick={this.checkQue} >下一步</div>

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
      alert("答案正確");
    }
  }
});
