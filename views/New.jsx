const React = require('react')
// const Nav = require('../components/Nav')
const myStyle = {
    // color: "#ffcb05",
  };

class New extends React.Component {

    render(){
        // const pokemon = this.props.pokemonObj
        // console.log(pokemon[1].name)
        return(
            <div div style={{ textAlign: "center", backgroundImage: 'url(https://trumpwallpapers.com/wp-content/uploads/Pokemon-Wallpaper-03-1920-x-1080.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: "#3663ad", fontFamily: 'cursive', fontSize: '18pt', width: '100%', height: '100%'}}>
                <h1> Create a New Pokemon </h1>
                <form action='/pokemon' method='POST'>
                    <label>Pokemon Name:</label><br /> <input type="text" name='name' />
                    <br />
                   <label>Image URL:</label> <br /><input type="text" name='img'  />
                   {/* alt={pokemon.name} */}
                    <br />
                    <p style={{fontSize: '8pt', color: '#3663ad'}}>Need help choosing? <a href="https://pokemondb.net/sprites" target="_blank">Pokémon sprite archive</a></p>
                    <br />
                    <input type='submit' value='Create Pokemon' />
                </form>
            </div>
        )
    }
}

module.exports = New