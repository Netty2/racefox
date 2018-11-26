window.onload = function(){
  createFoodGraphs();
  createSleepGraphs();
}

function createSleepGraphs(){
  // sleep quality graphs
  var carbGraphs = document.getElementsByClassName("sleep_quality_chart");
  for (var i = 0; i < carbGraphs.length; i++){
    var carbProgressGraph = createProgressGraph(carbGraphs[i], window.chartColors.yellow);
    carbProgressGraph.animate(carbGraphs[i].getAttribute("data"));
  }
  // slept hours graphs
  var carbGraphs = document.getElementsByClassName("hours_slept_chart");
  for (var i = 0; i < carbGraphs.length; i++){
    var carbProgressGraph = createProgressGraph(carbGraphs[i], window.chartColors.orange);
    carbProgressGraph.animate(carbGraphs[i].getAttribute("data"));
  }

}

function createFoodGraphs(){
  // Carb graphs
  var carbGraphs = document.getElementsByClassName("carb_chart");
  for (var i = 0; i < carbGraphs.length; i++){
    var carbProgressGraph = createProgressGraph(carbGraphs[i], window.chartColors.yellow);
    carbProgressGraph.animate(carbGraphs[i].getAttribute("data"));
  }
  // Fat graphs
  var carbGraphs = document.getElementsByClassName("fat_chart");
  for (var i = 0; i < carbGraphs.length; i++){
    var carbProgressGraph = createProgressGraph(carbGraphs[i], window.chartColors.orange);
    carbProgressGraph.animate(carbGraphs[i].getAttribute("data"));
  }
  // protein graphs
  var carbGraphs = document.getElementsByClassName("protein_chart");
  for (var i = 0; i < carbGraphs.length; i++){
    var carbProgressGraph = createProgressGraph(carbGraphs[i], window.chartColors.red);
    carbProgressGraph.animate(carbGraphs[i].getAttribute("data"));
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
  return graph
}
