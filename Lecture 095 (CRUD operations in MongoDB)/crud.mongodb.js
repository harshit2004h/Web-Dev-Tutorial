use("CrudDatabase");
console.log(db);

/*For Reading*/

db.createCollection("courses");
db.courses.insertOne({
  name: "Web Dev Course",
  price: 100,
  assignments: 12,
  projects: 2,
});

db.courses.insertMany([
  {
    name: "Data Science Course",
    price: 150,
    assignments: 15,
    projects: 3,
  },
  {
    name: "Machine Learning Course",
    price: 200,
    assignments: 20,
    projects: 4,
  },
  {
    name: "AI Course",
    price: 250,
    assignments: 25,
    projects: 5,
  },
  {
    name: "Cyber Security Course",
    price: 180,
    assignments: 18,
    projects: 3,
  },
  {
    name: "Blockchain Course",
    price: 220,
    assignments: 22,
    projects: 4,
  },
  {
    name: "Cloud Computing Course",
    price: 170,
    assignments: 17,
    projects: 3,
  },
  {
    name: "DevOps Course",
    price: 160,
    assignments: 16,
    projects: 3,
  },
  {
    name: "Software Engineering Course",
    price: 140,
    assignments: 14,
    projects: 3,
  },
  {
    name: "Big Data Course",
    price: 190,
    assignments: 19,
    projects: 4,
  },
]);

let a = db.courses.find({ price: 100 });
console.log(a.count());
console.log(a.toArray());

/*For Updating*/
db.courses.updateOne({ price: 100 }, { $set: { price: 6969 } });

/*For Deleting- deleteone, deletemany*/
