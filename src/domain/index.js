import { EntryPointFactory } from '@s-ui/domain'

import Config from './config'

const config = new Config()

const useCases = {
}

export default EntryPointFactory({ config, useCases })
