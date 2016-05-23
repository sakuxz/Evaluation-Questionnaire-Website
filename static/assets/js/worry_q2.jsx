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
    if(!this.props.tempData) return;
    var prevAns = this.props.tempData[this.props.index].value;
    $("input[value='"+prevAns+"']",this.refs.radioGroup).attr('checked', true);
  }
});

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
      que: [
        {
          title: "1. 你認為作者投入多少努力，來撰寫這篇評論文?",
          name: "A1",
          degreeBottom: "非常少努力",
          degreeTop: "非常多努力"
        },
        {
          title: "2. 你認為作者在發表這篇評論文之前，做了多少思考?",
          name: "A2",
          degreeBottom: "非常少思考",
          degreeTop: "非常多思考"
        },
        {
          title: "3. 你認為作者花了多少時間，來撰寫這篇評論文?",
          name: "A3",
          degreeBottom: "非常少時間",
          degreeTop: "非常多時間"
        }
      ]
    };
  },
  render: function() {
    return (
      <div className="ques-form">

        <form ref='form'>
          <div className="ui form">
            <h4 className="ui dividing header">在瀏覽完網站後，請根據你的實際感受據實回答</h4>

            {
              this.state.que.map(function(e, i) {
                return <RadioGroup tempData={(this.props.tempData)?this.props.tempData:null} data={e} index={i} key={i} />;
              }.bind(this))
            }

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
      this.props.saveTempData(ans);
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
