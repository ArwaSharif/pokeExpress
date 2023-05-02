const React = require("react");

const myStyle = {
  color: "#3663ad",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const jpgStr = '.jpg' 

function removeJpg(img){
    const imgUrl = img.includes('jpg', -1) || img.includes('png', -1)? img : img.concat(jpgStr)
    return imgUrl
  }

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemonObj;
    return (
      <div style={{ textAlign: "center", backgroundImage: 'url(https://trumpwallpapers.com/wp-content/uploads/Pokemon-Wallpaper-03-1920-x-1080.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: "#3663ad", fontFamily: 'cursive', fontSize: '18pt' }}>
        <h1 style={myStyle}> Gotta Catch 'Em All! </h1>
        <h2 style={{textDecoration: 'underline'}}>{capitalizeFirstLetter(pokemon.name)}</h2> 
        <img src={removeJpg(pokemon.img)} /> <br />
        <a href="/pokemon" style={{fontSize: '10pt', color: `#3663ad`}}>back</a>
      </div>
    );
  }
}

module.exports = Show;
