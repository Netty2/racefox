window.onload = function(){
  createFoodGraphs();
  createSleepGraphs();
  createActivityGraphs();
}

function createSleepGraphs(){
  // sleep quality graphs
  var graphs = document.getElementsByClassName("sleep_quality_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.yellow);
    graph.animate(graphs[i].getAttribute("data"));
  }
  // slept hours graphs
  var graphs = document.getElementsByClassName("hours_slept_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.orange);
    graph.animate(graphs[i].getAttribute("data"));
  }

}

function createFoodGraphs(){
  // Carb graphs
  var graphs = document.getElementsByClassName("carb_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.yellow);
    graph.animate(graphs[i].getAttribute("data"));
  }
  // Fat graphs
  var graphs = document.getElementsByClassName("fat_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.orange);
    graph.animate(graphs[i].getAttribute("data"));
  }
  // protein graphs
  var graphs = document.getElementsByClassName("protein_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.red);
    graph.animate(graphs[i].getAttribute("data"));
  }
}

function createActivityGraphs(){
  // step graphs
  var graphs = document.getElementsByClassName("steps_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.yellow);
    graph.animate(graphs[i].getAttribute("data"));
  }
  // stairs graphs
  var graphs = document.getElementsByClassName("stairs_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.orange);
    graph.animate(graphs[i].getAttribute("data"));
  }
  // distance graphs
  var graphs = document.getElementsByClassName("distance_chart");
  for (var i = 0; i < graphs.length; i++){
    var graph = createProgressGraph(graphs[i], window.chartColors.red);
    graph.animate(graphs[i].getAttribute("data"));
  }
}

function createProgressGraph(reference, color){
  var graph = new ProgressBar.Circle(reference, {
    color: '#aaa',
    strokeWidth: 10,
    trailWidth: 5,
    easing: 'bounce',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 4 },
    to: { color: color, width: 10 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  graph.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  graph.text.style.fontSize = '1.6rem';
  graph.text.style.color =  color;
  return graph;
}

 if($('#line_canvas').length != 0){
    var line_ctx = document.getElementById('line_canvas').getContext('2d');
    window.myLine = new Chart(line_ctx, line_config);
 }