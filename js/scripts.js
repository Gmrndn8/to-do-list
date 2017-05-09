//BS logic
function toDo(objective, duration) {
  this.objective = objective;
  this.time = duration;
}

toDo.prototype.completeobjective = function() {
  return this.objective + " " + this.time;
}
//UI logic
$(document).ready(function() {
  $("form#new-objective").submit(function(event) {
    event.preventDefault();

    var inputtedObjective = $("input#new-objective").val();
    var inputtedDuration = $("input#new-duration").val();

    var newToDo = new toDo(inputtedObjective, inputtedDuration);

    $("ul#all").append("<li><span class='objective'>" + inputtedObjective + " - " + inputtedDuration + "</span></li>")
    $(".objective").last().click(function() {
      $("ul#completed").append("<li>" + newToDo.completeobjective() + "</li>");
    });
    $("input#new-objective").val("");
    $("input#new-duration").val("");
  })
});
