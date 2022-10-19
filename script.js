// SUPERCLASS SCHOOL
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {return this._name;}
  get level() {return this._level;}
  get numberOfStudents() {return this._numberOfStudents}
  set numberOfStudents(numberOfStudents) {
    if (typeof(numberOfStudents) === "number") {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    console.log(substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]);
  }
}

// SUBCLASS PRIMARY
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {return this._pickupPolicy;}
}
// PRIMARY INSTANCE
const lorraineHansbury = new Primary("Lorraine Hansbury", "primary", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// SUBCLASS MIDDLE
class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

// SUBCLASS HIGH
class High extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {console.log(this._sportsTeam);}
}
// HIGH INSTANCE
const alSmith = new High("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeam;
