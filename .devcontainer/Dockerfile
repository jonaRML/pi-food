ARG IMAGE=bullseye
FROM mcr.microsoft.com/devcontainers/${IMAGE}

RUN apt-get update && apt-get install -y --no-install-recommends postgresql-client \
    && apt-get clean && rm -rf /var/lib/apt/lists/*