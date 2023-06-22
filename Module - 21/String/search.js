const lyrics = 'Tumi bondhu kala pakhi, ami jeno ki. boshonto kale tomay bolte pari ni. sada sada, kala kala, rong jomeche sada kala, hoisi ami mon pagla  boshoto kale.';

// const lyrics = 'poi poi poi';
const searchString = 'Pakhi';

// search a substring
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);

// find the index of a substring
const searchIndex = 'kala';
console.log(lyrics.indexOf(searchIndex));
console.log(lyrics.lastIndexOf(searchIndex));

if (lyrics.indexOf('sada') != -1) 
    console.log("Exists in the string");
else
    console.log("doesn't exist in the string");

// startsWith() endsWith()
const file = 'myBiodata.pdf';
const otherFile = 'myPic.jpg';

console.log(file.startsWith('my'));
console.log(otherFile.endsWith('.jpg'));