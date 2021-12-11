<template>
    <!-- <p>{{ contents }}</p> -->
    <div>
        <div><Header /></div>
        <div v-for="(con, index) in contents.data" :key="index">
            <div>{{ con.value }}</div >
        </div>
        <br>
        <div>
            <input type="button" value="like" @click="updateLikes()"><p>{{ contents.updated.likes }}</p>
            <input type="button" value="Dislike" @click="updateDislikes()"><p>{{ contents.updated.dislikes }}</p>
        </div>
        <div>
            <p> Latest Contents </p>
            <div v-for="lcon in contents.latest_contents" :key="lcon.blog_id">
            <a :href="viewUrl(lcon.blog_id)">{{ lcon.display_name  }}</a>
            </div>
        </div>
        <div>
            <p>Popular contents</p>
            <div v-for="pcon in contents.popular_contents" :key="pcon.blog_id">
            <a :href="viewUrl(pcon.blog_id)">{{ pcon.display_name  }}</a>
            </div>
        </div>
        <div>
            <p><b>Add comment..</b></p>
            <textarea type="text" class="comment" placeholder="Write a comment" v-model="commentValue" 
            @keyup.enter="updateComment()"></textarea>
          <button @click="updateComment()" type="submit">post</button>
        </div>
        <p> <b>shared comments..</b></p>
        <div v-for="(comment, index) in contents.updated.comments" :key="index">
            <div>{{ comment }}</div>
        </div>
    </div>    
</template>

<script>

import axios from 'axios'
import Header from "../components/header.vue"

export default {
    name: "Read",
    components: {
        Header
    },
    data(){
        return{
            contents: [],
            commentValue: ""
        }
    },
    beforeMount(){
        let readBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_READ_URL
        let viewUrl = readBlogUrl + "?blog_id=" + this.$route.params.id
        console.log("Before Mount")
        axios.get(viewUrl).then(response => (this.contents = response.data))
        console.log(this.contents)
    },
    methods: {
        viewUrl(blogId){
            return "/view/" + blogId
        },
        updateComment(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "comment": this.commentValue,
                "type": "comment"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        },
        updateLikes(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "type": "like"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        },
        updateDislikes(){
            let updateBlogUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_UPDATE_URL
            let updateReq = {
                "blog_id": this.$route.params.id,
                "type": "dislike"
            }
            axios.put(updateBlogUrl, updateReq).then(response => (this.$router.go(this.$router.currentRoute)))
        }
    }
}
</script>

<style>

</style>