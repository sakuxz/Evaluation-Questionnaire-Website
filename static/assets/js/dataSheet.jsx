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
        <td>{this.props.data.situation}</td>
        {
          this.props.data.ans.map(function(e, i) {
            return <td key={i} >{e.value}</td>;
          })
        }
      </tr>
    );
  }
});

var DataTable = React.createClass({
  render: function () {
    return(
      <div>
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
                  <th>情境</th>
                  {
                    this.props.data[0].ans.map(function(e, i) {
                      return <th key={i} >{e.name}</th>;
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
    case 10:
      return "10小時以內";
    case 11:
      return "11-20小時";
    case 21:
      return "21-30小時";
    case 31:
      return "31-40小時";
    case 41:
      return "41小時以上";
    case 1000:
      return "1000元以內";
    case 1001:
      return "1001元-2000元";
    case 2001:
      return "2001元-3000元";
    case 3001:
      return "3001元-4000元";
    case 4001:
      return "4001元以上";
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
