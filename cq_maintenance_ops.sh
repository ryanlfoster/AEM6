#!/bin/bash

# Author : Jayan Kandathil (Adobe Managed Services)
# Version : 0.1
# Date : April 3, 2013
# Instructions : Copy to CQ's /bin folder, make necessary changes, enable the execute bit and run
# 					Script logs output to cq_maintenance_ops.log

# Echo on
# set -x verbose

# Host that CQ runs on
HOST=localhost

# TCP port CQ listens on
PORT=4502

# CQ Admin user ID
USER=admin

# CQ Admin user password
PASSWORD=admin

# Data Store Garbage Collection
echo $'\n'"Starting Data Store garbage collection..."$'\n'
START=$(date +%s)
curl -u $USER:$PASSWORD -X POST --data "delete=true&delay=1" http://$HOST:$PORT/system/console/jmx/com.adobe.granite%3Atype%3DRepository/op/runDataStoreGarbageCollection/java.lang.Boolean | tee -a cq_maintenance_ops.log
END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Finished."$'\n'
echo "Took $DIFF seconds"$'\n'

# ConsistencyCheck
echo "Starting JCR consistency check..."$'\n'
START=$(date +%s)
curl -u $USER:$PASSWORD -X POST --data "rootNode=%2F&fixInconsistencies=true" http://$HOST:$PORT/system/console/jmx/com.adobe.granite%3Atype%3DRepository/op/consistencyCheck/java.lang.String%2Cjava.lang.Boolean | tee -a cq_maintenance_ops.log
END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Finished."$'\n'
echo "Took $DIFF seconds"$'\n'

# Traversal Check
echo "Starting JCR traversal check..."$'\n'
START=$(date +%s)
curl -u $USER:$PASSWORD -X POST --data "fixInconsistencies=true&logEach=false&rootNode=%2F" http://$HOST:$PORT/system/console/jmx/com.adobe.granite%3Atype%3DRepository/op/traversalCheck/java.lang.String%2Cjava.lang.Boolean%2Cjava.lang.Boolean | tee -a cq_maintenance_ops.log
END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Finished."$'\n'
echo "Took $DIFF seconds"$'\n'

# TarPM Optimization (returns right away, but the op continues to finish)
echo "Starting Workspace Tar files Optimization..."$'\n'
curl -u $USER:$PASSWORD -X POST http://$HOST:$PORT/system/console/jmx/com.adobe.granite:type=Repository/op/startTarOptimization/ | tee -a cq_maintenance_ops.log
echo "TarPM Optimization started asynchronously - please check CQ error.log for details."$'\n'

# Tar Index Merge
echo "Starting Index Tar files optimization..."$'\n'
curl -u $USER:$PASSWORD -X POST --data "background=false" http://$HOST:$PORT/system/console/jmx/com.adobe.granite%3Atype%3DRepository/op/tarIndexMerge/java.lang.Boolean | tee -a cq_maintenance_ops.log
echo "Tar Index Merge started asynchronously - please check CQ error.log for details"$'\n'
