import {EntryPointFactory} from '@s-ui/domain'

import UsersUseCasesFactory from './users/UseCases/factory'
import TextsUseCasesFactory from './texts/UseCases/factory.js'
import EvaluationsUseCasesFactory from './evaluations/UseCases/factory.js'

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
  save_quality_evaluation_texts_use_case: TextsUseCasesFactory.saveQualityEvaluationTextsUseCase(
    {config}
  ),
  save_structure_evaluation_texts_use_case: TextsUseCasesFactory.saveStructureEvaluationTextsUseCase(
    {config}
  ),
  upload_texts_use_case: TextsUseCasesFactory.uploadTextsUseCase({config}),

  get_stats_structure_evaluations_use_case: EvaluationsUseCasesFactory.getStatsStructureEvaluationsUseCase(
    {config}
  ),
  get_stats_quality_evaluations_use_case: EvaluationsUseCasesFactory.getStatsQualityEvaluationsUseCase(
    {config}
  )
}

export default EntryPointFactory({config, useCases})
