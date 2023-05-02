const React = require("react");
const Nav = require('../views/components/Nav')
const myStyle = {
  color: "#3663ad",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={{ textAlign: "center", backgroundImage: 'url(https://trumpwallpapers.com/wp-content/uploads/Pokemon-Wallpaper-03-1920-x-1080.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: "#3663ad", fontFamily: 'cursive', fontSize: '18pt' }}>
        <h1 style={myStyle}> Index Page </h1>
        <ol>
          {pokemon.map((pokemonObj, i) => {
            return (
              <li style={{listStyle: 'none'}}>
                <a href={`/pokemon/${pokemonObj._id}`} style={{color: "#3663ad"}}>
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
