<template>
    <div>
        {{ response }}
    </div>
</template>

<script>

import axios from 'axios'
import { urls } from '../../src/helper'

export default{
    name: "Gitlogin",
    data(){
        return{
            response: ""
        }
    },
    async beforeMount(){
        try{
                let gitAuthUrl = urls().VIM_BASE + urls().GITHUB_LOGIN
                this.response = await axios.get(gitAuthUrl)
            }
            catch(e){
                alert(e)
            }
    }
}

</script>
