import { Fetch, QueryParams, QueryParamsModes } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { AnilibriaRandomParams } from './anilibriaRandom.types'

export const anilibriaRandom = (params?: AnilibriaRandomParams) => {
	return Fetch<Release[]>(
		Endpoints.RELEASE_RANDOM +
			QueryParams<AnilibriaRandomParams>(params, QueryParamsModes.QUERY)
	)
}
