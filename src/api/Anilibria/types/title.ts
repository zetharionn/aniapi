import { Posters } from './posters'
import { Names } from './names'
import { Status } from './status'
import { Type } from './type'
import { Team } from './team'
import { Season } from './season'
import { Franchises } from './franchises'

export interface Title {
	id: number
	code: string
	name: Names
	posters: Posters
	update: number
	last_change: number
	status: Status
	type: Type
	genres: string[]
	team: Team
	season: Season
	year: number
	week_day: number
	description: string
	franchises: Franchises
}
