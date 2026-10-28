// Model prices behind the cache card's cost estimate. Pure data: this is the only
// file a price change touches (by hand, or by the monthly price check).
//
// $ per million tokens: base input and cache read. The 1-hour cache write is 2 times
// input. One row per family, set to the family's latest model. Haiku 5.5 is $0.10
// input up to 100K tokens and $0.50 above; long sessions use the higher rate.
//
// Source: https://platform.claude.com/docs/en/about-claude/pricing
export const PRICES_AS_OF = '2026-10-28'

export type Price = { id: string; name: string; input: number; read: number }

export const PRICING: Price[] = [
  { id: 'fable', name: 'FABLE', input: 10, read: 0.25 }, // Fable 5.1
  { id: 'opus', name: 'OPUS', input: 4, read: 0.2 }, // Opus 5.5
  { id: 'sonnet', name: 'SONNET', input: 2, read: 0.1 }, // Sonnet 5.5
  { id: 'haiku', name: 'HAIKU', input: 0.5, read: 0.05 }, // Haiku 5.5, over 100K tokens
]
