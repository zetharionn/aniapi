export interface Type {
	full_string: string
	string: string
	episodes: number
	length: number
	code: TypeCodes
}

export const enum TypeCodes {
	MOVIE = 0,
	TV = 1,
	OVA = 2,
	ONA = 3,
	SPECIAL = 4,
	WEB = 5
}
