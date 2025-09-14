interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioplayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song, songDuration, details: { author } } = audioplayer;

// console.log('Song: ', song)
// console.log('Duration: ', songDuration)
// console.log('Author: ', author)

const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje 3', trunks || 'VINI' )

export {};