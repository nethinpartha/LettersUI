<template>
    <div>
        <div>
            <Header />
        </div>
        <div v-for="con in contents" :key="con">
            <ListBar :content="con.data" :likes="con.likes">
            </ListBar>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>


<script>

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
            contents : [{
                "data": "apple",
                "likes": 100
            },{
                "data": "orange",
                "likes": 100
            },{
                "data": "grapes",
                "likes": 100
            },{
                "data": "watermelon",
                "likes": 100
            }]
        }
    }
}
</script>