<template>
  <h1 class="text-2xl font-bold">Hello, World!</h1>
</template>

<script setup lang="ts">
const siteUrl = 'https://app.shan.kz'

useSeoMeta({
  title: 'Shanyraq — система управления банкетами для ресторанов',
  description:
    'Shanyraq помогает ресторанам удобно управлять банкетами, клиентами, оплатами и расписанием в одном сервисе. Автоматизируйте учёт заявок и контролируйте каждый банкет без хаоса.',

  ogTitle: 'Shanyraq — система управления банкетами для ресторанов',
  ogDescription:
    'Удобная CRM-система для ресторанов и банкетных залов: заявки, клиенты, оплаты, расписание и контроль банкетов в одном месте.',
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`,

  twitterCard: 'summary_large_image',
  twitterTitle: 'Shanyraq — система управления банкетами для ресторанов',
  twitterDescription:
    'Сервис для управления банкетами, клиентами, оплатами и расписанием ресторана.',
  twitterImage: `${siteUrl}/og-image.jpg`,

  robots: 'index, follow',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: siteUrl,
    },
  ],
})

navigateTo('/dashboard')
</script>
