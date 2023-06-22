/**
 * আজকের মডিউল এ জাস্ট দুইটা ভিডিও। অর্থাৎ এসাইনমেন্ট এ কি করতে হবে সেই রিলেটেড কথাবার্তা। এই এসাইনমেন্ট দিয়ে শেষ হবে তোমার বেসিক জাভাস্ক্রিপ্ট মাইলস্টোন। বেসিক কনসেপ্টগুলো শেষ করার পর যে কয়েকটা প্রবলেম সলভিং করছো সেই প্রবলেমগুলা ভালোমতো বুঝলেই এই এসাইনমেন্ট করতে তোমার কোন সমস্যা হওয়ার কথা না। 

 .

ফাংশনের নাম হুবহু আমি যেমন বলে দিয়েছি সেটার মতো করে হতে হবে। অন্য কোন নাম / অথবা নামের কোণ অক্ষর ছোট, কোণ অক্ষর বড় করলে হবে না, হুবহু আমার মত দিতে হবে ।



Problem: 1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।



Sample Data:

Input
10
25
199

Output
572.96
1432.39
11401.86



Problem: 2  isJavaScriptFile 

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম(যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 


Sample Data

Input
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'

Output
true
false
false
true


Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

ভিডিও ভালো করে দেখবে। 



প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



এখন সে যদি বিভিন্ন লিটারের ডিজেল, পেট্রোল, অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

.

Sample Data

Input
1, 1, 1
30, 20, 10
1, 0, 2
0, 2, 3

Output
379
7370
384
665


Problem 4: publicBusFare


একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা(কতজন যাবে)  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।



উদাহরণ১ঃ

যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।



উদাহরণ২ঃ

যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।


Sample Data

Input
50
55
112
235
365

Output
0
1250
250
500
1000



Problem 5: isBestFriend


তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে, না হলে false রিটার্ন করবে ।



Sample Data:

Input

{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }

{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }

{ name: "doe", friend: "alex" },
{ name: "john", friend: "doe" }




Output

true
false
false
*/
/*
কিছু কমন প্রশ্ন:



প্রশ্ন -১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো ?

    উত্তর : তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না। 

.

প্রশ্ন -২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।

    উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে। 

    যদি সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যদি বুলিয়ান ভ রিটার্ন করার কথা সেখানে true / false রিটার্ন করবে।

    অর্থাৎ টোটাল খরচ কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে। বা your total cost is 200 taka এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে। 


প্রশ্ন -৩: ফাংশনের বাইরে কি console.log করতে হবে ?

    উত্তর : ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে দেখবো ঠিকমতো কাজ করছে কিনা। 


প্রশ্ন -৪: var ব্যবহার করা যাবে?

    উত্তর: না। let/const ব্যবহার কর। 

        .
প্রশ্ন -৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে ? [IMPORTANT]

    উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো। 



    তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পার।আমরা শুধু ফাংশনের ভিতরে ঠিক আছে কিনা দেখব । তাই সাবমিট কড়ার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

  

    ফাংশনকে আমরা বিভিন্ন সংখ্যা-- ভালো এবং খারাপ সংখ্যায় দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে। তোমাদের সুবিধার্থে নিচে একটি ডেমো দেওয়া হলঃ



WRONG FORMAT



    - problem 1



function makeDouble(number) {

    // do not write anything like this, just return the result

    return "Problem one result: " + number * 2;

}

const result = makeDouble(5);

// remove any console.log() or function call like this form here👆





CORRECT FORMAT



function makeDouble(number) {

    return number * 2;

}

.

প্রশ্ন -৬: আমি কিছু বুঝতেছি না কি করবো ?



    উত্তর : প্রব্লেমগুলা আলাদা আলাদা ভাবে চিন্তা করো। আমাদের মডিউলগুলো ঠিক মতো দেখলে মোটামুটি এই প্রব্লেমগুলা সলভ করে ফেলতে পারবে।  

জাস্ট যে যে প্রবলেম সল্ভ করতে বলা হয়েছে সেগুলা একটু ধীরে ধীরে বুঝার চেষ্টা করো। দেখো বুঝতে পারো কিনা। হতে পারে আমাদের মডিউল এর কোন একটি ভিডিও এর সাথে ডাইরেক্ট বা ইনডাইরেক্ট মিল আছে। তাহলে সেই জিনিস খুঁজে বের করে তারপর সেটা অনুসারে করার চেষ্টা করো।



প্রশ্ন -৭: বোনাস মার্কসের জন্য কি করতে হবে

উত্তর: এসাইনমেন্ট এর ২য় ভিডিও(২৩.২) ভালো করে দেখো। 

  

 

কি সাবমিট করবে ?:



    এইবার কোন লাইভ সাইট নাই। কোন কোড এর লিংক(গিটহাব রিপোজিটরি এর লিংক) নাই। জাস্ট জাভাস্ক্রিপ্ট এর কোড কপি করে এসাইনমেন্ট সাবমিট করার বক্স এর মধ্যে পেস্ট করে তারপর সাবমিট করে দিবে। এইটা বুঝতে না পারলে ভিডিওতে দেখে ফেলো। 


 */

function radianToDegree(radian) {

    if (typeof radian !== 'number') {
        return "please enter a number."
    }

    let degree = (radian * (180 / Math.PI));
    let degreeRounded = Math.round(degree * 100) / 100;
    return degreeRounded;
}

function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') {
        return "please enter a string as filename"
    }

    if (fileName.endsWith(".js"))
        return true;
    else 
        return false;
    
}

function oilPrice(disel, petrol, octen) {

    if (typeof disel !== 'number' || typeof petrol !== 'number' || typeof octen !== 'number') {
        return "Please enter a number as oil quantity."
    }

    const diselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;
    
    return diselPrice * disel + petrolPrice * petrol + octenPrice * octen;
}


function publicBusFare(passenger) {

    if (typeof passenger !== 'number') {
        return "Please enter a number as Passenger quantity."
    }

    const perBus = 50;
    const perMicro = 11;
    const fare = 250;

    if (passenger < perMicro) {
        return passenger * fare;
    } else if (passenger < perBus) {
        let publicPassenger = passenger % perMicro;
        return publicPassenger * fare;
    } else {
        let afterBus = passenger % perBus;
        if (afterBus >= perMicro) {
            let publicPassenger = afterBus % perMicro;
            return publicPassenger * fare;
        }
        else {
            return afterBus * fare;
        }
    }
}


function isBestFriend(obj1, obj2) {

    if (typeof obj1.friend !== 'string' || typeof obj2.friend !== 'string' || typeof obj1.name !== 'string' || typeof obj2.name !== 'string') {
        return "Please input a string as name or friend. ";
    }

    return (obj1.friend.toLowerCase() === obj2.name.toLowerCase() && obj2.friend.toLowerCase() === obj1.name.toLowerCase());
}


