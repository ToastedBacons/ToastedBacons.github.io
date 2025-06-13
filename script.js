function searchArticles() {
  const query = document.getElementById('search').value;
  document.getElementById('results').innerHTML = `Searching for: <b>${query}</b> (connect API here)`;
  searchAPI(query);
}

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchArticles();
  }
});
async function searchAPI(query){
  try{
    const response = await fetch(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json`);
    const output = await response.json();
    console.log(output);
  } catch(error){
    console.error("API error", error)
  }

}