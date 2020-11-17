import React from 'react'
import { graphql } from 'react-apollo'

import theme from '../../style/theme'
import { ThemeProvider } from '../../style/typed-components'

import AppPresenter from './AppPresenter'
import { IS_LOGGED_IN } from './AppQueries'


const AppContainer: React.FC<any> = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        </ThemeProvider>
    )
}

export default graphql(IS_LOGGED_IN)(AppContainer)