$(function () {
    console.log("document is ready!");

    // 1. MAKE THE PICTURE DRAGGABLE
    $("#puppy-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        drag: function () {
            calculateWow(); // live scoring as the user drags
        },
        stop: function () {
            calculateWow(); // final update
        }
    });

    // 2. SCORE CALCULATION
    function calculateWow() {
        var pos = $("#puppy-pic").position();
        // score value based on the picture location
        var score = Math.floor(pos.top + pos.left);
        console.log(score);
        // Display score
        $("#score-display").text(score);
        // Progress bar (max 1000... can be changed)
        var percent = Math.min((score / 1000) * 100, 100);
        $("#score-progress").css("width", percent + "%");
        // Status message
        if (score < 0) {
            $("#status-message").text("You can do this!");
        } else if (score < 250) {
            $("#status-message").text("Puppy is warming up...");
        } else if (score < 500) {
            $("#status-message").text("Wow! Puppy is gaining power!");
        } else if (score < 800) {
            $("#status-message").text("Amazing. Look At You Go. Wow.");
        } else {
            $("#status-message").text("AWESOME WORK YOU ACHIEVED THE HIGHEST SCORE YOU WIN");
        }
    }
});