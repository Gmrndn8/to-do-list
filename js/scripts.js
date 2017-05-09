//BS logic
function toDo(objective, duration) {
  this.objective = objective;
  this.time = duration;
}
//UI logic
$(document).ready(function() {
  $("form#new-objective").submit(function(event) {
    event.preventDefault();

    var inputtedObjective = $("input#new-objective").val();
    var inputtedDuration = $("input#new-duration").val();

    var newtoDo = new toDo(inputtedObjective, inputtedDuration);

    $("ul#all").append("<li><span ='objective'>" + inputtedObjective + " - " + inputtedDuration + "</span></li>")
    
  })
});
