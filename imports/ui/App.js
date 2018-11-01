import React from 'react'
import PropTypes from 'prop-types'

import TitleBar from './TitleBar'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'

class App extends React.Component {
    render() {
        const subtitle = 'Created by Quinn Davis'
        return (
            <div>
                <TitleBar title={this.props.title} subtitle={subtitle} />
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}

export default App