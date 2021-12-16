/**
  * @note This is an auto-generated file. Do not modify it directly.
  * @see https://devdocs.transfix.io/graphql
  * 
  * If you need to update the hooks or definitions in this file: 
  * 1. Edit the .graphql file in this directory with the same name
  * 2. Run `npm run generate:graphql:mp` in the terminal
  */

import * as Types from '../../../types/graphqlTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type IShipmentNotesQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type IShipmentNotesQuery = (
  { __typename?: 'Query' }
  & { shipment?: Types.Maybe<(
    { __typename?: 'Shipment' }
    & Pick<Types.IShipment, 'id'>
  )> }
);


export const ShipmentNotesDocument = gql`
    query ShipmentNotes($id: ID!) {
  shipment(id: $id) {
    id
  }
}
    `;

/**
 * __useShipmentNotesQuery__
 *
 * To run a query within a React component, call `useShipmentNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShipmentNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShipmentNotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShipmentNotesQuery(baseOptions: Apollo.QueryHookOptions<IShipmentNotesQuery, IShipmentNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IShipmentNotesQuery, IShipmentNotesQueryVariables>(ShipmentNotesDocument, options);
      }
export function useShipmentNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IShipmentNotesQuery, IShipmentNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IShipmentNotesQuery, IShipmentNotesQueryVariables>(ShipmentNotesDocument, options);
        }
export type ShipmentNotesQueryHookResult = ReturnType<typeof useShipmentNotesQuery>;
export type ShipmentNotesLazyQueryHookResult = ReturnType<typeof useShipmentNotesLazyQuery>;
export type ShipmentNotesQueryResult = Apollo.QueryResult<IShipmentNotesQuery, IShipmentNotesQueryVariables>;