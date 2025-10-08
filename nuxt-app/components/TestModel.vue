<template>
	<v-row class="bg-green gr-0 gc-8">
		<v-col>
			<v-card border="sm solid #938493" class="pa-3 h-100">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
				quo ipsum, quibusdam velit eos sit. Perferendis ut repudiandae voluptas,
				ducimus nam, consectetur nobis asperiores nulla placeat dolores maiores
				provident quisquam!</v-card
			></v-col
		>
		<v-col cols="6"
			><v-card
				border="sm solid #938493"
				class="pa-3 text-center d-flex flex-column justify-space-between h-100"
				><p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					quo ipsum, quibusdam velit eos sit. Perferendis ut repudiandae
					voluptas, ducimus nam, consectetur nobis asperiores nulla placeat
					dolores maiores provident quisquam!
				</p>
				<v-btn color="primary w-100 ">click</v-btn></v-card
			></v-col
		>
		<v-col cols="4"
			><v-card border="sm solid #938493" class="pa-3 h-100">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
				quo ipsum, quibusdam velit eos sit. Perferendis ut repudiandae voluptas,
				ducimus nam, consectetur nobis asperiores nulla placeat dolores maiores
				provident quisquam!
				<v-btn color="primary w-100 mt-2">click</v-btn></v-card
			></v-col
		>
		<v-col
			><v-card border="sm solid #938493" class="pa-3 h-100">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
				quo ipsum, quibusdam velit eos sit. Perferendis ut repudiandae voluptas,
				ducimus nam, consectetur nobis asperiores nulla placeat dolores maiores
				provident quisquam!

				<v-btn color="#948" class="w-100">present</v-btn>
				<v-btn color="custom-color2" class="mt-3 w-100">present</v-btn>
			</v-card></v-col
		>
		<v-col
			><v-card border="sm solid #938493" class="pa-3 h-100">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
				quo ipsum, quibusdam velit eos sit. Perferendis ut repudiandae voluptas,
				ducimus nam, consectetur nobis asperiores nulla placeat dolores maiores
				provident quisquam! <v-btn color="primary w-100">click</v-btn></v-card
			></v-col
		>
	</v-row>
	<!-- <button @click="update">+</button> -->
</template>
<script setup>
const title = defineModel("title");
const subtitle = defineModel("subtitle");
onMounted(() => {});
</script>
