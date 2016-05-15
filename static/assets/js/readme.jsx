const React = require('react');
const ReactDOM = require('react-dom');

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="ques-form">

      <div className="ui form">
        <h4 className="ui dividing header">實驗說明</h4>
        <div style={{color: '#212325',fontWeight: 500}} >
          親愛的同學：<br/><br/>
        您好，非常感謝您抽空參加本實驗研究。<br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這個實驗的目的，主要在瞭解網路讀者對評論平台中美食評論文的感受。您 接下來在網站中，所提供的所有數據以及個人資訊，均會受到保護與保密，並僅限於學術研究用途，絶對不會公開，請您放心作答。<br/>
    <div style={{margin: '17px 5px'}}>
        整個實驗過程，約為15-20分鐘，總共有四個部份：<br/>
      <div style={{margin: '10px 0px',lineHeight: '1.8'}}>
            第一個部份：個人基本資料調查；<br/>
            第二個部份：美食評論文的閱讀；<br/>
            第三個部份：對評論文的感受的作答；<br/>
          </div>
        </div>
        <span style={{borderBottom: '1px solid black',paddingBottom: '2px'}}>最後，為了感謝您的合作與耐心填答，本研究在確認無誤後，將提供確實填答的同學，每人一張 100 元的郵政禮卷 (等同現金使用) 作為答謝。</span><br/><br/>
        再次謝謝您的協助！
          <h6 style={{textAlign:'right',margin: '1em',fontWeight: 500}} >資管系 陳美如老師 敬上</h6>
        </div>
        <div className="ui submit button" onClick={this.props.nextFlow} >下一步</div>
      </div>

      </div>
    );
  },
  componentDidMount: function() {
    //$('.checkbox').checkbox();
    // $('.fields .field:nth-child(2) label').each(function(index, el) {
    //   el.click();
    // });
  }
});
