/*   Practice Doctors

Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

const createDoctor = (name, specialty, address) => {
    return {
        "Doctor's Name": name,
        "Specialty": specialty,
        "Address": address
    }

}

console.log(createDoctor("Mr.Ogel", "pediatrician", "4500 heal children's way"));


/*
Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
*/

const createPet = (name, breed) => {
    return {
        "Pet name": name,
        "Pet breed": breed
    }
}

const BowWowKennels = [];

BowWowKennels.push(createPet("Mr.Snuggles", "bulldog"));
BowWowKennels.push(createPet("Cindy", "poodle"));
BowWowKennels.push(createPet("Spike", "chihuahua"));

console.log(BowWowKennels)

/* Practice: Music Row */

/* Create an array for each of these record labels. */
const JumpStopRecords = []; // Funk & Rap
const ChattenRecords = []; // Country & Bluegrass
const PolarRecords = []; // Pop

/* Create a factory function for each possible genre (e.g. createBluegrassArtist()). */
const createArtist = (name, genre, age) => {
    return {
        "name": name,
        "genre": genre,
        "age": age
    }
}
const allArtist = [];
allArtist.push(
    createArtist("Bruce Atikins", "country", 23),
    createArtist("Jense Brown", "pop", 20),
    createArtist("Dre Funkz", "funk", 25),
    createArtist("Dusta Grimes", "rap", 21),
    createArtist("Bartholomew Danielson", "bluegrass", 23),
    createArtist("Avilee Dallas", "country", 29),
    createArtist("Austin Kinkaid", "pop", 22),
    createArtist("Loyonce Branis", "rap", 27))

console.log(allArtist)


for (let i = 0; i < allArtist.length; i++) {
    let artist = allArtist[i];

    if (artist.genre === "funk" || artist.genre === "funk") {
        JumpStopRecords.push(artist);

    } else if (artist.genre === "country" || artist.genre === "bluegrass") {
        ChattenRecords.push(artist);

    } else if (artist.genre === "pop") {
        PolarRecords.push(artist);
    } else {
        console.log("Not matching label")
    }
}

console.log(JumpStopRecords);
console.log(ChattenRecords);
console.log(PolarRecords);




/*Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.
 */