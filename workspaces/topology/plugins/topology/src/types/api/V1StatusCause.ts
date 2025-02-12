/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 * @export
 * @interface V1StatusCause
 */
export interface V1StatusCause {
  /**
   * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.  Examples:   \"name\" - the field \"name\" on the current resource   \"items[0].name\" - the field \"name\" on the first array entry in \"items\"
   * @type {string}
   * @memberof V1StatusCause
   */
  field?: string;
  /**
   * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
   * @type {string}
   * @memberof V1StatusCause
   */
  message?: string;
  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   * @type {string}
   * @memberof V1StatusCause
   */
  reason?: string;
}
