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
export type IUnnamed_1_QueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IUnnamed_1_Query = (
  { __typename?: 'Query' }
  & { shipment?: Types.Maybe<(
    { __typename?: 'Shipment' }
    & Pick<Types.IShipment, 'id'>
  )> }
);


export const Document = gql`
    {
  shipment(id: "123") {
    id
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<IQuery, IQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IQuery, IQueryVariables>(Document, options);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IQuery, IQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IQuery, IQueryVariables>(Document, options);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<IQuery, IQueryVariables>;