export interface GetAnilibriaTitleListParams {
	id_list?: number
	code_list?: string
	filter?: string
	remove?: string
	include?: string
	description_type?: 'html' | 'plain' | 'no_view_order'
	playlist_type?: 'object' | 'array'
}
