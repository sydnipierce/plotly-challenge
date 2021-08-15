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

    // // Initialize charts
    // function init() {
    //     data = [{
    //       x: [1, 2, 3, 4, 5],
    //       y: [1, 2, 4, 8, 16] }];

    //     var id = names[0];
    //     var ethnicity = metadata[0].ethnicity;
    //     var gender = metadata[0].gender;
    //     var age = metadata[0].age;
    //     var location = metadata[0].location;
    //     var bbtype = metadata[0].bbtype;
    //     var wfreq = metadata[0].wfreq;
    //     var bartrace = ;
    //     var gaugetrace = ;
    //     var bubbletrace = ;
      
    //     Plotly.newPlot("plot", data);
    //   };
    
    // // Populate dropdown with IDs
    // d3.select("#selDataset").selectAll("option").data(names)
    // .enter()
    // .append("option")
    // .text(function(d) {
    //     return d;
    // });

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
        
    //     // Note the extra brackets around 'x' and 'y'
    //     Plotly.restyle("plot", "x", [x]);
    //     Plotly.restyle("plot", "y", [y]);
    //     }
    // };

    // // function refresh() {
    // //     plotly.(bar, trace1);
    // //     plotly.
    // // };

    // init();
});