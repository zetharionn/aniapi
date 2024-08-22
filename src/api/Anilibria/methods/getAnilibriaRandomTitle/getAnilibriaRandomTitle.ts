import { Fetch, Params } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Title } from '../../types'
import type { GetAnilibriaRandomTitleParams } from './getAnilibriaRandomTitle.types'

export const getAnilibriaRandomTitle = (
	params?: GetAnilibriaRandomTitleParams
) => {
	return Fetch<Title>(
		Endpoints.RANDOM_TITLE + Params<GetAnilibriaRandomTitleParams>(params)
	)
}
