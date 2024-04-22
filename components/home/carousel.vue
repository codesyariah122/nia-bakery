<template>
	<!-- Carousel Start -->
	<div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
		<div class="owl-carousel header-carousel position-relative">
			<div v-for="carousel in carousels" :key="carousel.id" class="owl-carousel-item position-relative">
				<img class="img-fluid" :src="carousel.src" :alt="carousel.primary">
				<div class="owl-carousel-inner">
					<div class="container">
						<div class="row justify-content-start">
							<div class="col-lg-8">
								<p class="text-primary text-uppercase fw-bold mb-2">{{carousel.primary}}</p>
								<h1 class="display-1 text-light mb-4 animated slideInDown">{{carousel.heading}}</h1>
								<p class="text-light fs-5 mb-4 pb-3">{{carousel.headline}}</p>
								<button @click="whatsappRedirect('6281321229245')"  class="btn btn-primary rounded-pill py-3 px-5">Order Sekarang <i class="fab fa-whatsapp fa-lg"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Carousel End -->
</template>

<script setup>
	const whatsappRedirect = (num) => {
		const whatsappNumber = num;
		const data = {
			name: 'Nia Bakery'
		}
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
		const text = `Halo 🍰, ${data.name} saya ingin memesan Bolu Jadul ${data.name}, bisa pesan hari ini ???`;
		const encodeText = encodeURIComponent(text);
		window.open(`${whatsappUrl}${encodeText}`)
	}

	const carousels = [
	{
		id: 1,
		primary: '// Special Kue Kenangan',
		heading: 'Kue Bolu Tradisional',
		headline: 'Menyajikan Kue Bolu Jadul dengan Cita Rasa Asli.',
		src: '/img/bolujadul5.webp'
	},
	{
		id: 2,
		primary: '// Special Kue Bolu Jadoel',
		heading: 'Rasa Klasik, Kue Bolu Jadul',
		headline: 'Kenangan Manis: Kue Bolu Jadul dengan Rasa Nostalgia.',
		src: '/img/bolujadul1.webp'
	}
	]
</script>