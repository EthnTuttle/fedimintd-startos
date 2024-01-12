# Stage 1: Build yq binary
FROM debian:buster AS builder

ARG PLATFORM
ARG ARCH

RUN apt update && apt install -y ca-certificates
RUN sed -i "s|http://|https://|g" /etc/apt/sources.list
RUN apt-get update && apt-get -y upgrade && apt-get install -y -qq --no-install-recommends wget bash

RUN wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_${PLATFORM} -O /usr/bin/yq && chmod +x /usr/bin/yq

# Stage 2: Create the final image
FROM fedimint/fedimintd:v0.2

# Copy yq binary from the builder stage
COPY --from=builder /usr/bin/yq /bin/yq

# Copy other necessary files
ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
