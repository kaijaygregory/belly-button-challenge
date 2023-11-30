const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Generate an initial set of plots when the page loads
let initialDisplay =  "940";
generatePlot(initialDisplay);

function optionChanged(value) {
    generatePlot(value);
}

// Generate the plots by retrieving data from the url
function generatePlot(input) {
    d3.json(url).then(function(data) {
        console.log(data);
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == input);
        let result = resultArray[0];
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Create the bar chart
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];
        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);

        // Create the bubble chart
        let bubbleData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }
            }
        ];
        let bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        // Create the gauge chart
        let metadata = data.metadata;
        let gaugeArray = metadata.filter(metaObj => metaObj.id == input);
        let gaugeResult = gaugeArray[0];
        let washFrequency = gaugeResult.wfreq;
        let gaugeData = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: washFrequency,
                title: { text: "Belly Button Washing Frequency<br>Scrubs per Week" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [null, 9] },
}
            }
        ];
        let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    }
    );
}

// Display the sample metadata, i.e., an individual's demographic information
function displayMetadata(input) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata;
        let resultArray = metadata.filter(metaObj => metaObj.id == input);
        let result = resultArray[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

// Display the sample metadata and plots when the dropdown option is changed
function optionChanged(value) {
    generatePlot(value);
    displayMetadata(value);
}

// Initialize the page with the first value
function init() {
    let dropdown = d3.select("#selDataset");
    d3.json(url).then(function(data) {
        console.log(data);
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
        generatePlot(data.names[0]);
        displayMetadata(data.names[0]);
    });
}

init();