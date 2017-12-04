import React, {Component} from 'react'
import Clock from './Clock'
import Rules from './Rules'
import Water from './Water'
import Trim from './Trim'
import {Menu, Image, Grid} from 'semantic-ui-react'

export default class Room extends Component {
  render() {
    return (
      <div className="site">
      <header>
        <Clock />
      </header>
      <main className="site-content">
      <Grid stackable columns={2}>
        <Grid.Column>
          <Image src="images/tree.jpeg" size='medium' />
        </Grid.Column>
      </Grid>
      </main>
        <footer>
          <Menu inverted>
            <Menu.Item>
              <Water />
            </Menu.Item>
            <Menu.Item>
              <Trim />
            </Menu.Item>
            <Menu.Item>
              <Rules />
          </Menu.Item>
          </Menu>
        </footer>
      </div>
    )
  }
}
