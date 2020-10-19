import React from 'react'
import BookScreen from './screens/BookScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
    return (
        <Router>
            <main className='py-3'>
                <Container>
                    <Route path='/' component={BookScreen} exact />
                </Container>
            </main>
        </Router>
    )
}

export default App
