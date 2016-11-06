var USER_DATA = {
  name: 'Goku Queen',
  username: 'kivohin',
  image: 'https://avatars2.githubusercontent.com/u/17774060?v=3&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
  }
});

var Link = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.href)
  },

  render: function() {
    return(
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return(
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>{this.props.username}</Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return <div>{this.props.name}</div>
  }
})

var Avatar = React.createClass({
  render: function() {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
