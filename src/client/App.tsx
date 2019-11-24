/** @format */

import React from 'react'

import GraphqlTest from './components/GraphqlTest'

interface IAppProps {
    prefix: string
}

const App: React.FC<IAppProps> = ({ prefix }) => {
    return (
        <div>
            <h1>
                {prefix}
                <GraphqlTest />
            </h1>
        </div>
    )
}

export default App
