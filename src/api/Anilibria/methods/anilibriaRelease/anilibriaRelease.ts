import { Fetch, QueryParams, QueryParamsModes } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { AnilibriaReleaseParams } from './anilibriaRelease.types'

export const anilibriaRelease = (params: AnilibriaReleaseParams) => {
	return Fetch<Release[]>(
		Endpoints.RELEASE +
			QueryParams<AnilibriaReleaseParams>(params, QueryParamsModes.PARAMS)
	)
}
