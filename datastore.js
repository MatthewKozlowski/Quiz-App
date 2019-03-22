const STORE = [
    {
        question: 'What is a baby goat called?',
        answers: [
            'A baby', 'A youth', 'A kid', 'A child'
        ],
        correctAnswer: 'A kid'
     },
     {
         question: 'Which of the following have domesticated goats not typically been used for?',
         answers: [
            'Hair', 'Meat', 'Milk', 'Horns'
         ],
         correctAnswer: 'Horns'
     },
    {
        question: 'How many different breeds of goats are there?',
        answers: [
            '75', '150', '230', '300'
        ],
        correctAnswer: '300'
    },
    {
        question: 'A female goat is called a:',
        answers: [
            'Doe', 'Jenny', 'Queen', 'Pen'
        ],
        correctAnswer: 'Doe'
    },
    {
        question: 'The proper name for the YouTube famous fainting goats is:',
        answers: [
            'Boer', 'Myotonic', 'Anglo-Nubian', 'Pygora'
        ],
        correctAnswer: 'Myotonic'
    }
];

const FEEDBACK = [
    {
       heading: 'You nailed it!',
       paragraph: 'Maybe you are more goat than you first appear?',
       image: 'https://edenhills.files.wordpress.com/2011/03/dsc_0219.jpg',
       button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'A kid no more!',
        paragraph: 'That\'s two correct! Well done!',
        image: 'https://i.imgur.com/XC5UeJr.jpg',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'Okay, so you think you can goat, huh?',
        paragraph: 'Well, so far you can!',
        image: 'https://i.imgur.com/RoLCztT.jpg',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'Goat-tacular!!',
        paragraph: 'That\'s four right, but who\'s counting?',
        image: 'http://static1.squarespace.com/static/539dffebe4b080549e5a5df5/53fcdceee4b0b801964aedb1/5a9ef692e2c483767c8ecb0b/1524340523771/beverage-cocktail-decorative-napkins-sawyer-goat-museum-outlets.jpg',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'Wow.',
        paragraph: 'That\'s...that\'s a perfect score.',
        image: 'https://s3.amazonaws.com/file.imleagues/Images/Teams/Uploaded/201802/201822142647906dafc8cf55e71f60e768dee7a828b291c.jpg',
        button: '<button type="button" class="seeResults">See Results!</button>'
    },
    {
        heading: 'Oh no! You got that one wrong!',
        paragraph: 'It\'s okay most kids don\'t know that one anyway ;)',
        image: 'data:image/jpeg;base64,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',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'You got that one wrong?',
        paragraph: 'I feel like you should have been able to use process of elimination there.',
        image: 'https://i0.wp.com/lh4.googleusercontent.com/-oG3nrZqC7BI/UZA-IiB136I/AAAAAAAAJDs/yZ-JD8v6l0A/s640/blogger-image--1256441326.jpg?ssl=1',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'Okay, so a passing grade is now unobtainable.',
        paragraph: 'You may use Google now.',
        image: 'https://images.rapgenius.com/24e49e891db44863cfb55d11dc31bd83.1000x666x1.jpg',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'Now you\'ve missed 4.',
        paragraph: 'and you had Google.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/44/db/96/doe-a-deer-a-female-deer.jpg',
        button: '<button type="button" class="moveOn"><span>Move On</span></button>'
    },
    {
        heading: 'A perfect F!',
        paragraph: 'Some teachers award full credit if you can do that!',
        image: 'https://www.crowdfunder.co.uk/uploads/projects/14789.png?1424100369',
        button: '<button type="button" class="seeResults">See Results!</button>'
    }
]