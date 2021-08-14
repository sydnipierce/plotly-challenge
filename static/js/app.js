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

    function toObject(keys, values) {
        var ind_otus = [];
        var result = {};
        for (var i = 0; i < keys.length; i++)
             result[keys[i]] = values[i]
             ind_otus.push(result);
        return ind_otus;
    }

    console.log(toObject(otu_ids, values))
    
});

