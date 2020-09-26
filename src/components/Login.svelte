<script>
    import * as sapper from '@sapper/app';
    import { user } from '../store/user.js';


    function SendCode(event){
        fetch('http://astercon.ru:81/password', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify($user),
            rejectUnauthorized: false
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(err => console.error(err.message));
    }

    function login(event) {
        fetch('http://astercon.ru:81/auth', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify($user),
            rejectUnauthorized: false
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                $user.role = result.role
                $user.token = result.UserToken
                console.log($user)
            })
            .catch(err => console.error(err.message));
    }
</script>

<style>
    p { padding: 0; margin: 0}
    .login { position:relative; width: 350px; height: 325px; left: calc(50% - 200px ); margin-top: calc(50vh - 250px); background-color: white; box-shadow: 0px 5px 10px #C4C4C4 }
    .login__avatar { position: absolute; top: -50px; left: calc(50% - 50px);}
    .login__form { position: absolute; width: 300px; height: 150px; left: calc(50% - 150px); margin-top: 90px; text-align: center}
    input {margin: 10px}
</style>

<div class="login">
    <img src="avatar.png" alt="аватар" class="login__avatar">
    <div class="login__form">
        <input type="text" placeholder="Номер телефона" bind:value={$user.number_phone}>
        <input type="button" name="login" value="Отпрвить код" on:click={SendCode}>
        <input type="password" placeholder="Пароль" bind:value={$user.password}><br>
        <input type="button" name="login" value="Войти" on:click={login}>
    </div>
</div>