/** @format */

import React from 'react'

import GraphqlTest from '../components/GraphqlTest'
import GraphQLButton from '../components/GraphQLButton'

const HomePage: React.FC = () => {
    return (
        <div>
            <h1 className="mt-5">
                Hello <GraphqlTest />
                <GraphQLButton />
            </h1>
        </div>
    )
}

export default HomePage
