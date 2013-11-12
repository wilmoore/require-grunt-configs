.PHONY: test

test:
	@node -e "require('./' + require('./package').main)"

package: test
