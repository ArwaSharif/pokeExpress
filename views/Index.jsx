const React = require("react");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}> Index Page </h1>
      </div>
    );
  }
}

module.exports = Index;