import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track =>
                    <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} shouldAdd={this.props.shouldAdd}/>)}
            </div>
        )
    }
}

export default TrackList;


