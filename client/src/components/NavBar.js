import React, { Component } from 'react'

var navStyle = {
  height: 70,
  backgroundColor: 'navy',
};
var navImgStyle = {
  height: 70,
  marginRight: 750

}

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav style={navStyle}>
        <img style={navImgStyle} src="https://d8imphy647zzg.cloudfront.net/wp-content/uploads/2017/08/CA-RGB-Stacked_2C-LtBg-lowRes.jpg" alt=""></img>
        </nav>
      </div>
    )
  }
}

export default NavBar;