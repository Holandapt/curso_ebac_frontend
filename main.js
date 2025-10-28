document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const login = document.querySelector('.profile-username');
    const followers = document.querySelector('.followers');
    const following = document.querySelector('.following');
    const repos =  document.querySelector('.repositorios');
    const link = document.querySelector ('#link');

    fetch('https://api.github.com/users/Holandapt').then(function(resposta){
        return resposta.json();


    })
    .then (function(json){
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        login.innerText = json.login;
        followers.innerText = json.followers;
        following.innerText = json.following;
        repos.innerText = json.public_repos;
        link.href = json.html_url;
    })
})