import { Fetch, Params } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { AnilibriaReleaseParams } from './anilibriaRelease.types'

export const anilibriaRelease = (params: AnilibriaReleaseParams) => {
	return Fetch<Release>(
		Endpoints.RELEASE + Params<AnilibriaReleaseParams>(params)
	)
}
