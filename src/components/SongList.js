import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        console.log(this.props);
        return <div>SongList</div>
    }
}

const mapStateToProps = (state) => { // 1
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

/*
Called this by convention
    We will take our state object. The data inside and we will run some computation on it. This will cause that data to evetually show up as props inside of the component.
    
Will be called with all of the state inside redux store. It is the entire list of songs from the song reducer and the currently selected song from the selected song reducer. 

We configure the connect function by passing it a function.

Steps get data from redux store into a component using redux lib
1. Import connect at the top
2. Call connect at bottom and pass in component as the 2nd function call 
3. Will always define mapStateToProps 
    mapStateToProps is always going to get 1st arg of state
    Will always return an obj that will show up as props inside component
*/