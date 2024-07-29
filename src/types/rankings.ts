export type Player = {
  rank: number
  name: string
  brawlhalla_id: number
  best_legend: number
  best_legend_games: number
  best_legend_wins: number
  rating: number
  tier: string
  games: number
  wins: number
  region: string
  peak_rating: number
}

export type Rankings = Player[]
