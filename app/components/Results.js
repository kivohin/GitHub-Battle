var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Results(props) {
  return(
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        
      </div>
    </div>
  )
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;