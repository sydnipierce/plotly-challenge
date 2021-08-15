// Read belly button data
d3.json("../data/samples.json").then((data) => {
    // console.log(data)

    //  Create arrays of data points from JSON
    var names = data.names.map(x => x);
    var metadata = data.metadata.map(x => x);
    var samples = data.samples.map(x => x);
    console.log(names);
    console.log(metadata);
    console.log(samples);

    var otu_ids = samples.map(x => x.otu_ids);
    var otu_labels = samples.map(x => x.otu_labels);
    console.log(otu_ids);

    // Initialize charts
    function init() {
        // Create initial chart variables
        // var id = names[0];
        var meta = metadata[0];
        // var gender = metadata[0].gender;
        // var age = metadata[0].age;
        // var location = metadata[0].location;
        // var bbtype = metadata[0].bbtype;
        // var wfreq = metadata[0].wfreq;
        var barx = samples[0].sample_values.slice(0, 10);
        var bary = otu_ids[0].slice(0, 10);
        var barhov = otu_labels[0].slice(0, 10);

        // Populate dropdown with IDs
        Object.entries(meta).forEach(([key, value]) => {
            // Log the key and value
            d3.select("#sample-metadata")
            .append("p")
            .text('${key} value');
            console.log(`Key: ${key} and Value ${value}`)
        });

        // Create initial chart traces
        var bartrace = {
            type: 'bar',
            x: barx,
            y: bary,
            orientation: 'h'
        };

        // Create initial chart data
        var bardata = [bartrace];
      
        Plotly.newPlot("bar", bardata);

        d3.select("#sample-metadata").html('<p>ID: ${id}</p><p>ETHNICITY: ${ethnicity}</p><p>GENDER: ${gender}</p><p>AGE: ${age}</p><p>LOCATION: ${location}</p><p>BBTYPE: ${bbtype}</p><p>WFREQ: ${wfreq}</p>');
    };
    
    // Populate dropdown with IDs
    d3.select("#selDataset").selectAll("option").data(names)
    .enter()
    .append("option")
    .text(function(d) {
        return d;
    });

    // // Create event listener
    // d3.select("#selDataset").on("change", refresh());

    // // Define function (chart update) for event listener
    // function refresh() {
    //     // Collect ID selected by user
    //     var input = d3.select("#selDataset").property("value");

    //     // Create x and y arrays for bar chart
    //     var x = [];
    //     var y = [];

    //     for (var i = 0; i < names.length; i++) {
    //         if (input === names[i]) {
    //             x = values[i].slice(0, 10);
    //             y = otu_ids[i].slice(0, 10);


    //         };
    //     };
        
        // Note the extra brackets around 'x' and 'y'
        // Plotly.restyle("plot", "x", [x]);
        // Plotly.restyle("plot", "y", [y]);
    // };

    // function refresh() {
    //     plotly.(bar, trace1);
    //     plotly.
    // };

    init();
});