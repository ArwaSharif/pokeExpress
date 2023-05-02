const React = require("react");
const Nav = require('../views/components/Nav')
const myStyle = {
  color: "#ffcb05",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={{ textAlign: "center", backgroundColor: '#3663ad', color: "#ffcb05", fontFamily: 'cursive', fontSize: '18pt' }}>
        <h1 style={myStyle}> Index Page </h1>
        <ol>
          {pokemon.map((pokemonObj, i) => {
            return (
              <li style={{listStyle: 'none'}}>
                <a href={`/pokemon/${i}`} style={{color: "#ffcb05"}}>
                  {"  "}{" "}
                  <strong>{capitalizeFirstLetter(pokemonObj.name)}</strong>
                </a>
              </li>
            );
          })}
        </ol>

          <Nav  link="/pokemon/New"  text="Click Here to Add a New Pokemon"/>
      </div>
    );
  }
}

module.exports = Index;
