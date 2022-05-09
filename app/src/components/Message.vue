<template>

    <div class="container">

        <pre v-if="key == EML"> Haven't wrote a letter yet ? Go to upload a letter section to share a new one. Let the 
            world know your thoughts or share your thoughts to someone query..
        </pre>

    </div>
    
</template>

<script>

export default{
    name: "Message",
    props: ["key"]
}
</script>
