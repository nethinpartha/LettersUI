<template>
    <div class="list-bar">
        <div>{{ content }} <span>{{ likes }}</span></div>
        <hr>   
    </div>
</template>


<script>
export default {
    name: "ListBar",
    props: ["content", "likes"]
}
</script>

<style>

</style>