export interface GetAnilibriaTitleListParams {
	id_list: string[]
	code_list?: string[]
	filter?: string[]
	include?: string[]
	playlist_type?: 'object' | 'array'
	page?: number
	items_per_page?: number
}
