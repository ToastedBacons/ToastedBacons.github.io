function searchArticles() {
  const query = document.getElementById('search').value;
    document.getElementById('results').innerHTML = `Searching for: <b>${query}</b> (connect API here)`;

}
document.addEventListener('keyup' (event) => { }){
    if (event.key === 'Enter'){
        searchArticles();
    }
}