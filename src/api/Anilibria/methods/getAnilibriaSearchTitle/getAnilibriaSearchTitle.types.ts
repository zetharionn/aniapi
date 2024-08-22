import { Season } from '../../types'

export interface GetAnilibriaSearchTitleParams {
	search?: string[]
	year?: string[]
	type?: string[]
	season_code?: Season
	genres?: string[]
	team?: string[]
	voice?: string[]
	translator?: string[]
	editing?: string[]
	decor?: string[]
	timing?: string[]
	filter?: string[]
	remove?: string[]
	include?: string[]
	playlist_type?: 'object' | 'array'
	limit?: number
	after?: number
	order_by?: string
	sort_direction?: 0 | 1
	page?: number
	items_per_page?: number
}
