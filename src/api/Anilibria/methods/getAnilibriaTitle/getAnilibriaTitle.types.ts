export interface GetAnilibriaTitleParams {
	id: number
	code?: string
	filter?: string[]
	remove?: string[]
	playlist_type?: 'object' | 'array'
}
