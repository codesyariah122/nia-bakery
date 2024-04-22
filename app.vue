<template>
  <div>
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
  const { $pwa } = useNuxtApp()

  useHead({
    title: 'Nia Bakery',
    meta: [
      { name: 'description', content: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi. Menyediakan berbagai pilihan roti, kue, dan pastry yang segar dan lezat, dipanggang dengan bahan berkualitas tinggi. Temukan beragam menu mulai dari roti klasik hingga kue ulang tahun spesial. Kunjungi kami untuk pengalaman kuliner yang memuaskan dan pelayanan ramah di Nia Bakery.' }
      ],
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
    ],
    script:[
    {
      src: 'https://code.jquery.com/jquery-3.4.1.min.js',
      body: true
    },
    {
      src: '/lib/owlcarousel/owl.carousel.min.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
      body: true
    },
    {
      src: '/lib/wow/wow.min.js',
      body: true
    },
    {
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA',
      body: true
    },
    {
      src: '/lib/easing/easing.min.js',
      body: true
    },
    {
      src: '/lib/waypoints/waypoints.min.js',
      body: true
    },
    {
      src: '/lib/counterup/counterup.min.js',
      body: true
    },
    ]
  });

  useSeoMeta({
    title: 'Nia Bakery',
    ogTitle: 'Nia Bakery',
    description: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi',
    ogDescription: 'Nia Bakery: Toko roti dan kue terbaik di Cimahi',
    ogImage: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/09/Resep-Bolu-Susu-Santan-1204105440.jpg',
    twitterCard: 'summary_large_image',
  })

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  })
</script>