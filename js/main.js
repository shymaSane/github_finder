

document.addEventListener("DOMContentLoaded", function() {
    //1- getting the search input
    let search = document.getElementById('search_user');
    const clientId = '7c55f2d7af345f500ff9';
    const clientSecret = '5ecf2d38f0f46fd806f28743ee07ffa6c651e7a1';

    //2- add keyup event 
    search.addEventListener('keyup', getUser)

    function getUser(){
        let user = search.value;
        
        fetch(`http://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

        })
    }
    
  });