window.onload = function(){
  createFoodGraphs();
  createSleepGraphs();
  createActivityGraphs();
}

function createSleepGraphs(){
  // slept hours graphs
  var graphs = document.getElementsByClassName("hours_slept_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
  // sleep quality graphs
  var graphs = document.getElementsByClassName("sleep_quality_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
}

function createFoodGraphs(){
  // Carb graphs
  var graphs = document.getElementsByClassName("carb_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
  // Fat graphs
  var graphs = document.getElementsByClassName("fat_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
  // protein graphs
  var graphs = document.getElementsByClassName("protein_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
}

function createActivityGraphs(){
  // step graphs
  var graphs = document.getElementsByClassName("steps_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
  // stairs graphs
  var graphs = document.getElementsByClassName("stairs_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
  // distance graphs
  var graphs = document.getElementsByClassName("distance_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i]);
  }
}

function createProgressGraph(reference){
  var value = reference.getAttribute("data");
  var procentValue = value;
  var color;
  if (value < 0.33){
    color = window.chartColors.yellow;
    console.log("33");
  }
  else if (value < 0.66){
    color = window.chartColors.orange;
  }
  else if (value <= 1.2){
    color = '#00b359';
  }
  else {
    color = '#e60000';
    value = 1;
  }

  console.log(color);
  var graph = new ProgressBar.Circle(reference, {
    color: color,
    strokeWidth: 10,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 800,
    text: {
      autoStyleContainer: false
    },
    from: { color: color, width: 4 },
    to: { color: color, width: 10 },
    step: function(state, circle) {
      console.log("stepcolor"+color);
      circle.path.setAttribute('stroke', color);
      //circle.path.setAttribute('stroke-width', state.width);
    }
  });
  graph.animate(value);
  graph.setText(Math.round(procentValue * 100) + "%");
  graph.text.style.fontFamily = 'Graduate, cursive';
  graph.text.style.fontSize = '1rem';
  graph.text.style.color =  color;
  return graph;
}
