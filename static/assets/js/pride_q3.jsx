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
                <input type="radio" name={this.props.data.name} value="驕傲/得意"/>
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
          title: "4. 你認為下面哪一種情緒，最能表達作者的心情?",
          name: "A4",
          degreeBottom: null,
          degreeTop: null
        },
        {
          title: "5. 如果我在尋找類似的店家，這篇評論文的內容對我而言?",
          name: "A5",
          degreeBottom: "完全沒有幫助",
          degreeTop: "非常有幫助"
        },
        {
          title: "6. 如果我在尋找類似的店家，這篇評論文的內容對我而言?",
          name: "A6",
          degreeBottom: "完全沒有用",
          degreeTop: "非常有用"
        },
        {
          title: "7. 如果我在尋找類似的店家，這篇評論文的內容對我而言?",
          name: "A7",
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
            <div className="ui submit button" onClick={this.checkQue} >下一頁</div>

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
    }else if($("input[name='A4']:checked").val() !== "驕傲/得意") {
      setTimeout(function () {
        this.props.closeQue();
      }.bind(this),0);
      alert("第四題答案錯誤，請重看網頁內容在做填答");
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
      this.isSend = true;
      //
      // if(localStorage.userData === undefined || localStorage.userData === "" ){
      //   open("/","_self");
      // }
      //
      // var ans = $(this.refs.form).serializeArray();
      // var t = JSON.parse(localStorage.userData);
      // t.ans = ans;
      // t.situation = 'angry';
      // uploadAns(t).then(function() {
      //   localStorage.removeItem("userData");
      //   swal({
      //       title: "Good job!",
      //       text: "You finished the Questionnaire",
      //       type: "success"
      //   }, function() {
      //       open("/","_self");
      //   });
      // }, ()=> {
      //   alert("網路錯誤，請重試");
      //   this.isSend = false;
      // } );
      var ans = $(this.refs.form).serializeArray();
      this.props.saveTempData2(ans);
      this.props.nextFlow();
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
