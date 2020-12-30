const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:34' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want It That Way', duration: '1:44' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } // 1

    return selectedSong;
};

/*
This if statement is in place for when we have more action types we would like to use on this reducer in the future. 
*/