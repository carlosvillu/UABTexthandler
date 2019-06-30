[![Build Status](https://travis-ci.org/carlosvillu/UABTexthandler.svg?branch=master)](https://travis-ci.org/carlosvillu/UABTexthandler)

# deploy

Set up:

* NODE_ENV
* STAGE

run:

`$ make deploy`

# Links by ENVs:

* https://text-handler-production.surge.sh
* https://text-handler-development.surge.sh

# TODO:

## High pri
- [ ] there must be a first page, right after login, that asks the user to select which type of evaluation he/she wants to perform: quality or structure
- [x] We need two different tables to store the evaluations: one for the structure evaluations and one of the quality evaluations
- [x] In the structure evaluation screen, the type of explanation drop-down menu is an optional field
- [ ] Add, for both evaluation types, the prompt that was given

## Low pri
- [ ] make a third type of table that stores the IDs of texts that have been skipped (saltados); there should be one table for skipped-quality texts and one for skipped-structure texts
- [ ] in the tables of skipped texts,  make it possible to click on the text's ID and show the evaluation screen for that text
- [ ] In the evaluation screen, leave text in the left fixed if you scroll up or down on the right
- [ ] in the quality evaluation screen, add anchor texts for each level, accessible always
- [ ] In the structure evaluation, add downloadable manual
