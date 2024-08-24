import { Fetch, QueryParams, QueryParamsModes } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { AnilibriaSearchParams } from './anilibriaSearch.types'

export const anilibriaSearch = (params: AnilibriaSearchParams) => {
	return Fetch<Release[]>(
		Endpoints.APP_SEARCH +
			QueryParams<AnilibriaSearchParams>(params, QueryParamsModes.QUERY)
	)
}
