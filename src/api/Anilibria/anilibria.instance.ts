import type { IAnilibria } from './anilibria.types'
import {
	type AnilibriaLatestParams,
	anilibriaLatest
} from './methods/anilibriaLatest'
import {
	type AnilibriaRandomParams,
	anilibriaRandom
} from './methods/anilibriaRandom'
import {
	type AnilibriaReleaseParams,
	anilibriaRelease
} from './methods/anilibriaRelease'
import {
	type AnilibriaSearchParams,
	anilibriaSearch
} from './methods/anilibriaSearch'

export class Anilibria implements IAnilibria {
	public release(params: AnilibriaReleaseParams) {
		return anilibriaRelease(params)
	}
	public random(params?: AnilibriaRandomParams) {
		return anilibriaRandom(params)
	}
	public search(params: AnilibriaSearchParams) {
		return anilibriaSearch(params)
	}
	public latest(params?: AnilibriaLatestParams) {
		return anilibriaLatest(params)
	}
}
