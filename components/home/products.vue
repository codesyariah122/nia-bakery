<template>
	<!-- Product Start -->
	<div class="container-xxl bg-light my-6 py-6 pt-0">
		<div class="container">
			<div class="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
				<div class="row g-4 align-items-center">
					<div class="col-lg-6">
						<h1 class="display-5 text-light mb-0">Special Kue Bolu Jadul, Untuk Kumpul Keluarga</h1>
					</div>
					<div class="col-lg-6 text-lg-end  hotline">
						<button>
							<div class="d-inline-flex align-items-center text-start">
								<img src="/logo/whatsapp.png" class="">
								<div class="ms-4">
									<p class="fs-5 fw-bold mb-0 text-white">Hotline Tanya Jawab</p>
									<p class="fs-4 fw-bold mb-0 text-white">0813 2122 9245</p>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
				<p class="text-primary text-uppercase mb-2">// Bakery Products</p>
				<h1 class="display-6 mb-4">Jelajahi menu kue dari Nia Bakery</h1>
			</div>
			<div class="row g-4">

				<div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
					<div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
						<div class="text-center p-4">
							<div class="d-inline-block border border-primary rounded-pill px-3 mb-3">
								{{product.price}}
							</div>
							<h3 class="mb-3">{{product.name}}</h3>
							<span>{{product.desc}}</span>
						</div>
						<div class="position-relative mt-auto">
							<img class="img-fluid" :src="product.src" :alt="product.name" />
							<div class="product-overlay">
								<button @click="whatsappRedirect('6281321229245', product)" class="btn btn-lg-square btn-outline-light rounded-circle btn-call">
									<i class="fab fa-whatsapp fa-2x text-white" />
								</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- Product End -->
</template>

<script setup>
	const products = [
	{
		id: 1,
		brand: 'Nia Bakery',
		name: 'Bolu Jadul',
		desc: 'Hadirkan kembali cita rasa tempo dulu dari bolu jadul Nia Bakery',
		price: '$11 - $99',
		src: '/img/bolujadul4.webp'
	},
	{
		id: 2,
		brand: 'Nia Bakery',
		name: 'Bread',
		desc: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
		price: '$11 - $99',
		src: '/img/product-3.jpg'
	},
	{
		id: 3,
		brand: 'Nia Bakery',
		name: 'Cookies',
		desc: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
		price: '$11 - $99',
		src: '/img/product-2.jpg'
	}
	]

	const whatsappRedirect = (num, data) => {
		const whatsappNumber = num;
		const imgLink = `https://nia-bakery.vercel.app${data.src}`
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
		const text = `Halo 🍰, ${data.brand} saya ingin memesan satu paket ${data.name} dengan harga ${data.price}, bisa pesan hari ini ??? Lihat gambarnya di sini: ${imgLink}`;
		const encodeText = encodeURIComponent(text);
		window.open(`${whatsappUrl}${encodeText}`)
	}
</script>

<style lang="css" scoped>
	.hotline img {
		width: 100px;
	}

	.hotline button {
		background-color: transparent;
		border: none;
	}

	.btn-call .fa-whatsapp:hover {
		color: #5cb85c !important;
	}
</style>