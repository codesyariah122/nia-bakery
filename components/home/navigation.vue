<template>
	<div>
		<!-- Topbar Start -->
		<div class="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
			<div class="row gx-0 align-items-center d-none d-lg-flex">
				<div class="col-lg-6 px-5 text-start">
					<ol class="breadcrumb mb-0">
						<li class="breadcrumb-item"><a class="small text-light" href="#">Home</a></li>
						<li class="breadcrumb-item"><a class="small text-light" href="#">Terms</a></li>
						<li class="breadcrumb-item"><a class="small text-light" href="#">Privacy</a></li>
					</ol>
				</div>
				<div class="col-lg-6 px-5 text-end">
					<small>Follow us:</small>
					<div class="h-100 d-inline-flex align-items-center">
						<a class="btn-lg-square text-primary border-end rounded-0" href=""><i class="fab fa-facebook-f"></i></a>
						<a class="btn-lg-square text-primary pe-0" href=""><i class="fab fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
		<!-- Topbar End -->


		<!-- Navbar Start -->
		<nav class="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
			<a href="/" class="navbar-brand ms-4 ms-lg-0">
				<h1 class="text-primary m-0">Nia Bakery</h1>
			</a>
			<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<div class="navbar-nav mx-auto p-4 p-lg-0">
					<a href="/" class="nav-item nav-link active">Home</a>
					<a href="/" class="nav-item nav-link">About</a>
					<a href="/" class="nav-item nav-link">Products</a>
					<a href="/" class="nav-item nav-link">Contact</a>
				</div>
				<div class="call-us d-none d-lg-flex">
					<div class="flex-shrink-0 btn-lg-square border border-light rounded-circle">
						<button @click="whatsappRedirect('6281321229245')">
							<img src="/logo/whatsapp.png" class="">
						</button>
					</div>
					<div class="ps-3">
						<small class="text-primary mb-0">Pesan Langsung</small>
						<p class="text-light fs-5 mb-0">0813 2122 9245</p>
					</div>
				</div>
			</div>
		</nav>
		<!-- Navbar End -->
	</div>
</template>

<script setup>
	const whatsappRedirect = (num) => {
		const whatsappNumber = num;
		const data = {
			name: 'Nia Bakery'
		}
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
		const text = `Halo 🍰, ${data.name} masih ada stok untuk Kue Bolu Jadul di hari ini ? \n bisa saya memesan untuk hari ini ??`;
		const encodeText = encodeURIComponent(text);
		window.open(`${whatsappUrl}${encodeText}`)
	}
</script>

<style lang="css" scoped>
	.call-us {
		cursor: pointer;
	}

	.call-us img {
		width: 30px;
	}

	.call-us button {
		background-color: transparent;
		border: none;
	}

	.call-us button:hover {
		background-color: #fff;
		border-radius: 30px;
		height: 37px;
	}
</style>