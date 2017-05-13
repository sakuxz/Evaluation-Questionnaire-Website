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
                  <option value="20-29歲">20-29歲</option>
                  <option value="30-39歲">30-39歲</option>
                  <option value="40-49歲">40-49歲</option>
                  <option value="大於50歲">大於50歲</option>
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

            <label className="input-label" >教育程度：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="高中以下" name="education"/>
                  <label>高中以下</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="高中" name="education"/>
                  <label>高中</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="大學" name="education"/>
                  <label>大學</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="大學以上" name="education"/>
                  <label>大學以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="education" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >網購次數(每週)：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="0次" name="shopping_time"/>
                  <label>0次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1-3次" name="shopping_time"/>
                  <label>1-3次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="4-6次" name="shopping_time"/>
                  <label>4-6次</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="7次以上" name="shopping_time"/>
                  <label>7次以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >上網時數(每天)：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="0-3小時" name="surf_time"/>
                  <label>0-3小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="4-6小時" name="surf_time"/>
                  <label>4-6小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="7-10小時" name="surf_time"/>
                  <label>7-10小時</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="11小時以上" name="surf_time"/>
                  <label>11小時以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="surf_time" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>


            <label className="input-label" >網購金額(平均每次)：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="0元" name="shopping_money"/>
                  <label>0元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1,000元以下" name="shopping_money"/>
                  <label>1,000元以下</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="1,000-3,000元" name="shopping_money"/>
                  <label>1,000-3,000元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="3,000-5,000元" name="shopping_money"/>
                  <label>3,000-5,000元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="5,000元以上" name="shopping_money"/>
                  <label>5,000元以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="shopping_money" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >每月收入(零用金)：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="20,000以下" name="income"/>
                  <label>20,000以下</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="20,001-35,000元" name="income"/>
                  <label>20,001-35,000元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="35,001-50,000元" name="income"/>
                  <label>35,001-50,000元</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="50,000元以上" name="income"/>
                  <label>50,000元以上</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="income" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <label className="input-label" >對網路活動(例如：購物; 社群; 資訊搜尋等)的熟悉程度：</label>
            <div className="inline fields">
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="完全不熟悉" name="social_network_family"/>
                  <label>完全不熟悉</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="有點熟悉" name="social_network_family"/>
                  <label>有點熟悉</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="普通熟悉" name="social_network_family"/>
                  <label>普通熟悉</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="很熟悉" name="social_network_family"/>
                  <label>很熟悉</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                  <input type="radio" value="非常熟悉" name="social_network_family"/>
                  <label>非常熟悉</label>
                </div>
              </div>
              <div className="field hidd">
                <div className="ui radio checkbox">
                  <input type="radio" name="social_network_family" value="" defaultChecked='true' />
                  <label>null</label>
                </div>
              </div>
            </div>

            <div className="ui submit button" onClick={this.starTest} >下一步</div>

          </div>
        </form>

        <div className="opt-modal" ref="model" >
          <form className="ui form" ref="optForm" >
            <h4 className="ui dividing header">選填資料</h4>
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
    // if(data.surf_time < data.shopping_time){
    //   alert("線上購物時間大於上網時間，不合邏輯");
    //   return;
    // }
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
    $('#question').scrollTop(0);
    $(this.refs.model).addClass('vis');
  },
  situation: null,
  goSitu: function() {
    var data = $(this.refs.optForm).serializeObject();
    var t = JSON.parse(localStorage.userData);
    t.name = data.name;
    t.studno = data.studno;
    t.situation = this.situation;
    localStorage.userData = JSON.stringify(t);
    open("/"+this.situation,"_self");
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
