import { Names } from './names'
import { Type } from './type'
import { Season } from './season'
import { Age_Rating } from './age_rating'
import { Publish_Day } from './publish_day'
import { Image } from './image'

export interface Release {
	id: number
	type: Type
	year: number
	name: Names
	alias: string
	season: Season
	poster: Image
	fresh_at: string
	created_at: string
	updated_at: string
	is_ongoing: boolean
	age_rating: Age_Rating
	publish_day: Publish_Day
	description: string
	notification: string
	episodes_total: number
	external_player: string
	is_in_production: boolean
	is_blocked_by_geo: boolean
	episodes_are_unknown: boolean
	is_blocked_by_copyrights: boolean
	average_duration_of_episode: number
}
