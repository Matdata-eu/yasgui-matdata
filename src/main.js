// YASGUI is loaded via CDN in index.html and available as a global variable
const yasgui = new Yasgui(document.getElementById("yasgui"), {
  // Set the SPARQL endpoint
  requestConfig: {
    endpoint: "https://dbpedia.org/sparql",
  },

  // Allow resizing of the Yasqe editor
  resizeable: true,

  // Whether to autofocus on Yasqe on page load
  autofocus: true,

  // Use the default endpoint when a new tab is opened
  copyEndpointOnNewTab: true,

  // Configuring which endpoints appear in the endpoint catalogue list
  endpointCatalogueOptions: {
    getData: () => {
      return [
        //List of objects should contain the endpoint field
        //Feel free to include any other fields (e.g. a description or icon
        //that you'd like to use when rendering)
        {
          endpoint: "https://data-interop.era.europa.eu/api/sparql",
        },
        {
          endpoint: "https://dbpedia.org/sparql",
        },
        {
          endpoint: "https://query.wikidata.org",
        },
        // ...
      ];
    },
    //Data object keys that are used for filtering. The 'endpoint' key already used by default
    keys: [],
    //Data argument contains a `value` property for the matched data object
    //Source argument is the suggestion DOM element to append your rendered item to
    renderItem: (data, source) => {
      const contentDiv = document.createElement("div");
      contentDiv.innerText = data.value.endpoint;
      source.appendChild(contentDiv);
    },
  },
});
