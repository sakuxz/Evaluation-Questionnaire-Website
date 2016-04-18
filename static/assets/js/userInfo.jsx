const React = require('react');
const ReactDOM = require('react-dom');

$.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

export default React.createClass({
  displayName: 'UserInfo',
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <form ref='form'>
          <div className="ui form">
            <h4 className="ui dividing header">個人基本資料</h4>

            <div className="inline fields">
              <label>1. 請問您的性別是 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="sex" value="男" className="hidden"/>
                  <label>男</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="sex" value="女" className="hidden"/>
                  <label>女</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="sex" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="inline fields">
              <label>2. 請問您的年齡是 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age"/>
                  <label>18~24歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age"/>
                  <label>25~29歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age"/>
                  <label>30~34歲</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" name="age"/>
                  <label>34歲以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="age" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <p style={{color: "black"}}>3. 請問您的基本資料 :</p>

            <div className="fields">
              <div className="field">
                <label>名字</label>
                <input type="text" placeholder="Name" name="name"/>
              </div>
              {/*<div className="field">
                <label>姓氏</label>
                <input type="text" placeholder="Middle Name" name="name"/>
              </div>*/}
            </div>

            <div className="ui submit button" onClick={this.starTest} >開始測驗</div>

          </div>
        </form>
      </div>
    );
  },
  starTest: function() {
    var t = false;
    $(this.refs.form).serializeArray().forEach(function(e,i) {
      if(e.value === ""){
        console.log("error");
        t = true;
      }
    });
    if(t){
      alert("尚有欄位未填寫");
      return;
    }

    var data = $(this.refs.form).serializeObject();
    localStorage.userData = JSON.stringify(data);
    if(data.sex === "男"){
      //$("#test").text('情境'+Math.floor(Math.random()*5+1) );
    }
    else{
      //$("#test").text('情境'+Math.floor(Math.random()*5+1) );
    }
    open("/angry.html","_self");
  },
  componentDidMount: function() {
    $('.checkbox').checkbox();
  }
});
