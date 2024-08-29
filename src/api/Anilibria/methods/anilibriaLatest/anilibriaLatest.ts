import { Fetch, QueryParams, QueryParamsModes } from '../../../../helpers'
import { Endpoints } from '../../constants'
import { Release } from '../../types'
import { AnilibriaLatestParams } from './anilibriaLatest.types'

export const anilibriaLatest = (params?: AnilibriaLatestParams) => {
	return Fetch<Release[]>(
		Endpoints.RELEASE_LATEST +
			QueryParams<AnilibriaLatestParams>(params, QueryParamsModes.QUERY)
	)
}
