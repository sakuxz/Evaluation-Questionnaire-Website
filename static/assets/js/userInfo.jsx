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

            <div className="field" style={{visibility:"hidden",height:0}}>
              <label>名字</label>
              <input type="text" placeholder="Name" value="disable" name="name"/>
            </div>
            <div className="field">
              <div className="field" style={{width:'45%'}} >
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

            <label className="input-label" >每周上網時數 :</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="5" name="surf_time"/>
                  <label>5 小時以內</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="6" name="surf_time"/>
                  <label>6-10 小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="11" name="surf_time"/>
                  <label>11-20 小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="21" name="surf_time"/>
                  <label>21-30 小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="31" name="surf_time"/>
                  <label>31 小時以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="surf_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >每周線上購物次數 :</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="0" name="shopping_time"/>
                  <label>0 次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1" name="shopping_time"/>
                  <label>1-3 次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="4" name="shopping_time"/>
                  <label>4-6 次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="7" name="shopping_time"/>
                  <label>7-9 次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="10" name="shopping_time"/>
                  <label>10-12 次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="13" name="shopping_time"/>
                  <label>13 次以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >每次購買金額 :</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="100" name="shopping_money"/>
                  <label>100元以內</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="101" name="shopping_money"/>
                  <label>101元-300元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="301" name="shopping_money"/>
                  <label>301元-500元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="501" name="shopping_money"/>
                  <label>501元-700元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="701" name="shopping_money"/>
                  <label>701元以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_money" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="ui submit button" onClick={this.starTest} >下一步</div>

          </div>
        </form>

        <div className="opt-modal" ref="model" >
          <form className="ui form" ref="optForm" >
            <h4 className="ui dividing header">選填資料 (小禮物發放用)</h4>
            <div className="field">
              <label>個人資訊</label>
              <div className="fields">
                <div className="field">
                  <input type="text" name="name" placeholder="姓名" />
                </div>
                <div className="field">
                  <input type="text" name="studno" placeholder="學號" />
                </div>
              </div>
            </div>
            <div className="ui button" onClick={this.goSitu} >開始測驗</div>
          </form>
        </div>

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
    var data = $(this.refs.form).serializeObject();
    this.isSend = true;
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
        this.situation = e.data;
      }else{
        alert("網路錯誤");
        this.isSend = false;
      }
    }.bind(this), function () {
      alert("網路錯誤");
      this.isSend = false;
    }.bind(this));
    $(this.refs.model).addClass('vis');
  },
  situation: null,
  goSitu: function() {
    var data = $(this.refs.optForm).serializeObject();
    var t = JSON.parse(localStorage.userData);
    t.name = data.name;
    t.studno = data.studno;
    localStorage.userData = JSON.stringify(t);
    open("/allInOne.html","_self");
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
