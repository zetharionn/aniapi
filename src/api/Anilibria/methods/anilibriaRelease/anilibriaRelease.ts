import { Fetch, Params } from '../../../../helpers'
import type { Release } from '../../types'
import type { AnilibriaReleaseParams } from './anilibriaRelease.types'

export const anilibriaRelease = (params: AnilibriaReleaseParams) => {
	return Fetch<Release>(Params<AnilibriaReleaseParams>(params))
}
