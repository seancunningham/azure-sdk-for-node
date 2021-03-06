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
 * Subscription create details.
 *
 */
class SubscriptionCreateParameters {
  /**
   * Create a SubscriptionCreateParameters.
   * @member {string} userId User (user id path) for whom subscription is being
   * created in form /users/{uid}
   * @member {string} productId Product (product id path) for which
   * subscription is being created in form /products/{productid}
   * @member {string} displayName Subscription name.
   * @member {string} [primaryKey] Primary subscription key. If not specified
   * during request key will be generated automatically.
   * @member {string} [secondaryKey] Secondary subscription key. If not
   * specified during request key will be generated automatically.
   * @member {string} [state] Initial subscription state. If no value is
   * specified, subscription is created with Submitted state. Possible states
   * are * active – the subscription is active, * suspended – the subscription
   * is blocked, and the subscriber cannot call any APIs of the product, *
   * submitted – the subscription request has been made by the developer, but
   * has not yet been approved or rejected, * rejected – the subscription
   * request has been denied by an administrator, * cancelled – the
   * subscription has been cancelled by the developer or administrator, *
   * expired – the subscription reached its expiration date and was
   * deactivated. Possible values include: 'suspended', 'active', 'expired',
   * 'submitted', 'rejected', 'cancelled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubscriptionCreateParameters
   *
   * @returns {object} metadata of SubscriptionCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubscriptionCreateParameters',
      type: {
        name: 'Composite',
        className: 'SubscriptionCreateParameters',
        modelProperties: {
          userId: {
            required: true,
            serializedName: 'properties.userId',
            type: {
              name: 'String'
            }
          },
          productId: {
            required: true,
            serializedName: 'properties.productId',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 100,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          primaryKey: {
            required: false,
            serializedName: 'properties.primaryKey',
            constraints: {
              MaxLength: 256,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          secondaryKey: {
            required: false,
            serializedName: 'properties.secondaryKey',
            constraints: {
              MaxLength: 256,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'Enum',
              allowedValues: [ 'suspended', 'active', 'expired', 'submitted', 'rejected', 'cancelled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = SubscriptionCreateParameters;
