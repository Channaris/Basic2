<template>
    <SLPpart/>
    <!-- <SLPpart 
        v-for="post in SLPposts"
            :data="post.form"
    /> -->

</template>

<script>

import SLPpart from '~/components/SLPpart'

export default {
    components:{
      SLPpart,
    },
data() {
    return {
    form: {
    },
    }
},
methods: {

},
properties: {
    SLPposts:{
        type:Array
    }
}
}
</script>

<style>
</style>