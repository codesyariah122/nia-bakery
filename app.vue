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