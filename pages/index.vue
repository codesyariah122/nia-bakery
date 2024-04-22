<template>
	<div>
		<!-- Spinner Start -->
		<div v-if="loading" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
			<div class="spinner-grow text-primary" role="status"></div> <h1 class="ml-5 display-6 text-warning mb-4 animated slideInDown">Nia Bakery 🧁 </h1>
		</div>
		<!-- Spinner End -->
		<div v-else>			
			<home-navigation />

			<home-carousel />

			<home-about />

			<home-products />

			<home-testimoni />

			<home-footer />
		</div>
	</div>
</template>


<script setup>
	import {ref, onMounted} from 'vue';

	const date = new Date;
	const year = date.getFullYear();
	let loading = ref(true);

	useHead({
		title: 'Nia Bakery - Special Bolu Jadul Collection',
		link: [
		{
			rel: 'stylesheet',
			href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Playfair+Display:wght@600;700&display=swap"
		},
		{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
		},
		{
			rel: 'stylesheet',
			href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
		},
		{
			rel: 'stylesheet',
			href: '/lib/animate/animate.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/lib/owlcarousel/assets/owl.carousel.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/css/bootstrap.min.css'
		},
		{
			rel: 'stylesheet',
			href: '/css/style.css'
		}
		],

		script: [
		{
			src: 'https://code.jquery.com/jquery-3.4.1.min.js',
		},
		{
			src: '/lib/owlcarousel/owl.carousel.min.js'
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
		},
		{
			src: '/lib/wow/wow.min.js',
		},
		{
			src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA',
			body: true
		},
		{
			src: '/lib/easing/easing.min.js',
		},
		{
			src: '/lib/waypoints/waypoints.min.js',
		},
		{
			src: '/lib/counterup/counterup.min.js',
		},
		
		{
			src: '/js/main.js',
			body: true
		}
		],

		meta: [
			{ name: 'description', content: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi. Menyediakan berbagai pilihan roti, kue, dan pastry yang segar dan lezat, dipanggang dengan bahan berkualitas tinggi. Temukan beragam menu mulai dari roti klasik hingga kue ulang tahun spesial. Kunjungi kami untuk pengalaman kuliner yang memuaskan dan pelayanan ramah di Nia Bakery.' },
			{
				name: 'og:title', content: 'Phoenix Digital Tech Solution'
			},
			{
				name: 'description', content: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi. Menyediakan berbagai pilihan roti, kue, dan pastry yang segar dan lezat, dipanggang dengan bahan berkualitas tinggi. Temukan beragam menu mulai dari roti klasik hingga kue ulang tahun spesial. Kunjungi kami untuk pengalaman kuliner yang memuaskan dan pelayanan ramah di Nia Bakery.'
			},
			{
				name: 'og:description', content: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi. Menyediakan berbagai pilihan roti, kue, dan pastry yang segar dan lezat, dipanggang dengan bahan berkualitas tinggi. Temukan beragam menu mulai dari roti klasik hingga kue ulang tahun spesial. Kunjungi kami untuk pengalaman kuliner yang memuaskan dan pelayanan ramah di Nia Bakery.'
			},
			{
				name: 'og:image', content: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/09/Resep-Bolu-Susu-Santan-1204105440.jpg'
			}
			],
	});

	onMounted(() => {
		setTimeout(() => {
			loading.value = false
		}, 2500)
	});
</script>