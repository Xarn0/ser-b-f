<script setup lang="ts">
const form = ref({
	email: "test@example.com",
	name: "John Doe",
	password: "123"
});
interface IForm {
	email: string;
	name: string;
	password: string;
}
const registration = async () => {
	try {
		const data = await fetch("/api/prisma", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(form.value as IForm)
		});
		return data;
	} catch (error) {}
};
</script>

<template>
	<v-container>
		<v-form @submit.prevent="">
			<v-text-field v-model="form.email"></v-text-field>
			<v-text-field v-model="form.name"></v-text-field>
			<v-text-field v-model="form.password"></v-text-field>

			<v-btn @click="registration">отправить</v-btn>
		</v-form>
	</v-container>
</template>

<style lang="scss"></style>
