import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const NewArrivalsContext = createContext();

let NewArrivalsProvider = ({ children }) => {
  const [newArrivalsProductList, setNewArrivalsProductList] = useState([
    {
      id: 1882,
      desc: "I long for the days before the Last Desolation.The age before the Heralds abandoned us and the Knights Radiant turned against us. A time when there was still magic in the world and honor in the hearts of men.The world became ours, and yet we lost it. Victory proved to be the greatest test of all. Or was that victory illusory? Did our enemies come to recognize that the harder they fought, the fiercer our resistance? Fire and hammer will forge steel into a weapon, but if you abandon your sword, it eventually rusts away.There are four whom we watch. The first is the surgeon, forced to forsake healing to fight in the most brutal war of our time. The second is the assassin, a murderer who weeps as he kills. The third is the liar, a young woman who wears a scholar's mantle over the heart of a thief. The last is the prince, a warlord whose eyes have opened to the ancient past as his thirst for battle wanes.The world can change. Surgebinding and Shardwielding can return; the magics of ancient days become ours again. These four people are key.One of them may redeem us. And one of them will destroy us.From Brandon Sanderson-who completed Robert Jordan's The Wheel of Time-comes The Stormlight Archive, an ambitious new fantasy epic in a unique, richly imagined setting. Roshar is a world relentlessly blasted by awesome tempests, where emotions take on physical form, and terrible secrets hide deep beneath the rocky landscape.Speak again the ancient oathsLife before death. Strength before weakness. Journey before destination.and return to men the Shards they once bore. The Knights Radiant must stand again!",
      author: 'Brandon Sanderson',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg',
      rating: '4.65',
      title: 'The Way of Kings',
      word_count: 277,
      cleaned_desc:
        'long days last desolation the age heralds abandoned us knights radiant turned us time still magic world honor hearts men the world became ours yet lost it victory proved greatest test all victory illusory enemies come recognize harder fought fiercer resistance fire hammer forge steel weapon abandon sword eventually rusts away there four watch first surgeon forced forsake healing fight brutal war time second assassin murderer weeps kills third liar young woman wears scholar s mantle heart thief last prince warlord whose eyes opened ancient past thirst battle wanes the world change surgebinding shardwielding return magics ancient days become again four people key one may redeem us one destroy us from brandon sanderson who completed robert jordan s wheel time comes stormlight archive ambitious new fantasy epic unique richly imagined setting roshar world relentlessly blasted awesome tempests emotions take physical form terrible secrets hide deep beneath rocky landscape speak ancient oathslife death strength weakness journey destination and return men shards bore knights radiant must stand again',
    },
  ]);

  const random_number = Math.floor(Math.random() * 10) + 1;
  let parameter = random_number % 2 == 0 ? 'top-rated' : 'longest';

  useEffect(() => {
    try {
      (async () => {
        const productsAvailableData = await axios.get(
          `http://127.0.0.1:8000/api/${parameter}`
        );
        console.log(productsAvailableData);
        setNewArrivalsProductList([...productsAvailableData.data]);
      })();
    } catch (error) {
      console.log('Error : ', error);
    }
  }, []);

  console.log({ newArrivalsProductList });

  return (
    <NewArrivalsContext.Provider
      value={{
        newArrivalsProductList,
        setNewArrivalsProductList,
      }}
    >
      {children}
    </NewArrivalsContext.Provider>
  );
};

let useNewArrivals = () => useContext(NewArrivalsContext);

export { NewArrivalsProvider, useNewArrivals };
