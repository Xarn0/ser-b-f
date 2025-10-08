<template>
	<div class="pro">
		<v-menu>
			<template #activator="{ props: act }">
				<v-btn icon="$menu" v-bind="act"></v-btn>
				<Mybtn icon="$menu" v-bind="act" color="primary"></Mybtn>
			</template>
			<v-list>
				<v-list-item>
					<v-list-item-title
						>O
						<v-card>
							<Mybtn>ghb</Mybtn>
							<v-icon icon="mdi-access-point-check"></v-icon>
							<v-icon icon="$backspace" />
							<v-icon icon="$menu" />
						</v-card>
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<v-menu :close-on-content-click="false">
			<template v-slot:activator="{ props: activatorProps }">
				<v-btn v-bind="activatorProps" @click="expand = !expand">
					<span
						>click me
						<v-icon icon="$arrowdown"></v-icon>
						<v-icon icon="$ratingFull" color="#945420"></v-icon>
					</span>
				</v-btn>
				vmn
			</template>

			<v-list>
				<v-list-item>
					<v-menu offset-y :close-on-content-click="false">
						<template #activator="{ props }">
							<v-btn color="primary" dark v-bind="props"
								>Option 2</v-btn
							></template
						>
						<v-list>
							<v-list-tile v-for="i in 3" :key="i">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
								eaque velit deleniti, aliquam blanditiis quos rem repellendus
								praesentium maxime veritatis assumenda tempora facere
								reprehenderit quis facilis cum sunt perferendis expedita?
								{{ i }}
							</v-list-tile>
						</v-list>
					</v-menu>
				</v-list-item>

				<v-list-item>
					<v-menu :close-on-content-click="false">
						<template #activator="{ props }">
							<v-btn text color="primary" v-bind="props">Option -002</v-btn>
						</template>
						<v-card>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo
							voluptas explicabo ipsa unde. Quasi ut repellat voluptate adipisci
							magni quisquam eaque, odit incidunt, dolore amet blanditiis ullam
							cumque? Eaque!
						</v-card>
					</v-menu>
				</v-list-item>

				<v-list-item>
					<v-menu :close-on-content-click="false">
						<template v-slot:activator="{ props }">
							<v-btn text color="primary" v-bind="props">open</v-btn>
						</template>
						<v-card max-width="300">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							nesciunt cupiditate ratione iste voluptates et, exercitationem
							veritatis mollitia quos illum. Accusantium.
						</v-card>
					</v-menu>
				</v-list-item>
				<v-list-item>
					<v-menu :close-on-content-click="false">
						<template v-slot:activator="{ props }">
							<v-btn text color="primary" v-bind="props">active</v-btn>
						</template>
						<v-card min-width="100">
							<v-img
								:width="500"
								src="https://videos.openai.com/vg-assets/assets%2Ftask_01k10zxj4feq1s80a1kk9nn5w5%2F1753453970_img_1.webp?st=2025-07-26T07%3A15%3A57Z&se=2025-08-01T08%3A15%3A57Z&sks=b&skt=2025-07-26T07%3A15%3A57Z&ske=2025-08-01T08%3A15%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=bdhPfXryaLPpXdzXef6Wl64Fgms8O64f9qisyuRRnRw%3D&az=oaivgprodscus"
							>
								<v-card class="bg-transparent white-text">
									<v-card-text class="text-white">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Voluptates porro, ea, tempora doloremque aliquam odit
										reprehenderit adipisci ipsum, alias nam repudiandae dolore
										quibusdam?
									</v-card-text>
								</v-card>
							</v-img>
						</v-card>
					</v-menu>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-slide-y-transition>
			<v-card
				v-show="expand"
				class="mx-auto bg-secondary cursor-pointer text-primary bg-my-color2"
				height="100"
				width="100"
				elevation="24"
				>43</v-card
			>
		</v-slide-y-transition>
		<v-row class="ga-10 flex-row">
			<v-card class="opacity-hover opacity-20" style="width: 200px">2</v-card>
			<v-card>2</v-card>
			<v-card>3</v-card>
		</v-row>
	</div>
</template>
<script setup>
const expand = ref(false);
</script>
