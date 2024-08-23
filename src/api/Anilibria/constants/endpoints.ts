import { URI } from './uri'

export const enum Endpoints {
	APP = URI.ANILIBRIA_API_URI + '/app',
	APP_SEARCH = APP + '/search/release',
	ANIME = URI.ANILIBRIA_API_URI + '/anime',
	GENRES = ANIME + '/genres',
	GENRES_RANDOM = GENRES + '/random',
	RELEASE = ANIME + '/release',
	RELEASE_LATEST = RELEASE + '/latest',
	RELEASE_RANDOM = RELEASE + '/random',
	RELEASE_EPISODES = RELEASE + '/episodes',
	SCHEDULE = ANIME + '/schedule',
	SCHEDULE_NOW = SCHEDULE + '/now',
	SCHEDULE_WEEK = SCHEDULE + '/week'
}
