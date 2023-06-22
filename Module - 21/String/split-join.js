const lyrics = 'Tumi bondhu kala pakhi, ami jeno ki. boshonto kale tomay bolte pari ni. sada sada, kala kala, rong jomeche sada kala. hoisi ami mon pagla  boshoto kale.';

// split()
const chars = lyrics.split('');
console.log(chars);

const words = lyrics.split(' ');
console.log(words);

const sentence = lyrics.split('.');
console.log(sentence);

// slice()
const slice = lyrics.slice(5,11); // from index 5 to 10
console.log(slice);

// join()
const lines = [
    'Tumi bondhu kala pakhi, ami jeno ki',
    ' boshonto kale tomay bolte pari ni',
    ' sada sada, kala kala, rong jomeche sada kala',
    ' hoisi ami mon pagla  boshoto kale'
]

console.log(lines.join(' :'));