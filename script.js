  fetch('https://api.github.com/users/octocat  ')
    .then(response => response.json())
    .then(data => console.log(data));
        async function getData() {
          try{const res = await
fetch('https://api.github.com/users/octocat');
            const data = await res.json();
            console.log(data.login);
            console.log(data.followers);
            document.querySelector('#login').textContent = 'Username: ' + data.login;
            document.querySelector('#followers').textContent = 'Followers: ' + data.followers;
          } catch(error){
            console.error('Ошибка:', err);
            document.querySelector('#login').textContent = error.massage;
          }}
getData();