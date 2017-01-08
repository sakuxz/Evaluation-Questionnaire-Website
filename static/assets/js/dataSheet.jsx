require('data_sheet.scss');

const React = require('react');
const ReactDOM = require('react-dom');

var TableCtn = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{(this.props.data.name === 'disable')?"":this.props.data.name}</td>
        <td>{this.props.data.studno}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.sex}</td>
        <td>{refactorData(this.props.data.surf_time)}</td>
        <td>{refactorData(this.props.data.shopping_time)}</td>
        <td>{refactorData(this.props.data.shopping_money)}</td>
        {
          this.props.data.ans.map(function(e, i) {
            return <td key={i} >{e.choose}</td>;
          })
        }
      </tr>
    );
  }
});

var DataTable = React.createClass({
  render: function () {
    return(
      <div style={{'overflow': 'auto', width: '100%'}}>
        {
          (this.props.data.length < 1)?(
            <div className="info-box">
              <p><i className="info circle icon"></i>尚無資料</p>
            </div>
          ):(
            <table className="ui celled table" id="dataTable">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>學號</th>
                  <th>年齡</th>
                  <th>性別</th>
                  <th>每周上網時數</th>
                  <th>每周線上購物時數</th>
                  <th>每次購買金額</th>
                  {
                    this.props.data[0].ans.map(function(e, i) {
                      return <th title={e.title} key={i} >{e.name}</th>;
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.data.map(function(e, i) {
                      return <TableCtn data={e} key={i} />;
                    })
                  }
                </tbody>
              </table>
            )
          }
      </div>
    );
  }
});

var DataSheet = React.createClass({
  getInitialState: function() {
    getAns().then(function (e) {
      if(e.status){
        this.setState({
          data: e.data,
          isLoad: true
        });

        setInterval(function () {
          getAns().then(function(e) {
            this.setState({
              data: e.data,
            });
          }.bind(this));
        }.bind(this),1500);

      }else {
        alert("網路錯誤");
      }
    }.bind(this), function (e) {
      alert("網路錯誤");
    });
    return {
      data: [],
      isLoad: false
    };
  },
  render: function() {
    return (
      <div>
        <h2 className="ui header">
          <i className="file text outline icon"></i>
          <div className="content">
            問卷資料
          </div>
          <button className="copy-btn" data-clipboard-target="#dataTable"><i className="copy icon"></i>複製表格</button>
        </h2>
        {
          (this.state.isLoad)?(
            <DataTable data={this.state.data} />
          ):(
            <div className="ui active inverted dimmer">
              <div className="ui loader"></div>
            </div>
          )
        }

      </div>
    );
  },
  componentDidMount: function() {
    var clipboard = new Clipboard('.copy-btn');
  }
});

ReactDOM.render(
  <DataSheet />, document.querySelector(".content-wrapper"));

function refactorData(n) {
  switch (n) {
    case 0:
      return "0次";
    case 1:
      return "1-3次";
    case 4:
      return "4-6次";
    case 7:
      return "7-9次";
    case 10:
      return "10-12次";
    case 13:
      return "13次以上";

    case 5:
      return "5 小時以內";
    case 6:
      return "6-10小時";
    case 11:
      return "11-20小時";
    case 21:
      return "21-30小時";
    case 31:
      return "31小時以上";
    case 100:
      return "100元以內";
    case 101:
      return "101元-300元";
    case 301:
      return "301元-500元";
    case 501:
      return "501元-700元";
    case 701:
      return "701元以上";
    default:

  }
}

function getAns(data){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: '/ans',
      type: 'GET'
    })
    .done(function(msg) {
      resolve(msg)
    })
    .fail(function(e) {
      reject(e);
    });
  });

}
