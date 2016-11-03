var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <div>Hello World</div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="Boomy" number={29} />,
  document.getElementById('app')
);