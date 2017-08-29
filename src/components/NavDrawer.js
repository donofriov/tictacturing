import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router'
import { NavToggleButton } from '../styled/NavDrawer'
import AuthButton from './AuthButton'

class NavDrawer extends Component {
  state = {
    open: true,
    width: 250
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <AuthButton
            auth={this.props.auth}
            authenticated={this.props.authenticated}
          />
          <Divider/>
          <Link
            to={'/'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText={'Play'}
            />
          </Link>
          <Link
            to={'/profile'}
          >
            <MenuItem
              onTouchTap={this.toggle}
              primaryText={'Profile'}
            />
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer
