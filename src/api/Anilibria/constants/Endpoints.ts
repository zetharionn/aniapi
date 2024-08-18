import { URL } from './URL'

export const enum Endpoints {
	TITLE = URL.ANILIBRIA_API_URL + '/title',
	LIST_TITLE = Endpoints.TITLE + '/list',
	UPDATES_TITLE = Endpoints.TITLE + '/updates',
	CHANGES_TITLE = Endpoints.TITLE + '/changes',
	SCHEDULE_TITLE = Endpoints.TITLE + '/schedule',
	RANDOM_TITLE = Endpoints.TITLE + '/random',
	SEARCH_TITLE = Endpoints.TITLE + '/search',
	ADVANCED_SEARCH_TITLE = Endpoints.SEARCH_TITLE + '/advanced',
	FRANCHISE_TITLE = Endpoints.TITLE + '/franchises',
	LIST_FRANCHISE_TITLE = Endpoints.FRANCHISE_TITLE + '/list',
	YEARS = URL.ANILIBRIA_API_URL + '/years',
	GENRES = URL.ANILIBRIA_API_URL + '/genres'
}
