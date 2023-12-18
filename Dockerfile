FROM fedimint/fedimintd:v0.2.0
ENV FM_BIND_P2P="0.0.0.0:8173"
ENV FM_BIND_AP="0.0.0.0:8174"

ADD ./fedimint/misc/fedimintd-container-entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
