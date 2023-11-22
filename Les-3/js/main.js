// const person = ` {
//   "firstname": "Judeska",
//   "email": "judeska@example.com"
// }`;

// const objPerson = JSON.parse(person);
// console.log("firstname :", objPerson.firstname);
// console.log("email :", objPerson.email);

// // 1b

// const person2 = `{
//     "id": 1,
//     "firstname": "John",
//     "lastname": "Doe",
//     "email": "johndoe@example.com",
//     "birthDate": "1973-01-22",
//     "phone": "(555) 555-1234",
//     "website": "www.johndoe.com"
//   }`;

// const objPerson2 = JSON.parse(person2);
// console.log("firstname :", objPerson2.firstname);
// console.log("lastname :", objPerson2.lastname);

// //   2

// // Maak een string variabele met de volgende string waarde:

// const opject = `{
//   "id": 1,
//   "slug": "lorem-ipsum",
//   "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
//   "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
//   "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
//   "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
//   "status": "published",
//   "category": "lorem",
//   "publishedAt": "04/02/2023 13:25:21",
//   "updatedAt": "14/03/2023 17:22:20",
//   "userId": 1
// }`;

// const objOpject = JSON.parse(opject);
// console.log("title", objOpject.title);
// console.log("content", objOpject.content);
// console.log("publishedAt", objOpject.publishedAt);

// 3

// const opjects = `{
//     "id": 4,
//     "firstname": "Emily",
//     "lastname": "Davis",
//     "email": "emilydavis@example.com",
//     "birthDate": "1974-11-30",
//     "login":
//      {
//       "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
//       "username": "emilydavis",
//       "password": "jsonplaceholder.org",
//       "md5": "c1328472c5794a25723600f71c1b4586",
//       "sha1": "35544a31cc19bd6520af116554873167117f4d94",
//       "registered": "2022-07-10T11:21:20.033Z"
//     },
//     "address": {
//       "street": "321 Maple Street",
//       "suite": "Apt. 50",
//       "city": "Anytown",
//       "zipcode": "12345-6789",
//       "geo": {
//         "lat": "42.9012",
//         "lng": "-71.5678"
//       }
//     },
//     "phone": "(555) 555-3456",
//     "website": "www.emilydavis.com",
//     "company": {
//       "name": "GHI Corporation",
//       "catchPhrase": "Your success is our priority",
//       "bs": "Consulting"
//     }
//   }`;

// const objOpjects = JSON.parse(opjects);
// console.log("email",objOpjects.email);
// console.log("username",objOpjects.login.username);
// console.log("city",objOpjects.address.city);
// console.log("company",objOpjects.company.name);

// 4
// ---------------
// Maak een string variabele met de volgende string waarde:
// const opject2 = `{
//   "id": 11,
//   "postId": 3,
//   "userId": 2,
//   "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
// }`;
// const objOpject2 = JSON.parse(opject2);
// console.log(objOpject2);

// Converteer dit json object naar JS object.
// Toon in console.log() het hele object.

// Opdr. 5
// --------------
// Maak een string variabele met de volgende string waarde:
// const objOpjects2 = `[
//   {
//     "id": 1,
//     "postId": 1,
//     "userId": 1,
//     "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     "id": 2,
//     "postId": 1,
//     "userId": 1,
//     "comment": "Nulla quis libero vel orci rutrum suscipit."
//   },
//   {
//     "id": 3,
//     "postId": 3,
//     "userId": 2,
//     "comment": "Cras ac elit sit amet mi placerat bibendum."
//   }
// ]`;
// const opjectComment = JSON.parse(objOpjects2);
// for (let i = 0; i < opjectComment.length; i++) {
//     console.log(opjectComment[i].comment);
//   }

// Converteer dit json object naar JS object.
// Toon in console.log() van elk object alleen de comment.

// Opdr. 6
// -----------
// Maak een string variabele met de volgende string waarde:
// const opjects3 = `[
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   },
//   {
//     "albumId": 1,
//     "id": 4,
//     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     "url": "https://via.placeholder.com/600/d32776",
//     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//   },
//   {
//     "albumId": 1,
//     "id": 5,
//     "title": "natus nisi omnis corporis facere molestiae rerum in",
//     "url": "https://via.placeholder.com/600/f66b97",
//     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//   },
//   {
//     "albumId": 1,
//     "id": 6,
//     "title": "accusamus ea aliquid et amet sequi nemo",
//     "url": "https://via.placeholder.com/600/56a8c2",
//     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//   }
// ]`;
// const ul = document.querySelector("ul");
// const objOpjects3 = JSON.parse(opjects3);

// for (let i = 0; i < objOpjects3.length; i++) {
//   const element = objOpjects3[i];
//   ul.innerHTML += `<li>${element.title}</li>`;
//   ul.innerHTML += `<li>${element.url}</li>`;
//   ul.innerHTML += "<hr>";
// }

// Converteer dit json object naar JS object.
// Toon op de webpagina de title en de url als <li> items in <ul>.

// Opdr. 7
// -------------
// Zet het object hieronder om in JSON:
// const person3 = {
//   name: "John",
//   age: 20,
//   marks: {
//     science: 70,
//     math: 75,
//   },
// };
// const objPerson3 = JSON.stringify(person3);
// console.log(objPerson3);

// Toon de JSON data in console.log()

// Opdr. 8
// -------------
// Zet het object hieronder om in JSON:
const persons = [
  {
    name: "Wolverine",
    age: 38,
    marks: {
      science: 20,
      math: 15,
    },
  },
  {
    name: "Xavier",
    age: 64,
    marks: {
      science: 95,
      math: 90,
    },
  },
  {
    name: "Magneto",
    age: 68,
    marks: {
      science: 90,
      math: 85,
    },
  },
];
const objPersons = JSON.stringify(persons);
console.log(objPersons);
// Toon de JSON data in console.log()
