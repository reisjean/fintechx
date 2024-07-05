describe("testing home", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show the home items", () => {
    cy.get("div[aria-roledescription='carousel']").should("be.visible")

    cy.contains("button", "Previous slide").should("be.visible")
    cy.contains("button", "Next slide").should("be.visible")

    cy.get("h1").contains("Unlock the Power").should("be.visible")
  })

  it("should show the second slide", () => {
    cy.contains("button", "Next slide").click()

    cy.get("h1")
      .contains(/Harness the Innovation of Next-Gen AI/)
      .should("be.visible")
  })

  it("remove it!", () => {
    cy.contains("button", "Next slide").click()
    cy.contains("button", "Next slide").click()
  })
})
