.PHONY:package
package:
	zip -r -FS ../newrelic_colors.zip * --exclude '*.git*' --exclude README.md --exclude Makefile
