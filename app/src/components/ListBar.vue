<template>
    <div class="list-bar"> 
        <div> <a :href="viewUrl">{{ name }}</a> <span>{{ likes }}</span></div>
        <div>{{ description  }}</div>  
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