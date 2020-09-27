<script>
	import Board from "../components/Board.svelte";
</script>

<style>
	:global(body) { background-color: #f5f5f5}
	/* .wrapper { position: absolute; }
	.download { position:relative; width: 350px; height: 325px; left: calc(50% - 200px ); margin-top: calc(50vh - 250px); background-color: white; box-shadow: 0px 5px 10px #C4C4C4 }
	.file_btn {height: 30px; position:relative; text-align: center; width: 250;}
	input {}
	p {position:relative; text-align: center}
	.btn {width: 90%; display: flex; justify-content: center; align-items: center; border : 4px solid #fff; border-radius: 20px;}
	.text {}
	.file {margin-top: 100px; display: flex; justify-content: center;}
	.file2 {margin-top: 100px; display: flex; justify-content: center;} */
</style>

<svelte:head>
	<title>bank login</title>
</svelte:head>

<!-- 
<div class="download">
	<p class="text">Загрузите документ</p>
	<div class="file">
		<input class="file_btn" type="file" name="userfile">
	</div>
	<div class="file2">
		<input class="btn" type="button" value="Загрузить файл">
	</div>
</div> -->

<div class="wrapper">
	<Board/>
</div>




