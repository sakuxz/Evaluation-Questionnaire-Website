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

      <div className="ui form"
        style={{width: 450, height: 500}}>
        <h4 className="ui dividing header">實驗說明</h4>
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
