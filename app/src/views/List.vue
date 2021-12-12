<template>
    <div>
        <div>
            <Header />
        </div>
        <div class="main-container">
            <div v-for="con in contents.data" :key="con.blog_id">
                <ListBar :name="con.display_name" :likes="con.updates.likes" :dislikes="con.updates.dislikes"
                :description="con.description" :blog_id="con.blog_id"></ListBar>
            </div>
            <div class="page-controls">
                <button v-if="contents.previous" @click="getPaginatedBlogs('previous')">Previous</button>
                <button v-if="contents.next" @click="getPaginatedBlogs('next')">Next</button>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>


<script>

import axios from 'axios'
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import ListBar from "../components/ListBar.vue"

export default {
    name: 'List',
    components: {
        ListBar,
        Header,
        Footer
    },
    data(){
        return {
            contents : [],
            page: 1,
            next_value: false,
            previous_value: false
        }
    },
    // Get paginated blogs on page load
    beforeMount()
    {
    let listBlogsUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_LIST_URL
    axios.get(listBlogsUrl).then(response => (this.contents = response.data))
    },
    methods: {
        getPaginatedBlogs(value){
            let listBlogsUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_LIST_URL
            let paginatedUrl = ""
            if (value == "next"){
                this.page += 1
                paginatedUrl = listBlogsUrl + "?page=" + this.page
            }
            else{
                this.page -= 1
                paginatedUrl = listBlogsUrl + "?page=" + this.page
            }
            axios.get(paginatedUrl).then(response => (this.contents = response.data))
        }
    }
}
</script>

<style>

</style>