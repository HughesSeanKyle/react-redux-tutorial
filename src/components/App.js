import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>    
    ); 
};

export default App;

/*
import { selectSong } from '../actions'; // 1

If importing named export then use {}
If importing default export then no need for  {}
*/