import {EntryPointFactory} from '@s-ui/domain'

import UsersUseCasesFactory from './users/UseCases/factory'
import TextsUseCasesFactory from './texts/UseCases/factory.js'

import Config from './config'

const config = new Config()

const useCases = {
  create_users_use_case: UsersUseCasesFactory.createUsersUseCase({config}),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({
    config
  }),
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config}),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config}),

  get_all_texts_use_case: TextsUseCasesFactory.getAllTextsUseCase({config}),
  get_next_evaluation_texts_use_case: TextsUseCasesFactory.getNextEvaluationTextsUseCase(
    {
      config
    }
  ),
  normalize_texts_use_case: TextsUseCasesFactory.normalizeTextsUseCase({
    config
  }),
  save_evaluation_texts_use_case: TextsUseCasesFactory.saveEvaluationTextsUseCase(
    {config}
  ),
  upload_texts_use_case: TextsUseCasesFactory.uploadTextsUseCase({config})
}

export default EntryPointFactory({config, useCases})
