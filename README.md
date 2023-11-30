# __belly-button-challenge__

# __Belly Button Biodiversity Dashboard__

This interactive dashboard explores the Belly Button Biodiversity dataset, revealing microbial species present in human navels. The dashboard visualizes the dataset using D3 and Plotly.js libraries to generate bar and bubble charts along with sample metadata display.

__Background__

The Belly Button Biodiversity dataset catalogs the microbes (operational taxonomic units - OTUs) found in human navels. The dataset highlights that a few microbial species are prevalent in over 70% of individuals, while others are relatively rare.

__Features Implemented__

* Utilizes D3 library to fetch and read samples.json.
* Generates a horizontal bar chart displaying the top 10 OTUs found in an individual, with sample values, OTU IDs as labels, and OTU labels as hovertext.
* Creates a bubble chart visualizing each sample's OTU data with OTU IDs, sample values, marker size, colors, and labels.
* Displays an individual's demographic metadata, showcasing key-value pairs from the metadata JSON object.
* Updates all plots dynamically when a new sample is selected.
* Implemented an adapted Gauge Chart to represent the weekly washing frequency of the individual.

__Screenshots__

__![Bar Chart]__(https://github.com/kaijaygregory/belly-button-challenge/blob/main/Images/Bar%20Chart.png)
__![Bubble Chart]__(https://github.com/kaijaygregory/belly-button-challenge/blob/main/Images/Bubble%20Chart.png)
__![Guage Chart]__(https://github.com/kaijaygregory/belly-button-challenge/blob/main/Images/Guage%20Chart.png)

__How to Run__

To view the Belly Button Biodiversity Dashboard, simply access the [GitHub Pages deployment]().

__References__

- Hulcr, J. et al. (2012) "A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable."
  [Link to Research](https://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
 

