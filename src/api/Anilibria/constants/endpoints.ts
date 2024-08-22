import { URI } from '../../../constants'

export const enum Endpoints {
	TITLE = URI.ANILIBRIA_API_URI + '/title',
	LIST_TITLE = Endpoints.TITLE + '/list',
	UPDATES_TITLE = Endpoints.TITLE + '/updates',
	CHANGES_TITLE = Endpoints.TITLE + '/changes',
	SCHEDULE_TITLE = Endpoints.TITLE + '/schedule',
	RANDOM_TITLE = Endpoints.TITLE + '/random',
	SEARCH_TITLE = Endpoints.TITLE + '/search',
	ADVANCED_SEARCH_TITLE = Endpoints.SEARCH_TITLE + '/advanced',
	FRANCHISE_TITLE = Endpoints.TITLE + '/franchises',
	LIST_FRANCHISE_TITLE = Endpoints.FRANCHISE_TITLE + '/list',
	YEARS = URI.ANILIBRIA_API_URI + '/years',
	GENRES = URI.ANILIBRIA_API_URI + '/genres'
}
