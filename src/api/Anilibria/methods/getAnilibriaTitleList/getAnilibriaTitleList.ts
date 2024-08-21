import { Fetch, Params } from '../../../../helpers'
import { Endpoints } from '../../constants'
import { Title } from '../../types'
import { GetAnilibriaTitleListParams } from './getAnilibriaTitleList.types'

export const getAnilibriaTitleList = (params: GetAnilibriaTitleListParams) => {
	return Fetch<Title[]>(
		Endpoints.LIST_TITLE + Params<GetAnilibriaTitleListParams>(params)
	)
}
