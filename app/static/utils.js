'use strict';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = Months[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

	// Google Analytics
	/* eslint-disable */
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-28909194-3', 'auto');
		ga('send', 'pageview');
	}
	/* eslint-enable */

}(this));

function line_chart(elem, param_datasets, param_labels, param_title) {
    var datasets_object = [];

    for (var i = 0; i < param_datasets.length; i++) {
        datasets_object[i] = {
            label: param_datasets[i]['label'],
            backgroundColor: param_datasets[i]['Color'],
            borderColor: param_datasets[i]['Color'],
            fill: false,
            data: param_datasets[i]['data'],
        }
    }

    var line_config = {
        type: 'line',
        data: {
            labels: param_labels,
            datasets: datasets_object,
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: param_title
            },
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                }]
            }
        }
    };

    var line_ctx = document.getElementById(elem).getContext('2d');
    window.myLine = new Chart(line_ctx, line_config);
}

function bar_chart(chart_elem, chart_dataset, chart_labels, chart_title) {
        if ($(chart_elem).length == 0) {
            console.error('Chart element [' + chart_elem + '] could not be found! ');
            return;
        }

        if ($(chart_elem)[0].nodeName.toLowerCase() != "canvas") {
            console.error('Chart element must be canvas instead of "' + $(chart_elem)[0].nodeName.toLowerCase() + '"');
            return;
        }

        if (!($.isArray(chart_dataset))) {
            console.error('Chart Dataset type must be an array!');
            return;
        }

        if (!($.isArray(chart_labels))) {
            console.error('Chart labels type must be an array!');
            return;
        }

        var chart_dataset = {
            labels: chart_labels,
            datasets: chart_dataset
        };


        var ctx = $(chart_elem)[0].getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: chart_dataset,
            options: {
                responsive: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: chart_title
                }
            }
        });
    }