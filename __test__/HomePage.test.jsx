import React from 'react'
import {render, screen} from '@testing-library/react'
import HomePage from '../src/app/page'

jest.mock("../src/contexts/ThemeContext", () => ({
	useTheme: () => ({theme: "light"})
}))

jest.mock("../src/components/StudentCard", () => (props) => (
	<div data-testid="student-card">{props.nama} - {props.role}</div>
))

describe("HomePage", () => {
	it("render the Bootcamp Dashboard Title", () => {
		render(<HomePage/>)
		expect(screen.getByText(/Bootcamp Dashboard/i)).toBeInTheDocument()
	})

	it("menampilkan semua data student", () => {
		render(<HomePage/>)
		const cards = screen.getAllByTestId('student-card')

		expect(cards).toHaveLength(6)
		expect(cards[0]).toHaveTextContent("Faizul")
		expect(cards[5]).toHaveTextContent("Rani")
	})
})