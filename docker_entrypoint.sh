#!/bin/bash

set -e

echo "Setting environment variables..."
echo "/ be like"
ls -l /
echo "/data be like"
ls -l /data
echo "/fedimint-data be like"
ls -l /fedimint-data
echo "/etc be like"
ls -l /etc
export FM_DATA_DIR="/fedimint-data"
export RPC_USER=$(yq e '.bitcoind-user' /data/start9/config.yaml)
export RPC_PASSWORD=$(yq e '.bitcoind-password' /data/start9/config.yaml)
export FM_BITCOIN_RPC_KIND=bitcoind
export FM_BITCOIN_RPC_URL="http://"${RPC_USER}":"${RPC_PASSWORD}"@bitcoind.embassy:8332"
export FM_BIND_P2P="0.0.0.0:8173"
export FM_BIND_AP="0.0.0.0:8174"

1>&2 echo 'Starting fedimintd'
fedimintd --data-dir "$FM_DATA_DIR/"