.PHONY: clean build deploy
.DEFAULT_GOAL := deploy

clean: ## Remove autogenerated folders
	rm -Rf ./public

build: ## Build a SPA app
	sui-bundler build -C
	cp -R ./statics/ ./public/
	cp ./public/index.html ./public/200.html

deploy: clean build ## deploy new app
	surge public/ -d https://text-handler-$(STAGE).surge.sh

help: ## show help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
