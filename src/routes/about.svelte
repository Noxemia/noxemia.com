<script>
    import Section from "../components/aboutsection.svelte";
    let text ="About Me"
</script>

<div class="main">
    <p class="head-title">{text}</p>
    <Section title="Background" text="I grew up in  a small surburb outside of Stockholm where I went to school until grade 9.
    I then completed a highschool education in Information and Media Technology in another town a bit farther away while still living at home.
    After completing highschool education I moved to Gothenburg to persue a Civil Engineering degree in Information technology at 
    Chalmers University of Technology." />
    <Section title="University" text="I am at the time of writing a Masters Student at Chalmers Univesity. Having completed my bachelors
    in Information Technology I am now studying Computer Systems and Networks while specialising in security." />
    <Section title="University Extracurriculars" text="While attending univerity I have, to the date of writing, been in 8 boards of commitees and associations.
    I mainly participated in gaming activities in Chalmers being a part of the Retro Gaming, Boardgaming and E-Sport and LAN associations.
    But I also completed a year in the comitee responsible for managing the servers and web services for the IT division.
    During this time I have been chairman twice and treasurer once. My biggest achivement was in the E-Sports and LAN association where
    I started a cross-university association that hosted E-Sports tournaments. This association has members from Chalmers, KTH, Jönköping,
    Uppsala and Gothenburg University. This association is called Swedish Challengers League and has had sponsors as Dreamhack/ESL, Inet
    and Challengermode." />
</div>

<style>
    .main {
        width: 100%;
        min-height: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .head-title{
        font-family: "monospace", sans-serif;
        font-size: 2em;
        margin: 1%;
    }
</style>
