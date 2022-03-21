<script>
    export let name
    export let grade

    if(grade == undefined){
        grade = 3
    }
    let stars = " "
    for(let i = 0; i < grade; i++){
        stars+="* "
    }
</script>

<div class="main">
    <p class="name">{name}</p>
    <div class="confidence">
        Confidence: 
        <div class="stars">
            {stars}
        </div>
    </div>
</div>

<style>
    .main{
        width: 100%;
        height: 15%;
        border: solid 1px black;
    }
    .name{
        font-family: "monospace", sans-serif;
        font-size: 1.2em;
        margin: 2px 0 0 5px;
    }
    .confidence{
        display:flex;
        width:100%;
    }
    .stars{margin-left: 2px;}

</style>