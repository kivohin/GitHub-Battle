var React = require('react');

// Functional stateless component
function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p>Loading</p>
    : <p>Confirm Battle</p>
}

module.exports = ConfirmBattle;