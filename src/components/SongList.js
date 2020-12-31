import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    // Helper Function
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => { // 1
    return { songs: state.songs };
};

export default connect(
    mapStateToProps,
    { selectSong } // 2
)(SongList); 

/*
// 1 Called this by convention
        We will take our state object. The data inside and we will run some computation on it. This will cause that data to evetually show up as props inside of the component.
    
Will be called with all of the state inside redux store. It is the entire list of songs from the song reducer and the currently selected song from the selected song reducer. 

We configure the connect function by passing it a function.

Steps get data from redux store into a component using redux lib
a1. Import connect at the top
a2. Call connect at bottom and pass in component as the 2nd function call 
a3. Will always define mapStateToProps 
    mapStateToProps is always going to get 1st arg of state
    Will always return an obj that will show up as props inside component

2. Can make this syntax shorter with some es6 if key and value is the same. Just use one word. selectSong: selectSong -> before refactor. 

When this action creator is passed into connect function like this it is automatically passed to the dispatch function which then later updates the redux store with the action it has received. 
*/