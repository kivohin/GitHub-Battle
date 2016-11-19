var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function() {
    return(
      <MainContainer>
        <h1>GitHub Battle</h1>
        <p className="lead">Hey Saiyans</p>
        <Link to='/playerOne'>
          <button type='button' className="btn btn-lg btn-success">Fight</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;