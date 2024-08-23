import { URI } from './uri'

export const enum Endpoints {
	APP = URI.ANILIBRIA_API_URI + '/app',
	SEARCH = APP + '/search/releases',
	ANIME = URI.ANILIBRIA_API_URI + '/anime',
	GENRES = ANIME + '/genres',
	GENRES_RANDOM = GENRES + '/random',
	RELEASES = ANIME + '/releases',
	RELEASES_LATEST = RELEASES + '/latest',
	RELEASE_RANDOM = RELEASES + '/random',
	RELEASES_EPISODES = RELEASES + '/episodes',
	SCHEDULE = ANIME + '/schedule',
	SCHEDULE_NOW = SCHEDULE + '/now',
	SCHEDULE_WEEK = SCHEDULE + '/week'
}
