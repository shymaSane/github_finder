

document.addEventListener("DOMContentLoaded", function() {
    //1- getting the search input
   const search = document.getElementById('search_user');
    //init github class
   const github = new Github;
    //init ui class
   const ui = new UI;
    //2- add keyup event to input result
    search.addEventListener('keyup', (e) => {
        //current input value
        let currentUser = e.target.value;
        //fetch user info
        if(currentUser !== ""){
            github.getUsers(currentUser)
            .then(data => {
                console.log(data)
                if(data.profile.message === "Not Found"){
                    //print not found
                } else{
                    //show results
                   ui.showUi(data)
                }
            })
        } else{
            //clear prfile
        }
        
        
    });

    
  });