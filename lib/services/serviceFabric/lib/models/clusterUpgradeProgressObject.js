/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Information about a cluster upgrade.
 *
 */
class ClusterUpgradeProgressObject {
  /**
   * Create a ClusterUpgradeProgressObject.
   * @member {string} [codeVersion]
   * @member {string} [configVersion]
   * @member {array} [upgradeDomains]
   * @member {string} [upgradeState] Possible values include: 'Invalid',
   * 'RollingBackInProgress', 'RollingBackCompleted', 'RollingForwardPending',
   * 'RollingForwardInProgress', 'RollingForwardCompleted', 'Failed'
   * @member {string} [nextUpgradeDomain]
   * @member {string} [rollingUpgradeMode] Possible values include: 'Invalid',
   * 'UnmonitoredAuto', 'UnmonitoredManual', 'Monitored'. Default value:
   * 'UnmonitoredAuto' .
   * @member {object} [upgradeDescription]
   * @member {string} [upgradeDescription.configVersion]
   * @member {string} [upgradeDescription.codeVersion]
   * @member {string} [upgradeDescription.upgradeKind] Possible values include:
   * 'Invalid', 'Rolling'
   * @member {string} [upgradeDescription.rollingUpgradeMode] Possible values
   * include: 'Invalid', 'UnmonitoredAuto', 'UnmonitoredManual', 'Monitored'
   * @member {number}
   * [upgradeDescription.upgradeReplicaSetCheckTimeoutInSeconds]
   * @member {boolean} [upgradeDescription.forceRestart]
   * @member {boolean} [upgradeDescription.enableDeltaHealthEvaluation]
   * @member {object} [upgradeDescription.monitoringPolicy]
   * @member {string} [upgradeDescription.monitoringPolicy.failureAction]
   * Possible values include: 'Invalid', 'Rollback', 'Manual'
   * @member {string}
   * [upgradeDescription.monitoringPolicy.healthCheckWaitDurationInMilliseconds]
   * @member {string}
   * [upgradeDescription.monitoringPolicy.healthCheckStableDurationInMilliseconds]
   * @member {string}
   * [upgradeDescription.monitoringPolicy.healthCheckRetryTimeoutInMilliseconds]
   * @member {string}
   * [upgradeDescription.monitoringPolicy.upgradeTimeoutInMilliseconds]
   * @member {string}
   * [upgradeDescription.monitoringPolicy.upgradeDomainTimeoutInMilliseconds]
   * @member {object} [upgradeDescription.clusterHealthPolicy]
   * @member {boolean}
   * [upgradeDescription.clusterHealthPolicy.considerWarningAsError] Indicates
   * whether warnings are treated with the same severity as errors.
   * @member {number}
   * [upgradeDescription.clusterHealthPolicy.maxPercentUnhealthyNodes] The
   * maximum allowed percentage of unhealthy nodes before reporting an error.
   * For example, to allow 10% of nodes to be unhealthy, this value would be
   * 10.
   *
   * The percentage represents the maximum tolerated percentage of nodes that
   * can be unhealthy before the cluster is considered in error.
   * If the percentage is respected but there is at least one unhealthy node,
   * the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy nodes
   * over the total number of nodes in the cluster.
   * The computation rounds up to tolerate one failure on small numbers of
   * nodes. Default percentage is zero.
   *
   * In large clusters, some nodes will always be down or out for repairs, so
   * this percentage should be configured to tolerate that.
   * @member {number}
   * [upgradeDescription.clusterHealthPolicy.maxPercentUnhealthyApplications]
   * The maximum allowed percentage of unhealthy applications before reporting
   * an error. For example, to allow 10% of applications to be unhealthy, this
   * value would be 10.
   *
   * The percentage represents the maximum tolerated percentage of applications
   * that can be unhealthy before the cluster is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * application, the health is evaluated as Warning.
   * This is calculated by dividing the number of unhealthy applications over
   * the total number of application instances in the cluster, excluding
   * applications of application types that are included in the
   * ApplicationTypeHealthPolicyMap.
   * The computation rounds up to tolerate one failure on small numbers of
   * applications. Default percentage is zero.
   * @member {array}
   * [upgradeDescription.clusterHealthPolicy.applicationTypeHealthPolicyMap]
   * @member {object} [upgradeDescription.clusterUpgradeHealthPolicy]
   * @member {number}
   * [upgradeDescription.clusterUpgradeHealthPolicy.maxPercentDeltaUnhealthyNodes]
   * The maximum allowed percentage of nodes health degradation allowed during
   * cluster upgrades. The delta is measured between the state of the nodes at
   * the beginning of upgrade and the state of the nodes at the time of the
   * health evaluation. The check is performed after every upgrade domain
   * upgrade completion to make sure the global state of the cluster is within
   * tolerated limits. The default value is 10%.
   * @member {number}
   * [upgradeDescription.clusterUpgradeHealthPolicy.maxPercentUpgradeDomainDeltaUnhealthyNodes]
   * The maximum allowed percentage of upgrade domain nodes health degradation
   * allowed during cluster upgrades. The delta is measured between the state
   * of the upgrade domain nodes at the beginning of upgrade and the state of
   * the upgrade domain nodes at the time of the health evaluation. The check
   * is performed after every upgrade domain upgrade completion for all
   * completed upgrade domains to make sure the state of the upgrade domains is
   * within tolerated limits. The default value is 15%.
   * @member {array} [upgradeDescription.applicationHealthPolicyMap]
   * @member {string} [upgradeDurationInMilliseconds]
   * @member {string} [upgradeDomainDurationInMilliseconds]
   * @member {array} [unhealthyEvaluations]
   * @member {object} [currentUpgradeDomainProgress]
   * @member {string} [currentUpgradeDomainProgress.domainName]
   * @member {array} [currentUpgradeDomainProgress.nodeUpgradeProgressList]
   * @member {string} [startTimestampUtc]
   * @member {string} [failureTimestampUtc]
   * @member {string} [failureReason] Possible values include: 'None',
   * 'Interrupted', 'HealthCheck', 'UpgradeDomainTimeout', 'UpgradeTimeout'
   * @member {object} [upgradeDomainProgressAtFailure]
   * @member {string} [upgradeDomainProgressAtFailure.domainName]
   * @member {array} [upgradeDomainProgressAtFailure.nodeUpgradeProgressList]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClusterUpgradeProgressObject
   *
   * @returns {object} metadata of ClusterUpgradeProgressObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterUpgradeProgressObject',
      type: {
        name: 'Composite',
        className: 'ClusterUpgradeProgressObject',
        modelProperties: {
          codeVersion: {
            required: false,
            serializedName: 'CodeVersion',
            type: {
              name: 'String'
            }
          },
          configVersion: {
            required: false,
            serializedName: 'ConfigVersion',
            type: {
              name: 'String'
            }
          },
          upgradeDomains: {
            required: false,
            serializedName: 'UpgradeDomains',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UpgradeDomainInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'UpgradeDomainInfo'
                  }
              }
            }
          },
          upgradeState: {
            required: false,
            serializedName: 'UpgradeState',
            type: {
              name: 'String'
            }
          },
          nextUpgradeDomain: {
            required: false,
            serializedName: 'NextUpgradeDomain',
            type: {
              name: 'String'
            }
          },
          rollingUpgradeMode: {
            required: false,
            serializedName: 'RollingUpgradeMode',
            defaultValue: 'UnmonitoredAuto',
            type: {
              name: 'String'
            }
          },
          upgradeDescription: {
            required: false,
            serializedName: 'UpgradeDescription',
            type: {
              name: 'Composite',
              className: 'ClusterUpgradeDescriptionObject'
            }
          },
          upgradeDurationInMilliseconds: {
            required: false,
            serializedName: 'UpgradeDurationInMilliseconds',
            type: {
              name: 'String'
            }
          },
          upgradeDomainDurationInMilliseconds: {
            required: false,
            serializedName: 'UpgradeDomainDurationInMilliseconds',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthEvaluationWrapperElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthEvaluationWrapper'
                  }
              }
            }
          },
          currentUpgradeDomainProgress: {
            required: false,
            serializedName: 'CurrentUpgradeDomainProgress',
            type: {
              name: 'Composite',
              className: 'CurrentUpgradeDomainProgressInfo'
            }
          },
          startTimestampUtc: {
            required: false,
            serializedName: 'StartTimestampUtc',
            type: {
              name: 'String'
            }
          },
          failureTimestampUtc: {
            required: false,
            serializedName: 'FailureTimestampUtc',
            type: {
              name: 'String'
            }
          },
          failureReason: {
            required: false,
            serializedName: 'FailureReason',
            type: {
              name: 'String'
            }
          },
          upgradeDomainProgressAtFailure: {
            required: false,
            serializedName: 'UpgradeDomainProgressAtFailure',
            type: {
              name: 'Composite',
              className: 'FailedUpgradeDomainProgressObject'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterUpgradeProgressObject;