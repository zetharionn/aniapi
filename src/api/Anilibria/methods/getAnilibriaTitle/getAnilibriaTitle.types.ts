export interface GetAnilibriaTitleParams {
	id?: number
	code?: string
	filter?: string
	remove?: string
	description_type?: 'html' | 'plain' | 'no_view_order'
	playlist_type?: 'object' | 'array'
}
