describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show the home items", () => {
    cy.get("div[aria-roledescription='carousel']").should("be.visible")

    cy.contains("button", "Previous slide").should("be.visible")
    cy.contains("button", "Next slide").should("be.visible")

    cy.get("h1").contains("Unlock the Power").should("be.visible")
  })

  it("should show the second slide and first slide again", () => {
    cy.contains("button", "Next slide").click()

    cy.get("h1")
      .contains(/Harness the Innovation of Next-Gen AI/)
      .should("be.visible")

    cy.contains("button", "Previous slide").click()

    cy.get("h1").contains("Unlock the Power").should("be.visible")
  })

  it("should navigate to the Chat", () => {
    cy.contains("button", "Skip").click()

    cy.get("h3").contains("Assuntos Gerais").should("be.visible")
    cy.get("h1").contains("FinTechX").should("be.visible")
    cy.get("input").should("be.visible")
  })

  it("you should interact with the chat by typing a question and getting an answer", () => {
    cy.contains("button", "Skip").click()

    cy.get("input").type("Quem fundou a FintechX?").type("{enter}")

    cy.get("p").contains("Gandalf").should("be.visible")
    cy.get("p").contains("Dumbledore").should("be.visible")
  })

  it("should navigate to the Profile", () => {
    cy.contains("button", "Skip").click()
    cy.get('[aria-label="profile"]').click()

    cy.get("h1").contains("Frodo Bolseiro").should("be.visible")
  })
})
