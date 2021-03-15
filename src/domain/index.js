import {EntryPointFactory} from '@s-ui/domain'

import UsersUseCasesFactory from './users/UseCases/factory'
import TextsUseCasesFactory from './texts/UseCases/factory.js'
import EvaluationsUseCasesFactory from './evaluations/UseCases/factory.js'

import Config from './config'

const config = new Config()

const useCases = {
  create_users_use_case: UsersUseCasesFactory.createUsersUseCase({config}),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({config}), // eslint-disable-line
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config}),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config}),

  get_all_texts_use_case: TextsUseCasesFactory.getAllTextsUseCase({config}),
  get_next_evaluation_texts_use_case: TextsUseCasesFactory.getNextEvaluationTextsUseCase({config}), // eslint-disable-line
  normalize_texts_use_case: TextsUseCasesFactory.normalizeTextsUseCase({config}), // eslint-disable-line
  save_quality_evaluation_texts_use_case: TextsUseCasesFactory.saveQualityEvaluationTextsUseCase({config}), // eslint-disable-line
  save_structure_evaluation_texts_use_case: TextsUseCasesFactory.saveStructureEvaluationTextsUseCase({config}), // eslint-disable-line
  upload_texts_use_case: TextsUseCasesFactory.uploadTextsUseCase({config}),
  upload_prompt_texts_use_case: TextsUseCasesFactory.uploadPromptTextsUseCase({config}), // eslint-disable-line
  upload_student_texts_use_case: TextsUseCasesFactory.uploadStudentTextsUseCase({config}), // eslint-disable-line

  get_csv_stats_filtered_evaluations_use_case: EvaluationsUseCasesFactory.getCSVStatsFilteredEvaluationsUseCase({config}), // eslint-disable-line

  get_stats_structure_evaluations_use_case: EvaluationsUseCasesFactory.getStatsStructureEvaluationsUseCase({config}), // eslint-disable-line
  get_stats_quality_evaluations_use_case: EvaluationsUseCasesFactory.getStatsQualityEvaluationsUseCase({config}), // eslint-disable-line
  get_stats_skipped_evaluations_use_case: EvaluationsUseCasesFactory.getStatsSkippedEvaluationsUseCase({config}), // eslint-disable-line

  get_stats_texts_without_quality_evaluations_use_case: EvaluationsUseCasesFactory.getStatsTextsWithoutQualityEvaluationsUseCase({config}), // eslint-disable-line

  skip_evaluations_use_case: EvaluationsUseCasesFactory.skipEvaluationsUseCase({config}) // eslint-disable-line
}

export default EntryPointFactory({config, useCases})
