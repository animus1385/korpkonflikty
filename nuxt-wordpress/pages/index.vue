<template>
    <div>{{ status }}</div>
    {{ data }}
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
console.log(config);
const { data, status, error, refresh } = await useFetch(config.public.wordpressUrl, {
    method: 'get',
    query: {
        query: `
     query NewQuery {
       posts(first:10){
         nodes {
           title
           date
           excerpt
           uri
         }
       }
     }`,
    },
    transform(data) {
        return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
    },
});
</script>

<style scoped></style>
