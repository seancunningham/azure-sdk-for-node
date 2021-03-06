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
 * An MX record.
 *
 */
class MxRecord {
  /**
   * Create a MxRecord.
   * @member {number} [preference] The preference value for this MX record.
   * @member {string} [exchange] The domain name of the mail host for this MX
   * record.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MxRecord
   *
   * @returns {object} metadata of MxRecord
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MxRecord',
      type: {
        name: 'Composite',
        className: 'MxRecord',
        modelProperties: {
          preference: {
            required: false,
            serializedName: 'preference',
            type: {
              name: 'Number'
            }
          },
          exchange: {
            required: false,
            serializedName: 'exchange',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MxRecord;
