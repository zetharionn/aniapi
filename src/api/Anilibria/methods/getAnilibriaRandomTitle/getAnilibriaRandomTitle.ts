import { Fetch, Params } from '@helpers'
import { Endpoints } from '../../constants'
import type { Title } from '../../types'
import type { GetAnilibriaRandomTitleParams } from './getAnilibriaRandomTitle.types'

export const getAnilibriaRandomTitle = async (
	params: GetAnilibriaRandomTitleParams
) => {
	return await Fetch<Title>(
		Endpoints.RANDOM_TITLE + Params<GetAnilibriaRandomTitleParams>(params)
	)
}
