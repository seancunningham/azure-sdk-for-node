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

/**
 * Capture storage details for capture description
 *
 */
class Destination {
  /**
   * Create a Destination.
   * @member {string} [name] Name for capture destination
   * @member {string} [storageAccountResourceId] Resource id of the storage
   * account to be used to create the blobs
   * @member {string} [blobContainer] Blob container Name
   * @member {string} [archiveNameFormat] Blob naming convention for archive,
   * e.g.
   * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
   * Here all the parameters (Namespace,EventHub .. etc) are mandatory
   * irrespective of order
   */
  constructor() {
  }

  /**
   * Defines the metadata of Destination
   *
   * @returns {object} metadata of Destination
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Destination',
      type: {
        name: 'Composite',
        className: 'Destination',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          storageAccountResourceId: {
            required: false,
            serializedName: 'properties.storageAccountResourceId',
            type: {
              name: 'String'
            }
          },
          blobContainer: {
            required: false,
            serializedName: 'properties.blobContainer',
            type: {
              name: 'String'
            }
          },
          archiveNameFormat: {
            required: false,
            serializedName: 'properties.archiveNameFormat',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Destination;