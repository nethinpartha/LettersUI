<template>
    <!-- <p>{{ contents }}</p> -->
    <div>
        <div><Header /></div>
        <div v-for="(con, index) in contents.data" :key="index">
            <div>{{ con.value }}</div >
        </div>
        <div>
            Likes {{ contents.updated.likes }} Comments {{ contents.updated.comments_count }}
        </div>
        <p> <b>Comments Posted</b></p>
        <div v-for="(comment, index) in contents.updated.comments" :key="index">
            <div>{{ comment }}</div>
        </div>
        <div><Footer /></div>
    </div>    
</template>

<script>

import axios from 'axios'
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"

export default {
    name: "Read",
    components: {
        Header,
        Footer
    },
    data(){
        return{
            contents: []
        }
    },
    beforeMount(){
        let readBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_READ_URL
        let viewUrl = readBlogUrl + "?blog_id=" + this.$route.params.id
        axios.get(viewUrl).then(response => (this.contents = response.data))
    },
    methods: {}
}
</script>

<style>

</style>