// Catégories
const categories = ["Courses", "Travaux", "Autres"];

export default function Filters({ selectedCategory, onCategoryChange }) {
      const handleFilter = (e) => {
            const newCategory = e.target.value;
            onCategoryChange(newCategory);
      };

      return (
            <div className="filters">
                  <label htmlFor="filter">Sélectionne une catégorie :</label>
                  <select
                        id="filter"
                        value={selectedCategory}
                        onChange={handleFilter}>
                        <option value="">Catégories</option>
                        {categories.map((category) => (
                              <option key={category} value={category}>
                                    {category}
                              </option>
                        ))}
                  </select>
            </div>
      );
}
