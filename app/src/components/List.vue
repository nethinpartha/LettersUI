<template>
    <div>
        <div v-for="con in contents" :key="con">
            <ListBar :content="con.data" :likes="con.likes">
            </ListBar>
        </div>
    </div>
</template>


<script>

import ListBar from "../components/ListBar.vue"

export default {
    name: 'List',
    components: {
        ListBar
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