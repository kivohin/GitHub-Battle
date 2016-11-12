var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  // To do routing inside this component we use 'context'
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    // Fetch info from GitHub then update state
  },

  render: function() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;