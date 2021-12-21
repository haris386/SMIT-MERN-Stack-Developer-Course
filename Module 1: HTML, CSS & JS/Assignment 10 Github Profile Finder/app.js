var user_img = document.querySelector(".user_img");
var userName = document.querySelector(".user_name h3");
var userBio = document.querySelector(".bio");
var followers_ = document.querySelector(".followers_ span");
var repos = document.querySelector(".repos span");
var follow_ = document.querySelector(".follow_ span");
var repo_details = document.querySelector(".repo_details");
var btn_submit = document.querySelector(".btn_submit");


var user_name = '';


function inputFunction() {
    let input_user = document.querySelector(".input_user").value.trim();


    if (input_user.length <= 0) {
        alert("Please enter github user name");
        document.querySelector(".input_user").value = "";
        document.querySelector(".input_user").focus();
        return false;
    } else {
        user_name = input_user.split("").join("");
        fetchUser();
        document.querySelector(".input_user").value = "";
        document.querySelector(".input_user").focus();
    }
};

btn_submit.addEventListener("click", function () {
    inputFunction()
});

document.querySelector(".input_user").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        inputFunction()
    }
})

function fetchUser() {
    fetch(`https://api.github.com/users/${user_name}`)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            if (data.message === "Not Found") {
                alert("user not found");
                return false;
            } else {
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                userName.innerHTML = data.login;
                userBio.innerHTML = data.bio;
                repos.innerHTML = data.public_repos;
                followers_.innerHTML = data.followers;
                follow_.innerHTML = data.following;

            }
        })

    fetch(`https://api.github.com/users/${user_name}/repos`)
        .then(response => response.json())
        .then(function (repo_data) {
            console.log(repo_data);
            //if user type random name which is user but not have repository
            if (repo_data.length <= 0) {
                repo_details.innerHTML = `
                
                <div class="item_">
                    <div class="repo_name">No Repo Found</div>                
                </div>
                
                `
            } else {
                if (repo_data.message === "Not Found") {
                    repo_details.innerHTML = `
                    <div class="item_">
                        <div class="repo_name">ABC</div>
                        <div class="repo_details_">
                            <div class="info_ star">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>??
                            </div>
                            <div class="info_ fork">
                                <p><i class="fa fa-code-fork"></i>??</p>
                            </div>
                            <div class="info_ size">
                                <p><i class="fa fa-file"></i>??</p>
                            </div>
                        </div>
                    </div>                
                    `
                    user_img.innerHTML = `<img src="images/github_logo.png">`;
                    userName.innerHTML = `ABC`;
                    userBio.innerHTML = "..."
                    followers_.innerHTML = "<b>??</b>";
                    public_repos.innerHTML = "<b>??</b>"
                    follow_.innerHTML = "<b>??</b>";
                } else {
                    var repo_Data = repo_data.map(item => {
                        console.log(item);
                        return (
                            `
                            <div class="item_">
                                <div class="repo_name">${item.name}</div>
                                <div class="repo_details_">
                                    <div class="info_ star">
                                        <i class="fa fa-star-o"></i>
                                        ${item.watchers}
                                    </div>
                                    <div class="info_ fork">
                                        <p><i class="fa fa-code-fork"></i>
                                        ${item.forks}
                                        </p>
                                    </div>
                                    <div class="info_ size">
                                        <p><i class="fa fa-file"></i>
                                        ${item.size}kb
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            `
                        );
                    })
                    //I am taking maximum 6 repos
                    // you can tak according to your requirement
                    repo_details.innerHTML = repo_Data.slice(0, 6).join("");

                }
            }

        });
}
