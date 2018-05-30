import {EntryPointFactory} from '@s-ui/domain'

import UsersUseCasesFactory from './users/UseCases/factory'

import Config from './config'

const config = new Config()

const useCases = {
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config})
}

export default EntryPointFactory({config, useCases})
