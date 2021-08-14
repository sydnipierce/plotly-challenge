// Select relevant HTML elements
var bar = d3.select("#bar");
var gauge = d3.select("#gauge");
var bubble = d3.select("#bubble");

// Read belly button data
d3.json("../data/samples.json").then((data) => {
    // console.log(data)
    //  Create arrays of data points in JSON
    var names = data.names.map(x => x);
    var metadata = data.metadata.map(x => x);
    var samples = data.samples.map(x => x);
    console.log(names);
    console.log(metadata);
    console.log(samples);

    var otu_ids = samples.map(x => x.otu_ids);
    var values = samples.map(x => x.sample_values);
    console.log(otu_ids);
    console.log(values);

    trace1 = 
    
    d3.select("#selDataset").selectAll("option").data(names)
    .enter()
    .append("option")
    .text(function(d) {
        return d;
    });

    var input = d3.select("#selDataset").property("value");

    input.on("change", refresh());

    function refresh() {
        plotly.(bar, trace1);
        plotly.
    };
});