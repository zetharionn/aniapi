export interface Player {
	alternative_player: string
	host: string
	list: PlayerList[]
	episodes: Episodes
}

export interface PlayerList {
	episode: number
	name: string
	uuid: string
	created_timestamp: number
	preview: string
	skips: Skips
	hls: Hls
}

export interface Episodes {
	string: string
	first: number
	last: number
}

export interface Skips {
	opening: number[]
	ending: number[]
}

export interface Hls {
	fhd: string
	hd: string
	sd: string
}
