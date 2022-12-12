import { useState, useContext, createContext } from 'react';

const GenreContext = createContext();

let GenreProvider = ({ children }) => {
  const [fictionCategoryCheckbox, setFictionCategoryCheckbox] = useState(true);
  const [thrillerCategoryCheckbox, setThrillerCategoryCheckbox] =
    useState(true);
  const [techCategoryCheckbox, setTechCategoryCheckbox] = useState(true);
  const [philosophyCategoryCheckbox, setPhilosophyCategoryCheckbox] =
    useState(true);
  const [romanceCategoryCheckbox, setRomanceCategoryCheckbox] = useState(true);
  const [mangaCategoryCheckbox, setMangaCategoryCheckbox] = useState(true);
  const [businessCheckbox, setBusinessCheckbox] = useState(true);
  const [nonfictionCheckbox, setNonfictionCheckbox] = useState(true);

  return (
    <GenreContext.Provider
      value={{
        fictionCategoryCheckbox,
        setFictionCategoryCheckbox,
        thrillerCategoryCheckbox,
        setThrillerCategoryCheckbox,
        techCategoryCheckbox,
        setTechCategoryCheckbox,
        philosophyCategoryCheckbox,
        setPhilosophyCategoryCheckbox,
        romanceCategoryCheckbox,
        setRomanceCategoryCheckbox,
        mangaCategoryCheckbox,
        setMangaCategoryCheckbox,
        businessCheckbox,
        setBusinessCheckbox,
        nonfictionCheckbox,
        setNonfictionCheckbox,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};

let useGenre = () => useContext(GenreContext);

export { GenreProvider, useGenre };
