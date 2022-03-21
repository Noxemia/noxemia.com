<script>
    export let title;
    export let text;
</script>

<div class="main">
    <div class="title">
        {title}
    </div>
    <div class="text">
        {text}
    </div>
</div>

<style>
    .main {
        width: 100%;
        min-height: 120px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;


    }

    .text{
        margin: 1% 5% 0 5%;
        font-family: "monospace", sans-serif;
    }
    .title{
        margin: 0% 2% 0 2%;
        font-family: "monospace", sans-serif;
        font-size: 1.5em;
        border-bottom: 1px solid black;
    }
</style>
