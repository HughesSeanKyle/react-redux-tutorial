import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div>
            <SongList />
        </div>    
    ); 
};

export default App;

/*
import { selectSong } from '../actions'; // 1

If importing named export then use {}
If importing default export then no need for  {}
*/