<template>
  <article
    class="rounded-4xl border border-indigo-100 bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
  >
    <p class="text-sm font-medium text-white/70">Совет</p>

    <h2 class="mt-2 text-xl font-semibold tracking-tight">Заполняйте сумму и предоплату</h2>

    <p class="mt-2 text-sm leading-6 text-white/70">
      Тогда финансовый dashboard сможет точнее показывать остатки, средний чек и оплаченные
      мероприятия.
    </p>

    <NuxtLink
      to="/dashboard/banquets"
      class="mt-5 inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
    >
      Перейти к банкетам
    </NuxtLink>
  </article>
</template>
