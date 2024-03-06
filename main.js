let magnetic_field_text = document.getElementById("magnetic_field_id");
let frequency_text = document.getElementById("frequency_id");
let resistence_text = document.getElementById("resistence_id");
let button = document.getElementById("button_id");

let magnetic_field = magnetic_field_text.value;
let frequency = frequency_text.value;
let resistence = resistence_text.value;

function Calculate(time) {
    var angular_velocity = 2 * Math.PI * frequency;
    return magnetic_field * angular_velocity * Math.sin(angular_velocity * time);
}

function PlotEMF() {

    let time_coordinates = [];
    let emf_coordinates = [];
    let current_coordinates = [];

    let time = 0;
    let i = 0;

    while (time * frequency < 1) {
        time_coordinates[i] = time;
        emf_coordinates[i] = Calculate(time);
        current_coordinates[i] = emf_coordinates[i] / resistence;
        time += 0.00001;
        ++i;
    }

    let emf = {
        x: time_coordinates, 
        y: emf_coordinates, 
        mode: 'lines',
		name: 'ЭДС'
    };

    let current = {
        x: time_coordinates,
        y: current_coordinates,
        mode: 'lines',
        xaxis: 'x2',
        yaxis: 'y2',
		name: 'Инд. ток'
    };

    let together1 = {
        x: time_coordinates,
        y: emf_coordinates,
        mode: 'lines',
        xaxis: 'x3',
        yaxis: 'y3',
		name: 'ЭДС'
    };

    let together2 = {
        x: time_coordinates,
        y: current_coordinates,
        mode: 'lines',
        xaxis: 'x3',
        yaxis: 'y3',
		name: 'Инд. ток'
    };

    let data = [emf, current, together1, together2];

    let layout = {
        grid: { rows: 1, columns: 3, pattern: 'independent'},
        annotations: [ 
            { 
				text: "График зависимости ЭДС от времени)",
				font: { size: 16, color: 'blue' },
				showarrow: false,
				align: 'center',
				x: 0,
				y: 1.2,
				xref: 'paper',
				yref: 'paper',
            },
			{ 
				text: 'График зависимости инд. тока от времени',
                font: { size: 16, color: 'blue' },
				showarrow: false,
				align: 'center',
				x: 0.5,
				y: 1.2,
				xref: 'paper',
				yref: 'paper',
            },
			{ 
                text: 'Совмещенный график инд. тока и ЭДС от времени',
                font: { size: 16, color: 'blue' },
				showarrow: false,
				align: 'center',
				x: 1.1,
				y: 1.2,
				xref: 'paper',
				yref: 'paper',
            },
			{
				xref: 'paper',
				yref: 'paper',
				x: 0,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: 'ЭДС',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.26,
				xanchor: 'left',
				y: 0.5,
				yanchor: 'top',
				text: 'Вермя',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.38,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: 'Инд. ток',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.62,
				xanchor: 'left',
				y: 0.5,
				yanchor: 'top',
				text: 'Вермя',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.38,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: 'Инд. ток',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.62,
				xanchor: 'left',
				y: 0.5,
				yanchor: 'top',
				text: 'Вермя',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 0.72,
				xanchor: 'right',
				y: 1,
				yanchor: 'bottom',
				text: 'Инд. ток',
				showarrow: false
			},
			{
				xref: 'paper',
				yref: 'paper',
				x: 1,
				xanchor: 'left',
				y: 0.5,
				yanchor: 'top',
				text: 'Вермя',
				showarrow: false
			}
        ],
    };


    Plotly.newPlot('tester', data, layout);
}

button.addEventListener("click", function(e){
    magnetic_field = magnetic_field_text.value;
    frequency = frequency_text.value;
    resistence = resistence_text.value;

    PlotEMF();
});