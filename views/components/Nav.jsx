const React = require("react");

class Nav extends React.Component {
  render() {
    return (
      <nav >
        <a style ={{color: "#ffcb05"}} href={this.props.link}>{this.props.text}</a>
      </nav>
    );
  }
}

module.exports = Nav;