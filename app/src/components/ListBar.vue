<template>
    <div class="list-bar"> 
        <div> <a :href="viewUrl">{{ name }}</a> <span class="like-post">liked {{ likes }}</span></div>
        <div>{{ description  }}</div>  
        <br>
        <br>
    </div>
</template>


<script>

export default {
    name: "ListBar",
    props: ["name", "description", "likes", "blog_id"],
    data(){
        return {
         viewUrl: "/view/" + this.blog_id
        }
    },
    methods: {}
}
</script>

<style>

</style>