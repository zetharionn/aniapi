export interface GetAnilibriaSearchTitleParams {
	search?: string
	year?: string
	season_code?: number
	genres?: string
	team?: string
	voice?: string
	type?: string
	filter?: string
	remove?: string
	include?: string
	description_type?: 'html' | 'plain' | 'no_view_order'
	playlist_type?: 'object' | 'array'
	limit?: number
	after?: number
	order_by?: string
	sort_direction?: 0 | 1
	page?: number
	items_per_page?: number
}
