/**
 * show output from 1-50
 * if num divisible by 3 show 'foo'
 * if num divisible by 5 show 'bar'
 * if num divisible by 3 & 5 show 'foobar'
 */

for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i,"- foobar");
    } else if (i % 3 == 0) {
        console.log(i, "- foo");
    } else if (i % 5 == 0) {
        console.log(i, "- bar");
    } else {
        console.log(i);
    }
}
