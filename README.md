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

1) there must be a first page, right after login, that asks the user to select which type of evaluation he/she wants to perform: quality or structure
2) We need two different tables to store the evaluations: one for the structure evaluations and one of the quality evaluations
3) in the quality evaluation screen, add anchor texts for each level, accessible always
4) make a third type of table that stores the IDs of texts that have been skipped (saltados); there should be one table for skipped-quality texts and one for skipped-structure texts
5) in the tables of skipped texts,  make it possible to click on the text's ID and show the evaluation screen for that text
6) In the evaluation screen, leave text in the left fixed if you scroll up or down on the right
7) In the structure evaluation screen, the type of explanation drop-down menu is an optional field
8) Add, for both evaluation types, the prompt that was given
9) In the structure evaluation, add downloadable manual
