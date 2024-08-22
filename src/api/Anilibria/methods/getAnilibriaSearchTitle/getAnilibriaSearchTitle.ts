import { Fetch, Params } from '../../../../helpers'
import { Endpoints } from '../../constants'
import { Title } from '../../types'
import { GetAnilibriaSearchTitleParams } from './getAnilibriaSearchTitle.types'

export const getAnilibriaSearchTitle = (
	params: GetAnilibriaSearchTitleParams
) => {
	return Fetch<Title[]>(
		Endpoints.SEARCH_TITLE + Params<GetAnilibriaSearchTitleParams>(params)
	)
}
