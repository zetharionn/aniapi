export interface Season {
	year: number
	week_day: number
	string: string
	code: SeasonCode
}

export const enum SeasonCode {
	WINTER = 1,
	SPRING = 2,
	SUMMER = 3,
	AUTUMN = 4
}
