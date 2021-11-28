<template>
    <div class="list-bar">
        <div><a href=""> {{ content }} </a> <span>{{ likes }}</span></div>
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