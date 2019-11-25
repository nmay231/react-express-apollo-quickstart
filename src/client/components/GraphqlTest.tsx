/** @format */

import React from 'react'

import gql from 'graphql-tag'
import { User } from '../../graphql/schema'

import { useQuery } from '@apollo/react-hooks'

const HELLO_QUERY = gql`
    query Hello {
        hello
        echo(input: "What up?")
        me {
            id
            role
        }
    }
`

interface IDataShape {
    hello: string
    echo: string
    me: User
}

interface IGraphqlTestProps {}

const GraphqlTest: React.FC<IGraphqlTestProps> = () => {
    // Tip: Ctrl+Space (or Cmd+Space) is your friend. Use intellisense!
    const { loading, data, error } = useQuery<IDataShape>(HELLO_QUERY)

    if (error) {
        return (
            <div>
                {error.message} <br />
                Did you make sure to run `npm run server` in a separate
                terminal?
            </div>
        )
    } else if (loading) {
        return <div>loading...</div>
    }

    // Change the query and see the output
    console.log(data.me)

    return (
        <>
            {data.hello}
            <br /> <br />
            {data.echo}
        </>
    )
}

export default GraphqlTest
