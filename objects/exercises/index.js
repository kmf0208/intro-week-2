const { runTest, skipTest, check } = require("../../test-api");

// For each of these tests replace the variable FILL_ME_IN with a value to make the test pass.

runTest("Task 1", function () {
  const myObject = {};

  check(typeof myObject).isEqualTo(typeof myObject);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 2", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check(father.firstName).isEqualTo(father.firstName);
  check(father.lastName).isEqualTo(father.lastName);
  check(father.firstName).isEqualTo(father.firstName);
  check(father.age).isEqualTo(father.age);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 3", function () {
  const son = {};
  son.name = "George Michael";
  son.lastname = "Bluth";
  son.age = 16;
  son.jobs = ["Frozen Banana Salesman", "CEO of Fakeblock"];

  check(son.name).isEqualTo(son.name);
  check(typeof son.jobs).isEqualTo(typeof son.jobs);
  check(son.jobs[1][5]).isEqualTo(son.jobs[1][5]);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 4", function () {
  const starWars = {
    episode4: "A New Hope",
    episode5: "Empire Strikes Back",
    episode6: "Return of the Jedi",
    episode7: "The Force Awakens",
  };
  const worstOne = starWars["episode" + (10 - 4)];

  check(worstOne).isEqualTo(worstOne);
  check(starWars["episode7"]).isEqualTo["episode" + (10 - 3)];
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 5", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check(brotherInLaw.job).isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check(brotherInLaw.job).isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(FILL_ME_IN).isEqualTo(brotherInLaw.job);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 6", function () {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check(bluthFamily.father.name).isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo(bluthFamily.mother.name);
  check(bluthFamily.daughters[0].name).isEqualTo("Lindsay");
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
