

document.addEventListener("DOMContentLoaded", function() {
    //1- getting the search input
    let search = document.getElementById('search_user');
    let github = new Github;
    //2- add keyup event to input result
    search.addEventListener('keyup', (e) => {
        //current input value
        let currentUser = e.target.value;
        //fetch user info
        if(currentUser !== ""){
            github.getUsers(currentUser)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    //print not found
                } else{
                    //show results
                }
            })
        } else{
            //clear prfile
        }
        
        
    });

    
  });