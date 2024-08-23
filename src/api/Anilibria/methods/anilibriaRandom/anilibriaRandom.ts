import { Fetch, Params } from '../../../../helpers'
import type { Release } from '../../types'
import type { AnilibriaRandomParams } from './anilibriaRandom.types'

export const anilibriaRandom = (params?: AnilibriaRandomParams) => {
	return Fetch<Release>(Params<AnilibriaRandomParams>(params))
}
