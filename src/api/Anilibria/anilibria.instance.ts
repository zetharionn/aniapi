import type { IAnilibria } from './anilibria.types'
import {
	anilibriaRandom,
	AnilibriaRandomParams
} from './methods/anilibriaRandom'
import {
	anilibriaSearch,
	AnilibriaSearchParams
} from './methods/anilibriaSearch'
import {
	anilibriaRelease,
	AnilibriaReleaseParams
} from './methods/anilibriaRelease'
import {
	anilibriaLatest,
	AnilibriaLatestParams
} from './methods/anilibriaLatest'

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
