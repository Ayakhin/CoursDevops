describe('Remplir le formulaire de connexion', () => {
    it('Remplit le formulaire avec les identifiants', () => {
      // Visite la page de connexion
      cy.visit('https://nowledgeable.com/login')
  
      // Récupère la balise input pour l'email par son attribut name
      const emailInput = cy.get('input[name="_username"]')
  
      // Récupère la balise input pour le mot de passe par son attribut name
      const passwordInput = cy.get('input[name="_password"]')
  
      // Saisit votre email dans le champ de l'email
      emailInput.type('rayanhilliman@gmail.com ')
  
      // Saisit votre mot de passe dans le champ du mot de passe
      passwordInput.type('mdp.')
  
      // Soumet le formulaire de connexion
      cy.get('form').submit()
  
      // Vérifie que vous êtes connecté en vérifiant la présence de certains éléments sur la page après la connexion
      // Par exemple, vous pouvez vérifier la présence du bouton de déconnexion ou d'un élément spécifique sur la page d'accueil après la connexion
    })
  })
  