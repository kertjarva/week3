

let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hermione', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, I am ${this.firstName}.`);
        }
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hermione', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, I am ${this.firstName}.`);
        }        
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Harry', 'Hedwig'],
        introduce: function() {
            console.log(`Greetings, I am ${this.firstName}.`);
        }        
    },
    {
        firstName: 'Hedwig',
        age: 'TBA',
        isWizard: false,
        friends: ['Ron', 'Hermione', 'Harry'],
        introduce: function() {
            console.log(`${this.firstName} makes noises.`);
        }                
    }
]


let studentsFilter = friends.filter(friend => {
    if(friend.isWizard === true) {
        return friend;
    }
});

let studentsList = studentsFilter.map(student => {
    return student.firstName;
});

const studentsSort = studentsList.sort((a, b) => {
    return b.localeCompare(a)
});


console.log(studentsSort)

