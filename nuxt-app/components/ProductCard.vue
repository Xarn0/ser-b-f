<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const box = ref(null);
const count = ref(2000);

const animatedValue = ref(0);

onMounted(() => {
	gsap.registerEffect({
		name: "explode",
		effect: (targets, config) => {
			const distance = config.direction === "up" ? -100 : 100;

			return gsap.to(targets, {
				y: distance,
				x: gsap.utils.random([100, 200, 75]),
				background: gsap.utils.random(["#445434", "#234434", "#945945"]),

				duration: config.duration || 1,
				ease: "power2.out"
			});
		},
		defaults: { duration: 1, direction: "up" }, // значения по умолчанию
		extendTimeline: true // позволяет использовать внутри timeline
	});
	new Promise((res, req) => {
		gsap.delayedCall(2, () => {
			gsap.effects.explode(box.value, {
				direction: "down", //can reference any properties that the author decides - in this case "direction"
				duration: 3
			});
			res();
		});
	}).then((res) => {
		gsap.delayedCall(1, () => {
			gsap.to(box.value, {
				opacity: 0
			});
		});
	});
	gsap.to(animatedValue, {
		value: 24589,
		duration: 4,
		ease: "power1.out",
		onUpdate: () => {
			// Vue сам отследит animatedValue.value
		}
	});
	gsap.to(".spinner", {
		// y: (i) => i * 100,
		opacity: 1,
		scale: 0.2,
		background: "#322332",
		repeat: 5,
		yoyo: true,
		onStart: () => console.log("start"),

		delay: (i) => i * 0.2
		// stagger: {
		// 	each: 0.5,
		// 	from: "end",

		// 	grid: "auto"
		// }
	});
	// gsap.to(box.value, {
	// 	rotation: 1080, // 3 оборота
	// 	scale: 2,
	// 	opacity: 0.2,
	// 	scrollTrigger: {
	// 		trigger: box.value,
	// 		start: "top top",
	// 		end: "bottom",
	// 		scrub: true,
	// 		pin: true,
	// 		markers: true
	// 	}
	// });
});
</script>

<template>
	<div
		ref="box"
		style="
			width: 150px;
			height: 150px;
			background: crimson;
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 12px;
		"
	>
		ROTATE ME
	</div>
	<div class="spinners">
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
		<div class="spinner"></div>
	</div>
</template>
<style>
.spinners {
	display: flex;
	gap: 10px;
	/* justify-content: center; */
	align-items: center;
	/* height: 300px; */
	min-height: 200px;
	width: 60%;
	align-content: start;
	margin: 0 auto;

	flex-wrap: wrap;
}
.spinner {
	width: 50px;
	height: 50px;
	background: #943;
	display: block;
	color: white;
	text-align: center;
	/* position: absolute; */
	/* opacity: 0; */
	/* left: 0; */
}
</style>
