<template>
	<div>
		<!-- Footer Start -->
		<div class="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
			<div class="container py-5">
				<div class="row g-5">
					<div class="col-lg-3 col-md-6">
						<h4 class="text-light mb-4">Office Address</h4>
						<p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Jl. Hercules 1 No. 29 <br/> Melong Green Garden <br/> Cimahi Selatan</p>
						<p class="mb-2"><i class="fa fa-phone-alt me-3"></i>0813 2122 9245</p>
						<p class="mb-2"><i class="fa fa-envelope me-3"></i>nia_bakery@gmail.com</p>
						<div class="d-flex pt-2">
							<a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
							<a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
							<a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
							<a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<h4 class="text-light mb-4">Photo Gallery</h4>
						<div class="row g-2">
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-1.jpg" alt="Image">
							</div>
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-2.jpg" alt="Image">
							</div>
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-3.jpg" alt="Image">
							</div>
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-2.jpg" alt="Image">
							</div>
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-3.jpg" alt="Image">
							</div>
							<div class="col-4">
								<img class="img-fluid bg-light rounded p-1" src="/img/product-1.jpg" alt="Image">
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.544548100484!2d107.55364377481669!3d-6.924897475118817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5f383f9b935%3A0xca971f17609f18c4!2sJl.%20Hercules%20I%20No.31%2C%20Melong%2C%20Kec.%20Cimahi%20Sel.%2C%20Kota%20Cimahi%2C%20Jawa%20Barat%2040534!5e0!3m2!1sid!2sid!4v1713809202000!5m2!1sid!2sid" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
					
					
				</div>
			</div>
		</div>
		<!-- Footer End -->


		<!-- Copyright Start -->
		<div class="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
			<div class="container">
				<div class="row">
					<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
						&copy; {{year}} <a href="/">Nia Bakery</a>, All Right Reserved.
					</div>
					<div class="col-md-6 text-center text-md-end">
						<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
						Designed By <a href="https://pujiermanto-portfolio.vercel.app">Codesyariah122</a>
						<br>Distributed By: <a class="border-bottom" href="https://codesyariah-webdev.vercel.app/" target="_blank">Codesyariah Web Development</a>
					</div>
				</div>
			</div>
		</div>
		<!-- Copyright End -->


		<!-- Back to Top -->
		<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
	</div>
</template>

<script setup>
	const date = new Date;
	const year = date.getFullYear();
</script>