const React = require('react');
const ReactDOM = require('react-dom');

var RadioGroup = React.createClass({
  render: function() {
    var field = [];
    for(var i = 1;i<8;i++){
      field.push( (
        <div style={{display:'inline-block',marginRight:"1em"}} className="field" key={i} >
          <div className="ui radio checkbox">
            <input type="radio" name={this.props.data.name} value={i}/>
            <label>{i}</label>
          </div>
        </div>
      ) );
    }
    return (
      <div className="inline field" ref="radioGroup" >
        <label style={{display:'block',margin: '1em 0 0'}} >{this.props.data.title}</label>
        {
          (this.props.data.degreeTop)?<div className="label-degree"><span>{this.props.data.degreeBottom}</span><span>{this.props.data.degreeTop}</span></div>:
          null
        }
        {
          (this.props.data.degreeTop)?field:
          <div style={{marginTop: '5px'}}>
              <div style={{display:'inline-block',marginRight:"1em"}} className="field" >
              <div className="ui radio checkbox">
                <input type="radio" name={this.props.data.name} value="擔心"/>
                <label>擔心</label>
              </div>
            </div>
            <div style={{display:'inline-block',marginRight:"1em"}} className="field" >
              <div className="ui radio checkbox">
                <input type="radio" name={this.props.data.name} value="憤怒"/>
                <label>憤怒</label>
              </div>
            </div>
            <div style={{display:'inline-block',marginRight:"1em"}} className="field" >
              <div className="ui radio checkbox">
                <input type="radio" name={this.props.data.name} value="驕傲"/>
                <label>驕傲/得意</label>
              </div>
            </div>
            <div style={{display:'inline-block',marginRight:"1em"}} className="field" >
              <div className="ui radio checkbox">
                <input type="radio" name={this.props.data.name} value="驚喜"/>
                <label>驚喜</label>
              </div>
            </div>
          </div>
        }
        <div style={{display:'inline-block'}} className="field hidd">
          <div className="ui radio checkbox">
            <input type="radio" name={this.props.data.name} value="" defaultChecked='true' />
            <label>null</label>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    if(!this.props.tempData2) return;
    var prevAns = this.props.tempData2[this.props.index].value;
    $("input[value='"+prevAns+"']",this.refs.radioGroup).attr('checked', true);
  }
});

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
      que: [
        {
          title: "5-1 如果我在尋找餐廳，這篇評論文對我而言?",
          name: "A5-1",
          degreeBottom: "完全沒有幫助",
          degreeTop: "非常有幫助"
        },
        {
          title: "5-2 如果我在尋找餐廳，這篇評論文對我而言?",
          name: "A5-2",
          degreeBottom: "完全沒有用",
          degreeTop: "非常有用"
        },
        {
          title: "5-3 如果我在尋找餐廳，這篇評論文對我而言?",
          name: "A5-3",
          degreeBottom: "完全不具參考價值",
          degreeTop: "非常具有參考價值"
        }
      ]
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <form ref='form'>
          <div className="ui form">
            <h4 className="ui dividing header">在看完評論文後，請選出最能描述你實際感受的衡量尺度</h4>

            {
              this.state.que.map(function(e, i) {
                return <RadioGroup data={e} index={i} tempData2={this.props.tempData2} key={i} />;
              }.bind(this))
            }

            <div className="ui submit button" onClick={this.prevFlow} >上一頁</div>
            <div className="ui submit button" onClick={this.checkQue} >提交問卷</div>

          </div>
        </form>
      </div>
    );
  },
  componentDidMount: function() {
    $('.checkbox').checkbox();
  },
  isSend: false,
  prevFlow: function() {
    var ans = $(this.refs.form).serializeArray();
    this.props.saveTempData2(ans);
    this.props.prevFlow();
  },
  checkQue: function () {
    if(this.isSend){
      return;
    }

    var checked = true;
    $(this.refs.form).serializeArray().forEach(function(e,i){
      if(e.value === ""){
        checked = false;
      }
    });
    if(!checked){
      alert("尚有欄位未填寫");
      return;
    }else{
      this.isSend = true;

      if(localStorage.userData === undefined || localStorage.userData === "" ){
        open("/","_self");
      }

      var ans = $(this.refs.form).serializeArray();
      var t = JSON.parse(localStorage.userData);
      t.ans = ans.concat(this.props.tempData);
      t.situation = 'worry';
      uploadAns(t).then(function() {
        localStorage.removeItem("userData");
        swal({
            title: "Good job!",
            text: "實驗到此結束，謝謝您的協助",
            type: "success"
        }, function() {
            open("/","_self");
        });
      }, ()=> {
        alert("網路錯誤，請重試");
        this.isSend = false;
      } );
    }

  }
});

function uploadAns(data){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/ans',
      type: 'POST',
      data: {answer: JSON.stringify(data)}
    })
    .done(function(msg) {
      resolve(msg)
    })
    .fail(function(e) {
      reject(e);
    });
  });

}
