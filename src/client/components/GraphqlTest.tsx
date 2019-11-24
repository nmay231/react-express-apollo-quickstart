/** @format */

import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const helloQuery = gql`
    query Hello {
        hello
    }
`

interface IGraphqlTestProps {}

const GraphqlTest: React.FC<IGraphqlTestProps> = () => {
    const { loading, data, error } = useQuery(helloQuery)

    if (loading) {
        return <div>loading...</div>
    }
    return <div>{data.hello}</div>
}

export default GraphqlTest
