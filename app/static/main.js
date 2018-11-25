

window.onload = function() {

	if($('#activity_chart_day_1_1').length != 0){
		var activity_chart_day_1_1 = new ProgressBar.Circle('#activity_chart_day_1_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.orange, width: 10 },
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
	}

	if($('#activity_chart_day_1_2').length != 0){
		var activity_chart_day_1_2 = new ProgressBar.Circle('#activity_chart_day_1_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.yellow, width: 10 },
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
	}

	if($('#activity_chart_day_1_3').length != 0){
		var activity_chart_day_1_3 = new ProgressBar.Circle('#activity_chart_day_1_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.green, width: 10 },
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
	}

	if($('#activity_chart_day_2_1').length != 0){
		var activity_chart_day_2_1 = new ProgressBar.Circle('#activity_chart_day_2_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.blue, width: 10 },
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
	}

	if($('#activity_chart_day_2_2').length != 0){
		var activity_chart_day_2_2 = new ProgressBar.Circle('#activity_chart_day_2_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.purple, width: 10 },
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
	}

	if($('#activity_chart_day_2_3').length != 0){
		var activity_chart_day_2_3 = new ProgressBar.Circle('#activity_chart_day_2_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.grey, width: 10 },
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
	}






















	if($('#sleep_chart_day_1_1').length != 0){
		var sleep_chart_day_1_1 = new ProgressBar.Circle('#sleep_chart_day_1_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.orange, width: 10 },
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
	}

	if($('#sleep_chart_day_1_2').length != 0){
		var sleep_chart_day_1_2 = new ProgressBar.Circle('#sleep_chart_day_1_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.yellow, width: 10 },
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
	}

	if($('#sleep_chart_day_1_3').length != 0){
		var sleep_chart_day_1_3 = new ProgressBar.Circle('#sleep_chart_day_1_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.green, width: 10 },
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
	}

	if($('#sleep_chart_day_2_1').length != 0){
		var sleep_chart_day_2_1 = new ProgressBar.Circle('#sleep_chart_day_2_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.blue, width: 10 },
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
	}

	if($('#sleep_chart_day_2_2').length != 0){
		var sleep_chart_day_2_2 = new ProgressBar.Circle('#sleep_chart_day_2_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.purple, width: 10 },
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
	}

	if($('#sleep_chart_day_2_3').length != 0){
		var sleep_chart_day_2_3 = new ProgressBar.Circle('#sleep_chart_day_2_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.grey, width: 10 },
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
	}































	if($('#nutrition_chart_day_1_1').length != 0){
		var nutrition_chart_day_1_1 = new ProgressBar.Circle('#nutrition_chart_day_1_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.orange, width: 10 },
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
	}

	if($('#nutrition_chart_day_1_2').length != 0){
		var nutrition_chart_day_1_2 = new ProgressBar.Circle('#nutrition_chart_day_1_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.yellow, width: 10 },
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
	}

	if($('#nutrition_chart_day_1_3').length != 0){
		var nutrition_chart_day_1_3 = new ProgressBar.Circle('#nutrition_chart_day_1_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.green, width: 10 },
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
	}

	if($('#nutrition_chart_day_2_1').length != 0){
		var nutrition_chart_day_2_1 = new ProgressBar.Circle('#nutrition_chart_day_2_1', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.blue, width: 10 },
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
	}

	if($('#nutrition_chart_day_2_2').length != 0){
		var nutrition_chart_day_2_2 = new ProgressBar.Circle('#nutrition_chart_day_2_2', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.purple, width: 10 },
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
	}

	if($('#nutrition_chart_day_2_3').length != 0){
		var nutrition_chart_day_2_3 = new ProgressBar.Circle('#nutrition_chart_day_2_3', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.grey, width: 10 },
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
	}











	if($('#today_chart').length != 0){
		var today_chart = new ProgressBar.Circle('#today_chart', {
			color: '#aaa',
			strokeWidth: 10,
			trailWidth: 5,
			easing: 'bounce',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 4 },
			to: { color: window.chartColors.blue, width: 10 },
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
	}



















	if($('#today_chart').length != 0){
		today_chart.animate(0.85);
		today_chart.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		today_chart.text.style.fontSize = '1.6rem';
		today_chart.text.style.color =  window.chartColors.blue;
	}









	if($('#activity_chart_day_1_1').length != 0){
		activity_chart_day_1_1.animate(0.73);
		activity_chart_day_1_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_1_1.text.style.fontSize = '1.6rem';
		activity_chart_day_1_1.text.style.color =  window.chartColors.orange;
	}

	if($('#activity_chart_day_1_2').length != 0){
		activity_chart_day_1_2.animate(0.77);
		activity_chart_day_1_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_1_2.text.style.fontSize = '1.6rem';
		activity_chart_day_1_2.text.style.color =  window.chartColors.yellow;
	}

	if($('#activity_chart_day_1_3').length != 0){
		activity_chart_day_1_3.animate(0.83);
		activity_chart_day_1_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_1_3.text.style.fontSize = '1.6rem';
		activity_chart_day_1_3.text.style.color =  window.chartColors.green;
	}


	if($('#activity_chart_day_2_1').length != 0){
		activity_chart_day_2_1.animate(0.95);
		activity_chart_day_2_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_2_1.text.style.fontSize = '1.6rem';
		activity_chart_day_2_1.text.style.color =  window.chartColors.blue;
	}

	if($('#activity_chart_day_2_2').length != 0){
		activity_chart_day_2_2.animate(0.93);
		activity_chart_day_2_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_2_2.text.style.fontSize = '1.6rem';
		activity_chart_day_2_2.text.style.color =  window.chartColors.purple;
	}

	if($('#activity_chart_day_2_3').length != 0){
		activity_chart_day_2_3.animate(0.83);
		activity_chart_day_2_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		activity_chart_day_2_3.text.style.fontSize = '1.6rem';
		activity_chart_day_2_3.text.style.color =  window.chartColors.grey;
	}













	if($('#sleep_chart_day_1_1').length != 0){
		sleep_chart_day_1_1.animate(0.73);
		sleep_chart_day_1_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_1_1.text.style.fontSize = '1.6rem';
		sleep_chart_day_1_1.text.style.color =  window.chartColors.orange;
	}

	if($('#sleep_chart_day_1_2').length != 0){
		sleep_chart_day_1_2.animate(0.91);
		sleep_chart_day_1_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_1_2.text.style.fontSize = '1.6rem';
		sleep_chart_day_1_2.text.style.color =  window.chartColors.yellow;
	}

	if($('#sleep_chart_day_1_3').length != 0){
		sleep_chart_day_1_3.animate(0.89);
		sleep_chart_day_1_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_1_3.text.style.fontSize = '1.6rem';
		sleep_chart_day_1_3.text.style.color =  window.chartColors.green;
	}


	if($('#sleep_chart_day_2_1').length != 0){
		sleep_chart_day_2_1.animate(0.81);
		sleep_chart_day_2_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_2_1.text.style.fontSize = '1.6rem';
		sleep_chart_day_2_1.text.style.color =  window.chartColors.blue;
	}

	if($('#sleep_chart_day_2_2').length != 0){
		sleep_chart_day_2_2.animate(0.79);
		sleep_chart_day_2_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_2_2.text.style.fontSize = '1.6rem';
		sleep_chart_day_2_2.text.style.color =  window.chartColors.purple;
	}

	if($('#sleep_chart_day_2_3').length != 0){
		sleep_chart_day_2_3.animate(0.75);
		sleep_chart_day_2_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		sleep_chart_day_2_3.text.style.fontSize = '1.6rem';
		sleep_chart_day_2_3.text.style.color =  window.chartColors.grey;
	}















	if($('#nutrition_chart_day_1_1').length != 0){
		nutrition_chart_day_1_1.animate(0.77);
		nutrition_chart_day_1_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_1_1.text.style.fontSize = '1.6rem';
		nutrition_chart_day_1_1.text.style.color =  window.chartColors.orange;
	}

	if($('#nutrition_chart_day_1_2').length != 0){
		nutrition_chart_day_1_2.animate(0.83);
		nutrition_chart_day_1_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_1_2.text.style.fontSize = '1.6rem';
		nutrition_chart_day_1_2.text.style.color =  window.chartColors.yellow;
	}

	if($('#nutrition_chart_day_1_3').length != 0){
		nutrition_chart_day_1_3.animate(0.43);
		nutrition_chart_day_1_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_1_3.text.style.fontSize = '1.6rem';
		nutrition_chart_day_1_3.text.style.color =  window.chartColors.green;
	}


	if($('#nutrition_chart_day_2_1').length != 0){
		nutrition_chart_day_2_1.animate(0.83);
		nutrition_chart_day_2_1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_2_1.text.style.fontSize = '1.6rem';
		nutrition_chart_day_2_1.text.style.color =  window.chartColors.blue;
	}

	if($('#nutrition_chart_day_2_2').length != 0){
		nutrition_chart_day_2_2.animate(0.93);
		nutrition_chart_day_2_2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_2_2.text.style.fontSize = '1.6rem';
		nutrition_chart_day_2_2.text.style.color =  window.chartColors.purple;
	}

	if($('#nutrition_chart_day_2_3').length != 0){
		nutrition_chart_day_2_3.animate(0.77);
		nutrition_chart_day_2_3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
		nutrition_chart_day_2_3.text.style.fontSize = '1.6rem';
		nutrition_chart_day_2_3.text.style.color =  window.chartColors.grey;
	}




};