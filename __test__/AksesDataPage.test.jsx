import React from "react";
import { render, screen,  } from "@testing-library/react";
import AksesDataPage from "../src/app/akses-data/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('../src/components/ShowPostComponent', () => () => (
	<div data-testid="show-post">ShowPostComponent</div>
))

describe("Akses Data Page", () => {
	it("menampilkan tombol back", () => {
		render(<AksesDataPage/>)

		const button = screen.getByText(/Back To Counter/i)
		expect(button).toBeInTheDocument()
	})

	it("Menampilkan Judul", () => {
		render(<AksesDataPage/>)
		const heading = screen.queryByText("Selamat Datang")

		expect(heading).not.toBeNull()
	})

	it('menampilkan data dari api/backend', async () => {
		render(<AksesDataPage/>)

		const showPost = await screen.findByTestId('show-post')
		expect(showPost).toHaveTextContent('ShowPostComponent')
	})
})