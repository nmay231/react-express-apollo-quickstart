/** @format */

import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const LOAD_MUTATION = gql`
    mutation UpdatePretendDB($someVariable: String!) {
        doSomethingWith(something: $someVariable)
    }
`

interface IGraphQLButtonProps {}

const GraphQLButton: React.FC<IGraphQLButtonProps> = () => {
    // Tip: Ctrl+Space (or Cmd+Space) is your friend. Use intellisense!
    const [runMutation, { data, called, loading }] = useMutation(LOAD_MUTATION)

    const load = () => {
        runMutation({
            // Notice there is NOT a dollar-sign `$`
            variables: { someVariable: 'data and stuffs' },
        })
    }

    return (
        <div className="mt-5">
            <button onClick={load} className="btn btn-info">
                Click me!
            </button>
            {called && (
                <p className="mt-3">{!loading && data.doSomethingWith}</p>
            )}
        </div>
    )
}

export default GraphQLButton
