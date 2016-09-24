/**
 * Created by r3v3nan7 on 24.9.2016 г..
 */

// Write a JS function that displays information about the currently playing musical track.
//     The input comes as an array of string elements. The first element is the name of the track, the second is the name of the artist performing and the third is the duration in minutes and seconds.
//     The output should be printed to the console in the following format:
//     Now Playing: {artist name} - {track name} [{duration}]

function nowPlaying([song, author, time]) {
    console.log('Now Playing: ' + author + ' - ' + song + ' [' + time + ']');
}



nowPlaying(['Number One', 'Nelly', '4:09']);