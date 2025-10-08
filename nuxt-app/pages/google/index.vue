<template>
	<v-hover>
		<template v-slot:default="{ isHovering, props }">
			<v-card
				v-bind="props"
				rounded="xl solid"
				:elevation="isHovering ? 12 : 5"
				width="240"
				class="text-center cursor-pointer"
			>
				<v-card-text class="d-flex ga-2">
					<ui-btn-googlen-sign-i
						@click="loginWithGoogle"
					/> </v-card-text></v-card></template
	></v-hover>
</template>

<script setup>
const loginWithGoogle = () => {
	const clientId = "ТВОЙ_CLIENT_ID";
	const redirectUri = "http://localhost:3000/api/auth/callback";
	const scope = "openid email profile";
	const responseType = "code";

	const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

	window.location.href = oauthUrl;
};
</script>
