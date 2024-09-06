const tables = require("../../database/tables");

// Données en dur pour les catégories
const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Action pour lister toutes les catégories (BROWSE)
  const browse = async (req, res) => {
      const categoriesFromDB = await tables.category.readAll();
    
      res.json(categoriesFromDB);
    };
  
  // Action pour récupérer une catégorie spécifique par ID (READ)
  const read = (req, res) => {
    const categoryId = parseInt(req.params.id, 10);  // Récupère l'ID de la catégorie depuis l'URL
    const category = categories.find((cat) => cat.id === categoryId);  // Cherche la catégorie par ID
  
    if (!category) {
      return res.status(404).send('Category not found');  // Retourne 404 si la catégorie n'existe pas
    }
  
    return res.json(category);  // Retourne la catégorie en JSON si elle est trouvée
  };
  
  // Export des fonctions pour pouvoir les utiliser ailleurs
  module.exports = { browse, read };
  