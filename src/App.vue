<script setup>
import BasePreloader from '@/components/base/BasePreloader.vue'
import HeroSection from '@/components/HeroSection.vue'
import OfferSection from '@/components/offer/OfferSection.vue'
import StatsSection from '@/components/stats/StatsSection.vue'
import PartnersSection from '@/components/partners/PartnersSection.vue'
import RewardsSection from '@/components/rewards/RewardsSection.vue'
import TeamSection from '@/components/team/TeamSection.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
import StudiesSection from '@/components/studies/StudiesSection.vue'
</script>

<template>
  <main>
    <BasePreloader />
    <HeroSection />
    <OfferSection />
    <StatsSection />
    <PartnersSection />
    <StudiesSection />
    <RewardsSection />
    <TeamSection />
  </main>

  <TheFooter />
</template>
