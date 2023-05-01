const React = require("react");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
const noListStyle = {
    listStyle: 'none'
}
    
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class Index extends React.Component {
    render() {
      const {pokemon} = this.props
    return (
      <div>
        <h1 style={myStyle}> Index Page </h1>
        <ul>
            {pokemon.map((pokemonObj, i) => {
                return(
                    <li style={noListStyle}>
                       <a href={`/pokemon/${i}`}>{i}</a> Pokemon Name: { capitalizeFirstLetter(pokemonObj.name)}
                        
                    </li>
                )
            })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;