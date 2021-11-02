<script>
    import CVimage from "../media/index.jpg";
</script>

<div class="main">
    <div class="info">
        <div class="introcontainer">
            <img class="cvimage" src={CVimage} alt="" />
            <div class="intro">Hello!</div>
        </div>
        <div class="about">Some text about me!</div>
    </div>
    <div class="coding" />
</div>

<style>
    .main {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .info {
        height: 80%;
        width: 65%;
        border-left: 1px solid black;
        box-sizing: border-box;
        float: left;
    }
    .coding {
        width: 25%;
        height: 80%;
        object-fit: cover;
        background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 70%
            ),
            url("../media/coding.jpg");
    }

    .cvimage {
        margin: auto 15px;
        height: 80%;
    }

    .intro {
        margin-top: 15px;
        font-size: 3em;
        font-family: "monospace", sans-serif;
        height: 100%;
        width: 30%;
        display: flex;
        align-items: center;
    }

    .introcontainer {
        width: 100%;
        height: 45%;
        display: flex;
    }

    .about {
        width: 100%;
        height: 40%;
        padding: 15px;
        padding-left: 60px;
        font-size: 1.5em;
        font-family: "Ubuntu Mono", monospace;
    }
</style>
