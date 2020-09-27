<script>
    import { onMount } from 'svelte';
    import { user } from '../store/user.js';

    let selected = '';
    let options = {};

    onMount(async () => {
		const res = await fetch(`http://astercon.ru:81/documents`, {
            headers: {
                'UserToken': $user.UserToken,
            },
        });
        const result = await res.json();
        options = result.document_type
    });

    function send(event) {
        console.log(event.target.closest('.form').querySelector('.form__atach').files);
    }
</script>

<style>
    /* p {padding: 0; margin: 2px;} */
   :global(body) { background-color: #f5f5f5;}
   
   .form { background-color: #ffffff; width: 300px; height: 300px; padding: 25px; border-radius: 15px; box-shadow: #dadada 3px 5px 10px; position:relative; box-sizing: border-box; left: calc(50vw - 150px); top: calc(50vh - 150px); font-family: 'Roboto', sans-serif; text-align: center; color: #bdbdbd; display:flex; flex-direction: column; align-items: center; justify-content: space-between;}
    input {margin: 10px; border: 0; border-bottom: 1px solid #f5f5f5; font-family: 'Roboto', sans-serif; color: #bdbdbd; font-size: 14px; background-color: #fff;}
    select { width: 200px;}
    .form__atach {font-size: 12px; width: 200px}
    input:focus { border-bottom: 1px solid #23A9F2;}
   .form__btn {background-color: #23A9F2; color: #fff; font-family: 'Roboto', sans-serif; font-size: 14px; padding: 5px; width: 100px; }
   .form__btn:hover {background-color: #1d92d1}
   /* .form__error{ color: rgb(238, 104, 104); font-size: 12px; padding: 1px;}  */
</style>

<!-- <i class="material-icons">done</i> -->

<div class="form">
    <p>{selected}</p>
    <h3 class="form__header">Документы</h3>
    {#if options.length === 0}
        <p>загрузка...</p>
    {:else}
    <select bind:value={selected}>
        {#each Object.entries(options) as [key, value]}
            <option value={key}>
                {value}
            </option>
        {/each}
    </select>
    {/if}
		
   
    <input type="file" class="form__atach" accept=".png, .jpg, .jpeg">
    <input type="button" value="Ввод" class="form__btn" on:click={send}>
    <!-- <input type="button" name="send" id="" on:click="{send}"> -->
</div>


