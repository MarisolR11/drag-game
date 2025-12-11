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
            $("#status-message").text("How in the world did you do this!");
        } else if (score < 300) {
            $("#status-message").text("Doge is warming up...");
        } else if (score < 600) {
            $("#status-message").text("Wow! Doge is gaining power!");
        } else if (score < 900) {
            $("#status-message").text("Much skill. Very drag. Wow.");
        } else {
            $("#status-message").text("MAXIMUM WOW ACHIEVED YOU HAVE WON YOU ARE THE BEST");
        }
    }
});