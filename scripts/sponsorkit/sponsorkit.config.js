import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  // Rendering configs
  width: 800,
  formats: ['svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    // Default tier
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 0.5,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 1,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 5,
      preset: presets.xl,
    },
  ],
})