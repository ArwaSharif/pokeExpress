const React = require("react");

const myStyle = {
  color: "#ffcb05",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const jpgStr = '.jpg' 

function removeJpg(img){
    const imgUrl = img.includes('jpg', -1) ? img : img.concat(jpgStr)
    return imgUrl
  }

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemonObj;
    return (
      <div style={{ textAlign: "center", backgroundColor: '#3663ad', color: "#ffcb05", fontFamily: 'cursive', fontSize: '18pt' }}>
        <h1 style={myStyle}> Gotta Catch 'Em All! </h1>
        <h2 style={{textDecoration: 'underline'}}>{capitalizeFirstLetter(pokemon.name)}</h2> 
        <img src={removeJpg(pokemon.img)} /> <br />
        <a href="/pokemon" style={{fontSize: '10pt', color: `#ffcb05`}}>back</a>
      </div>
    );
  }
}

module.exports = Show;
