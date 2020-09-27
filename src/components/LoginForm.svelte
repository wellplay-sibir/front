<script>
    import * as sapper from '@sapper/app';
    import { user } from '../store/user.js';

    let showCodeField = false;

    let err = '';

    let fields = {
        number_phone: '',
        password: '',
    }
    
    function sendCode(event){
        err = ''
        fetch('http://astercon.ru:81/password', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: JSON.stringify(fields),
            rejectUnauthorized: false
        })
            .then(async response => {
               if(response.ok) {
                   showCodeField = true;
               } 
               else {
                   await response.json().then(result => err = result.error)
               }
            })
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
                $user.UserToken = result.UserToken
            })
            .then(async() => {
                await sapper.goto('/board')
            })
            .catch(err => console.error(err.message));
    }

    
</script>

<style>
    p {padding: 0; margin: 2px;}
   :global(body) { background-color: #f5f5f5;}
   input {margin: 10px; border: 0; border-bottom: 1px solid #f5f5f5; font-family: 'Roboto', sans-serif; color: #bdbdbd; font-size: 14px;}
   input:focus { border-bottom: 1px solid #23A9F2;}
   .form { background-color: #ffffff; width: 300px; height: 300px; padding: 25px; border-radius: 15px; box-shadow: #dadada 3px 5px 10px; position:relative; box-sizing: border-box; left: calc(50vw - 150px); top: calc(50vh - 150px); font-family: 'Roboto', sans-serif; text-align: center; color: #bdbdbd; display:flex; flex-direction: column; align-items: center; justify-content: space-between;}
   .form__btn {background-color: #23A9F2; color: #fff; font-family: 'Roboto', sans-serif; font-size: 14px; padding: 5px; width: 100px; }
   .form__btn:hover {background-color: #1d92d1}
   .form__error{ color: rgb(238, 104, 104); font-size: 12px; padding: 1px;}
</style>

<!-- <i class="material-icons">done</i> -->


<div class="form">
    <h3 class="form__header">Авторизация</h3>
    <div class="form__number">
        <p>Номер телефона:</p>
        <label for="phone-number">+7</label>
        <input name="phone-number" type="text" title="Введите 10 цифр номера телефона" bind:value="{fields.number_phone}">
        <p class="form__error">{err}</p>
    </div>
    {#if showCodeField}
        <div class="form__number">
            <p>Код из смс:</p>
            <input name="phone-code" type="text" title="Введите код из смс" bind:value="{fields.password}">
        </div>
        <input type="button" value="Войти" class="form__btn" on:click="{ login }">
    {:else}
        <input type="button" value="Ввод" class="form__btn" on:click="{ sendCode }">
    {/if}
</div>


