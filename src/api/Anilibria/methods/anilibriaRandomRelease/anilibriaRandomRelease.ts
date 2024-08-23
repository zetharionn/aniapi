import { Fetch, Params } from '../../../../helpers'
import type { Release } from '../../types'
import type { AnilibriaRandomReleaseParams } from './anilibriaRandomRelease.types'

export const anilibriaRandomRelease = (
	params?: AnilibriaRandomReleaseParams
) => {
	return Fetch<Release>(Params<AnilibriaRandomReleaseParams>(params))
}
