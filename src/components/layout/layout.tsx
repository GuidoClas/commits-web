import React, { ReactNode } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}