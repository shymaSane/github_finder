

document.addEventListener("DOMContentLoaded", function() {
    //1- getting the search input
    let search_input = document.getElementById('search_user');
    let search = document.querySelector('.btn_search');
    const clientId = '7c55f2d7af345f500ff9';
    const clientSecret = '5ecf2d38f0f46fd806f28743ee07ffa6c651e7a1';

    //2- add keyup event 
    search.addEventListener('click', getUser)

    function getUser(){
        let user = search_input.value;
        
        fetch(`http://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output ="";
            // change image
            let image = document.querySelector('.profile_img');
            image.src = data.avatar_url;

            // click to reach profile
            let profile_a = document.querySelector('.profile_a');
            profile_a.href = data.html_url;

            // followers and following button
            let button1 = document.querySelector('.button1');
            let button2 = document.querySelector('.button2');
            let button3 = document.querySelector('.button3');

            button1.innerHTML = `Followers:   ${data.followers}`
            button2.innerHTML = `Following:   ${data.following}`
            button3.innerHTML = `Repository:   ${data.public_repos}`

            //prfile information:
            let li1 = document.querySelector('.li1');
            let li2 = document.querySelector('.li2');
            let li3 = document.querySelector('.li3');
            let li4 = document.querySelector('.li4')

            li1.innerText = `Name:  ${data.name}`
            li2.innerText = `Biography: ${data.bio}`
            li3.innerText = `Blog/Site: ${data.blog}`
            li4.innerText = `Organaization: ${data.company}`

            let show_div_1 = document.querySelector('.show_1')
            show_div_1.classList.remove('d-none')
            show_div_1.classList.add('d-block')

        })
    }
    
  });