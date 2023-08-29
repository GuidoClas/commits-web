import React, { ReactNode } from 'react'
import Header from '../header/header'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}