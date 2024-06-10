//Question no 2
// const myName = "Muhammad Owais";

// console.log(`Hello ${myName}, would you like to learn some Python today?`)


//Question no 3
// const myName = "muhammad owais";

// console.log(`Hello ${myName.toLowerCase()}, would you like to learn some Python today?`)
// console.log(`Hello ${myName.toUpperCase()}, would you like to learn some Python today?`)
// console.log(`Hello ${myName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}, would you like to learn some Python today?`)


//Question no 4
// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')
// console.log("Albert Einstein once said, \“A person who never made a mistake never tried anything new.\”")

//Question no 5
// const famous_person = 'Albert Einstein'

// console.log(`${famous_person} once said, “A person who never made a mistake never tried anything new.”`)
// console.log(famous_person + " once said, \“A person who never made a mistake never tried anything new.\”")

//Question no 6
// let personName: string = `\tMuhammad Owais\n\n`
// console.log('Name with whitespace', personName)
// console.log('Name without whitespace', personName.trim())

//Question no 7
// console.log("16 / 2 = ", 16 / 2)
// console.log("4 * 2 = ", 4 * 2)
// console.log("6 + 2 = ", 6 + 2)
// console.log("10 - 2 = ", 10 - 2)

//Question no 8
// console.log(5 + 3);
// console.log(16 - 8);
// console.log(4 * 2);
// console.log(64 / 8);

//Question no 9
// let favoriteNumber: number = 8;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);

//Question no 10
//Single line comments defined by "//"
// if you want to apply multi line comment you can use "/* */"

//Question no 11
// let myFriends: string[] = ["Taha", "Muzammil", "Haseed", "Ahmed", "Fareed", "Moiz", "Shoaib"];

// myFriends.map((element: string) => {
//     console.log(element)
// });

//Question no 12
// let myFriends: string[] = ["Taha", "Muzammil", "Haseed", "Ahmed", "Fareed", "Moiz", "Shoaib"];
// let messagePrint: string = "Asalam-o-Alaikum "

// myFriends.map((element: string) => {
//     console.log(messagePrint + element)
// });


//Question no 13
// const favoriteTransportations: string[] = [
//     "Tesla Model S",
//     "Ducati Monster",
//     "Boeing 747",
//     "Yamaha YZF-R1",
//     "Ford Mustang"
// ];

// favoriteTransportations.forEach(transportation => {
//     console.log(`I would like to own a ${transportation}.`);
// });


//Question no 14
// const guests: string[] = [
//     "Taha",
//     "Saad",
//     "Salman"
// ];

// let startMessage: string = 'Dear '
// let middleMessage: string = ',\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\nSincerely,'
// let myName: string = "\nMuhammad Owais"
// function printMessage(guest: string): void {
//     console.log(startMessage + guest + middleMessage + myName);
// }

// guests.forEach(guest => printMessage(guest));

//Question no 15
// let guests: string[] = [
//     "Taha",
//     "Saad",
//     "Salman"
// ];

// function printMessage(guest: string): void {
//     const startMessage: string = 'Dear ';
//     const middleMessage: string = ',\nI would be honored to have you join me for dinner. Your presence would make the evening truly special.\nSincerely,';
//     const myName: string = "\nMuhammad Owais";
//     console.log(startMessage + guest + middleMessage + myName);
// }

// const unavailableGuest: string = "Saad";
// const newGuest: string = "Shoaib";
// console.log(unavailableGuest + " can't attend dinner")
// guests = guests.map(guest => guest === unavailableGuest ? newGuest : guest);

// guests.forEach(guest => printMessage(guest));

//Question no 16
// let guests: string[] = ["Taha", "Saad", "Haseeb"];

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, please join us for dinner!`);
// });

// console.log("\nGreat news! We found a bigger dinner table!\n");

// guests.unshift("Muzammil");

// const middleIndex: number = Math.floor(guests.length / 2);
// guests.splice(middleIndex, 0, "Ahmed");

// guests.push("Shoaib");

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, please join us for dinner!`);
// });

//Question no 17
// let guests: string[] = ["Taha", "Saad", "Haseeb", "Ahmed", "Muzammil", "Shoaib"];

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, please join us for dinner!`);
// });

// console.log("\nUh-oh! The new dinner table won't arrive in time, we can only invite two people for dinner.\n");

// while (guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
// }

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner!`);
// });

// guests.splice(0, guests.length);

// console.log("Final guest list:", guests);





























