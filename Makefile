.PHONY: dev-streamline dev-nelson

dev-streamline:
	cd "$(CURDIR)" && python3 -m http.server 8080

dev-nelson:
	cd "$(CURDIR)/sites/nelsondigital" && python3 -m http.server 8081
