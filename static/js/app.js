// Select relevant HTML elements
var bar = d3.select("#bar");
var gauge = d3.select("#gauge");
var bubble = d3.select("#bubble");

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
    var values = samples.map(x => x.sample_values);
    console.log(otu_ids);
    console.log(values);

    // Initialize charts
    function init() {
        data = [{
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16] }];
      
        Plotly.newPlot("plot", data);
      }
    
    // Populate dropdown with IDs
    d3.select("#selDataset").selectAll("option").data(names)
    .enter()
    .append("option")
    .text(function(d) {
        return d;
    });

    // 
    // var bardata = [trace1];
    // var gaugedata = [trace2];
    // var bubbledata = [trace3];

    // Create event listener
    d3.select("#selDataset").on("change", refresh());

    // Define function (chart update) for event listener
    function refresh() {
        var input = d3.select("#selDataset").property("value");

    }

    // function refresh() {
    //     plotly.(bar, trace1);
    //     plotly.
    // };
});