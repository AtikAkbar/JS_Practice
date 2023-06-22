function reverseWords(Str) {
    const words = Str.split(" ");
    console.log(words);
    const result = [];

    for (let index = words.length -1; index >= 0; index--) {
        const element = words[index];
        // console.log(element);
        result.push(element);
    }
    const reversed = result.join(" ");
    console.log(reversed);
}

const myString = "I am a good boy";
reverseWords(myString);