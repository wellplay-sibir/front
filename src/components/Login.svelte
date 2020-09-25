<script>
    let user = {
        login: '',
        password:'',
    }

    function loginHandler(event){
        fetch('/article/fetch/post/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => console.log(result));
    }
</script>

<style>
    p { padding: 0; margin: 0}
    .login { position:relative; width: 350px; height: 275px; left: calc(50% - 200px ); margin-top: calc(50vh - 250px); background-color: white; box-shadow: 0px 5px 10px #C4C4C4 }
    .login__avatar { position: absolute; top: -50px; left: calc(50% - 50px);}
    .login__form { position: absolute; width: 300px; height: 150px; left: calc(50% - 150px); margin-top: 90px; text-align: center}
    input {margin: 10px}
</style>

<div class="login">
    <img src="avatar.png" alt="аватар" class="login__avatar">
    <div class="login__form">
        <input type="text" placeholder="Номер телефона" bind:value={user.login}>
        <input type="password" placeholder="Пароль" bind:value={user.password}><br>
        <input type="button" name="login" value="Войти" on:click={loginHandler}>
    </div>
</div>