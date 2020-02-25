.PHONY: install run build deploy

BIN := ./node_modules/.bin

install:
	@echo "Installing Yarn.."
	npm install -g yarn
	@echo "Installing NodeJS dependencies.."
	yarn
	@echo "Installing Python dependencies.."
	pip install -r requirements.txt

run:
	@echo "Running.."
	yarn start

build:
	@echo "Building.."
	yarn build

deploy: build
	@echo "Publishing to S3.."
	@AWS_ACCESS_KEY_ID=$(AWS_ACCESS_KEY) \
	AWS_SECRET_ACCESS_KEY=$(AWS_SECRET_KEY) \
	aws s3 sync build s3://$(AWS_S3_BUCKET) \
			--acl public-read \
			--size-only \
			--cache-control "max-age=2592000"