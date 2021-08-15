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
    // console.log(otu_ids);

    // Initialize charts
    function init() {
        // Create initial chart variables
        var meta = metadata[0];
        var val = samples[0].sample_values;
        var iden = otu_ids[0];
        var lab = otu_labels[0];

        // Populate dropdown with IDs
        Object.entries(meta).forEach(([key, value]) => {
            // Log the key and value
            d3.select("#sample-metadata").select("p")
            .data([key, value])
            .enter()
            .append("p")
            .text(function(d) {return d.key, d.value;});
            // console.log(`Key: ${key} and Value ${value}`)
        });

        // Create initial chart traces
        var bartrace = {
            type: 'bar',
            x: val.slice(0, 10),
            y: iden.slice(0, 10),
            text: lab.slice(0, 10),
            orientation: 'h'
        };

        var bubtrace = {
            x: iden,
            y: val,
            mode: 'markers',
            marker: {
                size: val,
                color: iden
            }
        };

        // Create initial layouts
        var barlayout = {
            yaxis: {
                type: 'category',
                title: 'OTU ID'
            }
        };

        var bublayout = {
            showlegend: false
        };

        // Create initial chart data
        var bardata = [bartrace];
        var bubdata = [bubtrace];
      
        Plotly.newPlot("bar", bardata, barlayout);
        Plotly.newPlot("bubble", bubdata, bublayout);
        // Plotly.newPlot("gauge", gaugedata, gaugelayout);

        // d3.select("#sample-metadata").html('<p>ID: ${id}</p><p>ETHNICITY: ${ethnicity}</p><p>GENDER: ${gender}</p><p>AGE: ${age}</p><p>LOCATION: ${location}</p><p>BBTYPE: ${bbtype}</p><p>WFREQ: ${wfreq}</p>');
    };
    
    // Populate dropdown with IDs
    d3.select("#selDataset").selectAll("option").data(names)
    .enter()
    .append("option")
    .text(function(d) {
        return d;
    });

    // Create event listener
    d3.select("#selDataset").on("change", 

    // Define function (chart update) for event listener
    function refresh() {
        // Collect ID selected by user
        var input = d3.select("#selDataset").property("value");

        for (var i = 0; i < names.length; i++) {
            if (input === names[i]) {
                meta = metadata[i];
                val = samples[i].sample_values;
                iden = otu_ids[i];
                lab = otu_labels[i];
                var val_slice = val.slice(0, 10);
                var iden_slice = iden.slice(0, 10);
                var lab_slice = lab.slice(0, 10);

            var barupdate = {
                x: val_slice,
                y: iden_slice,
                text: lab_slice
            };

            var bubupdate = {
                x: iden,
                y: val,
                'marker.size': val,
                'marker.color': iden
            };

            Plotly.restyle("bar", barupdate, [0]);
            Plotly.restyle("bubble", bubupdate, [0]);
            };
        };
    });

    // Initialize the page
    init();
});