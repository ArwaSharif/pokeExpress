const React = require('react')
// const Nav = require('../components/Nav')
const myStyle = {
    color: "#ffcb05",
  };

class New extends React.Component {

    render(){
        return(
            <div div style={{ textAlign: "center", backgroundColor: '#3663ad', color: "#ffcb05", fontFamily: 'cursive', fontSize: '18pt' }}>
                {/* <Nav /> */}
                <h1> Create a New Pokemon </h1>
                <form action='/pokemon' method='POST'>
                    Pokemon Name:<br /> <input type="text" name='name' />
                    <br />
                    Image: <br /><input type="text" name='img' />
                    <br />
                    <input type='submit' value='Create Pokemon' />
                </form>
            </div>
        )
    }
}

module.exports = New