<script>
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
    import "../app.css";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<Header />
<div class="main">
    <slot />
    <div class="footerbuffer" />
</div>

<Footer />

<style>
    .main {
        height: 80vh;
        width: 100%;
    }
    .footerbuffer {
        width: 100%;
        height: 8vh;
        background: black;
    }
</style>
