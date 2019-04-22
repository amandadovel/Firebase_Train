// Need to create variables for train name, destination, frequency, next arrival, minutes away
// Need to get current list of trains to html table
// Need to connect to firebase and moment
// Need to connect form input to add train to current schedule table
// create button for adding new trains


// Initialize firebase 
var config = {
    apiKey: "AIzaSyAF9wVMUx0kbdP6TUw_KiyG6UT2H6PdBMM",
    authDomain: "train-dovel.firebaseapp.com",
    databaseURL: "https://train-dovel.firebaseio.com",
    projectId: "train-dovel",
    storageBucket: "train-dovel.appspot.com",
    messagingSenderId: "505931562807"
};
firebase.initializeApp(config);

var database = firebase.database();

// Button for adding trains
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrainTime = $("#first-train-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrainTime,
        frequency: trainFrequency
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // Log to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

// Create Firebase event for adding train to the database and a row in the HTML when user adds an entry
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().destination;
    var trainFrequency = childSnapshot.val().frequency;

    // Log train info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);
})


