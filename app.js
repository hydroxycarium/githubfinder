const searchUser = document.getElementById('searchUser');
const gitHub = new GitHub;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText != ''){
        gitHub.getUser(userText)
        .then(res => {
            if(res.profile.message === 'Not Found'){
                console.log('User Not Found');
            } else {
                ui.showProfile(res.profile)
            }
        })
        .catch(err => console.log(err))
    } else {

    }
})