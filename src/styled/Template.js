import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'

export const Header = styled.header`
	text-align: center;
	font-size: 2em;
	font-family: 'Roboto', sans-serif;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: 80%;
	min-height: 80vh;
	${media.handheld`
		width: 100%;
	`}
`

export const Main = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
}
