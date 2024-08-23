import { Fetch, Params } from '../../../../helpers'
import type { Release } from '../../types'
import type { AnilibriaSearchParams } from './anilibriaSearch.types'

export const anilibriaSearch = (params: AnilibriaSearchParams) => {
	return Fetch<Release[]>(Params<AnilibriaSearchParams>(params))
}
