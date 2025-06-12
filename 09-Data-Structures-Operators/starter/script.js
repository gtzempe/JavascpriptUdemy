'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Από το πρώτο αντικείμενο του πίνακα books, πάρε τις μεταβλητές title και language
// const firstBook = books[0];
// const { title, language } = firstBook;
// console.log({ title, language });

// Από το δεύτερο βιβλίο πάρε τη μεταβλητή rating από το goodreads
// First solving
// const secondBook = books[1];
// const { thirdParty } = secondBook;
// console.log(thirdParty.goodreads.rating);

// Second solving
// const {
//   thirdParty: {
//     goodreads: { rating },
//   },
// } = books[1];
// console.log(rating);

// Πάρε τις δύο μεταβλητές firstAuthor και secondAuthor από το author array
// const { author } = books[2];
// console.log(author[0]);
// console.log(author[1]);

// Χρησιμοποίησε alias για να το μετονομάσεις
// const { ISBN: bookISBN } = books[3];
// console.log(bookISBN);

// Αν δεν υπάρχει, βάλε default τιμή 1
// const { edition = 1 } = books[7];
// console.log(edition);

// 🧠 1. Loop με destructuring

// Πέρνα από όλα τα books και για κάθε ένα εκτύπωσε title και programmingLanguage χρησιμοποιώντας destructuring μέσα στο loop.

// for (const { title, programmingLanguage = 'N/A' } of books) {
//   console.log(
//     `Title: ${title} - Language: ${
//       programmingLanguage ? programmingLanguage : 'N/A'
//     }`
//   );
// }

// ⸻

// 💡 2. Function parameters με destructuring

// Γράψε μια function:
// function printBookSummary(book) { ... }

// Μέσα της, κάνε destructuring και τύπωσε:
// 	•	title
// 	•	author[0] ως mainAuthor
// 	•	goodreads.rating ως rating

// function printBookSummary(book) {
//   const {
//     title,
//     author,
//     thirdParty: {
//       goodreads: { rating },
//     },
//   } = book;

//   const mainAuthor = author[0];
//   console.log(`Title: ${title}`);
//   console.log(`Author: ${mainAuthor}`);
//   console.log(`Rating: ${rating}`);
// }

// printBookSummary(books[1]);

// }

// ⸻

// 🚨 3. Destructuring με default και alias

// Από το βιβλίο books[5], πάρε:
// 	•	title ως bookTitle
// 	•	edition με default 1
// 	•	programmingLanguage ως lang με default 'N/A'

// const { title: bookTitle, edition = 1, programmingLanguage } = books[5];

// const lang = programmingLanguage ?? 'N/A';
// console.log(`Title: ${bookTitle}`);
// console.log(`Edition: ${edition}`);
// console.log(`Programming Language: ${lang}`);

// ⸻

// 🌀 4. Nested destructuring στο array destructuring

// Πάρε από το books array:
// 	•	Το δεύτερο και τρίτο βιβλίο
// 	•	Κάνε destructuring στο title και pages και τύπωσε:
// “Book: [title], Pages: [pages]”

// const [{ title: title1, pages: pages1 }, { title: title2, pages: pages2 }] =
//   books;

// console.log(`Book: ${title1}, Pages:${pages1}`);
// console.log(`Book: ${title2}, Pages:${pages2}`);

// ⸻

// 🔄 5. Function που δέχεται array και επιστρέφει destructured τιμές

// Γράψε function:
// function getTopAuthors(book) { ... }

// που παίρνει ένα book και επιστρέφει τους δύο πρώτους authors.

function getTopAuthors(book) {
  const { author } = book;
  const firstAuthor = author[0];
  const secondAuthor = author[1];
  console.log(`FirstAuthor: ${firstAuthor}, SecondAuthor: ${secondAuthor}`);
}

getTopAuthors(books[3]);
