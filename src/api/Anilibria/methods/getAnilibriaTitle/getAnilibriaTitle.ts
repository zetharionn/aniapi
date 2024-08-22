import { Fetch, Params } from '../../../../helpers'
import { Endpoints } from '../../constants'
import type { Title } from '../../types'
import type { GetAnilibriaTitleParams } from './getAnilibriaTitle.types'

export const getAnilibriaTitle = (params?: GetAnilibriaTitleParams) => {
	return Fetch<Title>(Endpoints.TITLE + Params<GetAnilibriaTitleParams>(params))
}
