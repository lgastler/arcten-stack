import * as Module from "."

describe("Home route", () => {
	it("should render the home page text properly in english", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",
					Component: Module.default,
				},
			],
		})

		expect(
			getByText("arcten", {
				exact: false,
			})
		).not.toBeNull()
	})

	it("should have the right meta tags", async () => {
		const meta = Module.meta({
			data: null,
			params: {},
			location: {
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default",
			},
			matches: [],
		})
		expect(meta).toEqual([{ title: "arcten" }])
	})
})
