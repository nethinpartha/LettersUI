<template>
    <div>
        <div>
            <Header />
        </div>
        <div v-for="con in contents" :key="con.blog_id">
            <ListBar :name="con.display_name" :likes="con.updates.likes" 
            :description="con.description" :blog_id="con.blog_id"></ListBar>
            <hr>
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
            contents : []
        }
    },
    // Get paginated blogs on page load
    beforeMount()
    {
    let listBlogsUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_APP_URL + process.env.VUE_APP_LIST_URL
    axios.get(listBlogsUrl).then(response => (this.contents = response.data.data))
    },
    methods: {}
}
</script>