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
      <div className="inline field">
        <label style={{display:'block',margin: '1em 0 0.5em'}} >{this.props.data.title}</label>
        {field}
        <div style={{display:'inline-block'}} className="field hidd">
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

        <form ref='form'>
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

      if(localStorage.userData === undefined || localStorage.userData === "" ){
        open("/","_self");
      }

      var ans = $(this.refs.form).serializeArray();
      var t = JSON.parse(localStorage.userData);
      t.ans = ans;
      t.situation = 'angry';
      uploadAns(t).then(function() {
        localStorage.removeItem("userData");
        swal({
            title: "Good job!",
            text: "You finished the Questionnaire",
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
