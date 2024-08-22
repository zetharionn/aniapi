import { Posters } from './posters'
import { Names } from './names'
import { Status } from './status'
import { Type } from './type'
import { Team } from './team'
import { Season } from './season'
import { Blocked } from './blocked'
import { Description } from './description'
import { Player } from './player'

export interface Title {
	id: number
	code: string
	names: Names
	posters: Posters
	updated: number
	last_change: number
	status: Status
	type: Type
	genres: string[]
	team: Team
	season: Season
	year: number
	week_day: number
	description: Description
	blocked: Blocked
	player: Player
}

export type Titles = Title[]
