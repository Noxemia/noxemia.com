<script>
    import Language from "../components/language.svelte";
</script>

<div class="main">
    <div class="temp"></div>
    <div class="languages column"><p class="coltext">Programing Languages</p><Language name="Javascript" grade={4}/></div>
    <div class="courses column"><p class="coltext">Courses</p></div>
    
</div>

<style>
    .main {
        height: 80vh;
        width: 100%;
        display: flex;
    }
    .temp{
        height: 100%;
        width: 60%;
    }
    .column{
        width: 20%;
        height: 100%;
        border: solid black 1px;
        float: right;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .coltext{
        margin-top: 4px;
        font-family: "monospace", sans-serif;
        font-size: 1.2em;
    }
</style>
