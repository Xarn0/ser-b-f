<template>
	<div>
		<p>твой id {{ paramentrId.params.id }}</p>
		<div>
			<p>{{ datat.title }}</p>
			<card-likes
				:likes="datat.reactions.likes"
				:dislikes="datat.reactions.dislikes"
				:title="datat.title"
			></card-likes>
		</div>
	</div>
</template>
<script setup>
import CardLikes from "~/components/ui/CardLikes.vue";
const paramentrId = useRoute();
const { data: datat } = await useFetch(
	`https://dummyjson.com/posts/${paramentrId.params.id}`
);
</script>
