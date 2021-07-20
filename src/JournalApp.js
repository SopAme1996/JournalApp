import React from 'react'

import { AppRouter } from './components/routes/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function JournalApp() {
    return (
        <>
            <Provider store = { store }>
                <AppRouter />
            </Provider>
        </>
    )
}
