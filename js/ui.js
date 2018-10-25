class UI {
    constructor() {
        this.cssProfile = document.getElementById('profile');
    }

    showUi(user) {
         this.cssProfile.innerHTML = `
        <div class="container show_1 p-3">
            <div class="row d-flex justify-content-center align-content-center">
                <div class="image-group col-md-3 col-8">
                    <img src="${user.profile.avatar_url}" alt="profile picture" class="rounded float-left profile_img mb-3 w-100">
                    <button class="btn btn-primary btn_profile btn-block "><a href="${user.profile.html_url}" class="text-white profile_a" target="_blank">View profile</a></button>
                </div>
                <div class="info_group col-md-9 col-8">
                    <div class="btn-group d-flex flex-column flex-md-row justify-content-md-around mt-3 mt-md-0 w-100">
                        <button class="btn btn-primary rounded my-2 my-md-0 button1">Followers: ${user.profile.followers}</button>
                        <button class="btn btn-primary rounded my-2 my-md-0 button2">Following: ${user.profile.following}</button>
                        <button class="btn btn-primary rounded my-2 my-md-0 button3">Repository: ${user.profile.public_repos}</button>
                    </div>
                    <ul class="list-group my-md-3">
                        <li class="list-group-item bg-light text-primary li1">Name: ${user.profile.name}</li>
                        <li class="list-group-item bg-light text-primary li2">Biography: ${user.profile.bio}</li>
                        <li class="list-group-item bg-light text-primary li3">Site: ${user.profile.blog}</li>
                        <li class="list-group-item bg-light text-primary li4">Company: ${user.profile.company}</li>
                    </ul>
                </div>
            </div>         
        </div>
        <div class = "repos container">
            <ul class="list-group my-md-3">
                <li class="list-group-item bg-light text-primary li1">1: ${user.repos[1].name}</li>
                <li class="list-group-item bg-light text-primary li2">2: ${user.repos[2].name}</li>
                <li class="list-group-item bg-light text-primary li3">3: ${user.repos[3].name}</li>
                <li class="list-group-item bg-light text-primary li4">4: ${user.repos[4].name}</li>
            </ul>
        </div>
        `
        
    }
}