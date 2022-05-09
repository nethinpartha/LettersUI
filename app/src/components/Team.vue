<template>

<div>
    <Header />

        <div class="container" style="margin-top: 10%">
            <div class="row">
                
                <h1>Founder details</h1>
            </div>
        </div>

    <Footer />
</div>

</template>
    


<script>

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"

export default {
    name: "Team",
    components: {
        Header,
        Footer
    }
}

</script>

<style>

</style>