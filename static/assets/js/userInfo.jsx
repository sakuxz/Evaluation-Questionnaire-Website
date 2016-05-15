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

            <div className="two fields">
              <div className="field">
                <label>名字</label>
                <input type="text" placeholder="Name" name="name"/>
              </div>
              <div className="field">
                <label>年齡</label>
                <select name="age" className="ui fluid dropdown">
                  <option value="">年齡</option>
                  <option value="20歲以下">20歲以下</option>
                  <option value="21~25歲">21~25歲</option>
                  <option value="26~30歲">26~30歲</option>
                  <option value="31~35歲">31~35歲</option>
                  <option value="36~40歲">36~40歲</option>
                  <option value="40~45歲">40~45歲</option>
                  <option value="45以上">45以上</option>
                </select>
              </div>
            </div>

            <div className="inline fields">
              <label>您的性別是 :</label>
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
              <label>每周上網時數 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="10" name="surf_time"/>
                  <label>10小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="20" name="surf_time"/>
                  <label>20小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="30" name="surf_time"/>
                  <label>30小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="40" name="surf_time"/>
                  <label>40小時以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="surf_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="inline fields">
              <label>每周線上購物時數 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="10" name="shopping_time"/>
                  <label>10小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="20" name="shopping_time"/>
                  <label>20小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="30" name="shopping_time"/>
                  <label>30小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="40" name="shopping_time"/>
                  <label>40小時以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="inline fields">
              <label>每次購買金額 :</label>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="500" name="shopping_money"/>
                  <label>500元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1000" name="shopping_money"/>
                  <label>1000元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1500" name="shopping_money"/>
                  <label>1500元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="2000" name="shopping_money"/>
                  <label>2000元以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_money" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="ui submit button" onClick={this.starTest} >開始測驗</div>

          </div>
        </form>
      </div>
    );
  },
  isSend: false,
  starTest: function() {
    if(this.isSend) return;
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
    this.isSend = true;
    var data = $(this.refs.form).serializeObject();
    localStorage.userData = JSON.stringify(data);
    // var situation = ['angry','worry','pride','surprise'];
    // if(data.sex === "男"){
    //   //$("#test").text('情境'+Math.floor(Math.random()*5+1) );
    //   open("/"+situation[Math.floor(Math.random()*situation.length)]+".html","_self");
    // }
    // else{
    //   //$("#test").text('情境'+Math.floor(Math.random()*5+1) );
    //   open("/"+situation[Math.floor(Math.random()*situation.length)]+".html","_self");
    // }
    getSituation(data.sex).then(function (e) {
      if(e.status){
        open("/"+e.data+".html","_self");
      }else{
        alert("網路錯誤");
        this.isSend = false;
      }
    }.bind(this), function () {
      alert("網路錯誤");
      this.isSend = false;
    }.bind(this));

  },
  componentDidMount: function() {
    $('.checkbox').checkbox();
  }
});

function getSituation(sex){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/situation',
      type: 'GET',
      data: {sex: sex}
    })
    .done(function(msg) {
      resolve(msg)
    })
    .fail(function(e) {
      reject(e);
    });
  });

}
