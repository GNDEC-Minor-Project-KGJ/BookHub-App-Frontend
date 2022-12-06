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
    {
      id: 1202,
      desc: 'Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.The protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding.To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.He will have to face his enemy in one final battle.--jkrowling.com',
      author: 'J.K. Rowling',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg',
      rating: '4.62',
      title: 'Harry Potter and the Deathly Hallows',
      word_count: 91,
      cleaned_desc:
        'harry potter leaving privet drive last time climbs sidecar hagrids motorbike take skies knows lord voldemort death eaters far behind the protective charm kept safe broken dark lord breathing fear everything loves knows cant keep hiding to stop voldemort harry knows must find remaining horcruxes destroy them he face enemy one final battle jkrowling com',
    },
    {
      id: 1128,
      desc: 'The lifeblood of your business is repeat customers. But customers can be fickle, markets shift, and competitors are ruthless. So how do you ensure a steady flow of repeat business? The secret—no matter what industry you’re in—is finding and keeping automatic customers.These days virtually anything you need can be purchased through a subscription, with more convenience than ever before. Far beyond Spotify, Netflix, and New York Times subscriptions, you can sign up for weekly or monthly supplies of everything from groceries (AmazonFresh) to cosmetics (Birchbox) to razor blades (Dollar Shave Club).According to John Warrillow, this emerging subscription economy offers huge opportunities to companies that know how to turn customers into subscribers. Automatic customers are the key to increasing cash flow, igniting growth, and boosting the value of your company.Consider Whatsapp, the internet-based messaging service that was purchased by Facebook for $19 billion. While other services bombarded users with invasive ads in order to fund a free messaging platform, Whatsapp offered a refreshingly private tool on a subscription platform, charging just $1 per year. Their business model enabled the kind of service that customers wanted and ensured automatic customers for years to come.As Warrillow shows, subscriptions aren’t limited to technology or media businesses. Companies in nearly any industry, from start-ups to the Fortune 500, from home contractors to florists, can build subscriptions into their business.Warrillow provides the essential blueprint for winning automatic customers with one of the nine subscription business models, including:The Membership Website Model: Companies like The Wood Whisperer Guild, ContractorSelling.com, and DanceStudioOwner.com offer access to highly specialized, high quality information, recognizing that people will pay for good content. This model can work for any business with a tightly defined niche market and insider information.The Simplifier Model: Companies like Mosquito Squad (pest control) and Hassle Free Homes (home maintenance) take a recurring task off your to-do list. Any business serving busy consumers can adopt this model not only to create a recurring revenue stream, but also to take advantage of the opportunity to cross-sell or bundle their services.The Surprise Box Model: Companies like BarkBox (dog treats) and Standard Cocoa (craft chocolate) send their subscribers curated packages of goodies each month. If you can handle the logistics of shipping, giving customers joy in something new can translate to sales on your larger e-commerce site.This book also shows you how to master the psychology of selling subscriptions and how to reduce churn and provides a road map for the essential statistics you need to measure the health of your subscription business.Whether you want to transform your entire business into a recurring revenue engine or just pick up an extra 5 percent of sales growth, The Automatic Customer will be your secret weapon.',
      author: 'Warren Buffett',
      genre: 'Business',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374910955l/17972688.jpg',
      rating: '4.59',
      title: 'Berkshire Hathaway Letters to Shareholders',
      word_count: 450,
      cleaned_desc:
        'lifeblood business repeat customers customers fickle markets shift competitors ruthless ensure steady flow repeat business secretno matter industry youre inis finding keeping automatic customers these days virtually anything need purchased subscription convenience ever before far beyond spotify netflix new york times subscriptions sign weekly monthly supplies everything groceries amazonfresh cosmetics birchbox razor blades dollar shave club according john warrillow emerging subscription economy offers huge opportunities companies know turn customers subscribers automatic customers key increasing cash flow igniting growth boosting value company consider whatsapp internet based messaging service purchased facebook 19 billion services bombarded users invasive ads order fund free messaging platform whatsapp offered refreshingly private tool subscription platform charging 1 per year business model enabled kind service customers wanted ensured automatic customers years come as warrillow shows subscriptions arent limited technology media businesses companies nearly industry start ups fortune 500 home contractors florists build subscriptions business warrillow provides essential blueprint winning automatic customers one nine subscription business models including the membership website model companies like wood whisperer guild contractorselling com dancestudioowner com offer access highly specialized high quality information recognizing people pay good content model work business tightly defined niche market insider information the simplifier model companies like mosquito squad pest control hassle free homes home maintenance take recurring task to do list business serving busy consumers adopt model create recurring revenue stream also take advantage opportunity cross sell bundle services the surprise box model companies like barkbox dog treats standard cocoa craft chocolate send subscribers curated packages goodies month handle logistics shipping giving customers joy something new translate sales larger e commerce site this book also shows master psychology selling subscriptions reduce churn provides road map essential statistics need measure health subscription business whether want transform entire business recurring revenue engine pick extra 5 percent sales growth automatic customer secret weapon',
    },
    {
      id: 1381,
      desc: 'In love we find out who we want to be.In war we find out who we are.FRANCE, 1939In the quiet village of Carriveau, Vianne Mauriac says goodbye to her husband, Antoine, as he heads for the Front. She doesn’t believe that the Nazis will invade France…but invade they do, in droves of marching soldiers, in caravans of trucks and tanks, in planes that fill the skies and drop bombs upon the innocent. When a German captain requisitions Vianne’s home, she and her daughter must live with the enemy or lose everything. Without food or money or hope, as danger escalates all around them, she is forced to make one impossible choice after another to keep her family alive.Vianne’s sister, Isabelle, is a rebellious eighteen-year-old girl, searching for purpose with all the reckless passion of youth. While thousands of Parisians march into the unknown terrors of war, she meets Gäetan, a partisan who believes the French can fight the Nazis from within France, and she falls in love as only the young can…completely. But when he betrays her, Isabelle joins the Resistance and never looks back, risking her life time and again to save others.With courage, grace and powerful insight, bestselling author Kristin Hannah captures the epic panorama of WWII and illuminates an intimate part of history seldom seen: the women’s war. The Nightingale tells the stories of two sisters, separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied, war-torn France–a heartbreakingly beautiful novel that celebrates the resilience of the human spirit and the durability of women. It is a novel for everyone, a novel for a lifetime.',
      author: 'Kristin Hannah',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451446316l/21853621.jpg',
      rating: '4.57',
      title: 'The Nightingale',
      word_count: 282,
      cleaned_desc:
        'love find want be in war find are france 1939in quiet village carriveau vianne mauriac says goodbye husband antoine heads front doesnt believe nazis invade francebut invade do droves marching soldiers caravans trucks tanks planes fill skies drop bombs upon innocent german captain requisitions viannes home daughter must live enemy lose everything without food money hope danger escalates around them forced make one impossible choice another keep family alive viannes sister isabelle rebellious eighteen year old girl searching purpose reckless passion youth thousands parisians march unknown terrors war meets getan partisan believes french fight nazis within france falls love young cancompletely betrays her isabelle joins resistance never looks back risking life time save others with courage grace powerful insight bestselling author kristin hannah captures epic panorama wwii illuminates intimate part history seldom seen womens war nightingale tells stories two sisters separated years experience ideals passion circumstance embarking dangerous path toward survival love freedom german occupied war torn francea heartbreakingly beautiful novel celebrates resilience human spirit durability women novel everyone novel lifetime',
    },
    {
      id: 1675,
      desc: "“There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.”My name is Kvothe.I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.You may have heard of me.So begins the tale of a hero told from his own point of view — a story unequaled in fantasy literature. Now in The Wise Man's Fear, an escalating rivalry with a powerful member of the nobility forces Kvothe to leave the University and seek his fortune abroad. Adrift, penniless, and alone, he travels to Vintas, where he quickly becomes entangled in the politics of courtly society. While attempting to curry favor with a powerful noble, Kvothe uncovers an assassination attempt, comes into conflict with a rival arcanist, and leads a group of mercenaries into the wild, in an attempt to solve the mystery of who (or what) is waylaying travelers on the King's Road.All the while, Kvothe searches for answers, attempting to uncover the truth about the mysterious Amyr, the Chandrian, and the death of his parents. Along the way, Kvothe is put on trial by the legendary Adem mercenaries, is forced to reclaim the honor of the Edema Ruh, and travels into the Fae realm. There he meets Felurian, the faerie woman no man can resist, and who no man has ever survived ... until Kvothe.In The Wise Man's Fear, Kvothe takes his first steps on the path of the hero and learns how difficult life can be when a man becomes a legend in his own time.",
      author: 'Patrick Rothfuss',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452624392l/1215032.jpg',
      rating: '4.57',
      title: "The Wise Man's Fear",
      word_count: 326,
      cleaned_desc:
        'three things wise men fear sea storm night moon anger gentle man my name kvothe i stolen princesses back sleeping barrow kings burned town trebon spent night felurian left sanity life expelled university younger age people allowed in tread paths moonlight others fear speak day talked gods loved women written songs make minstrels weep you may heard me so begins tale hero told point view story unequaled fantasy literature wise man s fear escalating rivalry powerful member nobility forces kvothe leave university seek fortune abroad adrift penniless alone travels vintas quickly becomes entangled politics courtly society attempting curry favor powerful noble kvothe uncovers assassination attempt comes conflict rival arcanist leads group mercenaries wild attempt solve mystery or what waylaying travelers king s road all while kvothe searches answers attempting uncover truth mysterious amyr chandrian death parents along way kvothe put trial legendary adem mercenaries forced reclaim honor edema ruh travels fae realm meets felurian faerie woman man resist man ever survived kvothe in wise man s fear kvothe takes first steps path hero learns difficult life man becomes legend time',
    },
    {
      id: 1199,
      desc: "Harry Potter's third year at Hogwarts is full of new dangers. A convicted murderer, Sirius Black, has broken out of Azkaban prison, and it seems he's after Harry. Now Hogwarts is being patrolled by the dementors, the Azkaban guards who are hunting Sirius. But Harry can't imagine that Sirius or, for that matter, the evil Lord Voldemort could be more frightening than the dementors themselves, who have the terrible power to fill anyone they come across with aching loneliness and despair. Meanwhile, life continues as usual at Hogwarts. A top-of-the-line broom takes Harry's success at Quidditch, the sport of the Wizarding world, to new heights. A cute fourth-year student catches his eye. And he becomes close with the new Defense of the Dark Arts teacher, who was a childhood friend of his father. Yet despite the relative safety of life at Hogwarts and the best efforts of the dementors, the threat of Sirius Black grows ever closer. But if Harry has learned anything from his education in wizardry, it is that things are often not what they seem. Tragic revelations, heartwarming surprises, and high-stakes magical adventures await the boy wizard in this funny and poignant third installment of the beloved series.--scholastic.com",
      author: 'J.K. Rowling',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg',
      rating: '4.56',
      title: 'Harry Potter and the Prisoner of Azkaban',
      word_count: 201,
      cleaned_desc:
        'harry potter s third year hogwarts full new dangers convicted murderer sirius black broken azkaban prison seems he s harry hogwarts patrolled dementors azkaban guards hunting sirius harry can t imagine sirius or matter evil lord voldemort could frightening dementors themselves terrible power fill anyone come across aching loneliness despair meanwhile life continues usual hogwarts top of the line broom takes harry s success quidditch sport wizarding world new heights cute fourth year student catches eye becomes close new defense dark arts teacher childhood friend father yet despite relative safety life hogwarts best efforts dementors threat sirius black grows ever closer harry learned anything education wizardry things often seem tragic revelations heartwarming surprises high stakes magical adventures await boy wizard funny poignant third installment beloved series scholastic com',
    },
    {
      id: 1201,
      desc: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in his case, different can be deadly. --back cover",
      author: 'J.K. Rowling',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6.jpg',
      rating: '4.56',
      title: 'Harry Potter and the Goblet of Fire',
      word_count: 99,
      cleaned_desc:
        'harry potter midway training wizard coming age harry wants get away pernicious dursleys go international quidditch cup wants find mysterious event that s supposed take place hogwarts year event involving two rival schools magic competition happened hundred years wants normal fourteen year old wizard unfortunately harry potter he s normal even wizarding standards case different deadly back cover',
    },
    {
      id: 131,
      desc: "This is not a book just for copywriters and other advertising experts but a book for every business owner, marketing expert or anyone who needs to increase sales.The reason why is because it deals with how to channel the forces in the marketplace which control sales.Put simply, Gene's book addresses the universal problem of all copywriting: How to write a headline — and an ad that follows it — that will open up a whole new market.",
      author: 'Eugene M. Schwartz',
      genre: 'Business',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350483851l/8662312.jpg',
      rating: '4.55',
      title: 'Breakthrough Advertising',
      word_count: 77,
      cleaned_desc:
        'book copywriters advertising experts book every business owner marketing expert anyone needs increase sales the reason deals channel forces marketplace control sales put simply gene s book addresses universal problem copywriting write headline ad follows open whole new market',
    },
    {
      id: 1313,
      desc: "An alternate cover for this isbn can be found here.Here is the third volume in George R.R. Martin's magnificent cycle of novels that includes A Game of Thrones and A Clash of Kings. Together, this series comprises a genuine masterpiece of modern fantasy, destined to stand as one of the great achievements of imaginative fiction.Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as alliances are made and broken. Joffrey sits on the Iron Throne, the uneasy ruler of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, victim of the sorceress who holds him in her thrall. Young Robb still rules the North from the fortress of Riverrun. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world. And as opposing forces manoeuver for the final showdown, an army of barbaric wildlings arrives from the outermost limits of civilization, accompanied by a horde of mythical Others—a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords...",
      author: 'George R.R. Martin',
      genre: 'Non-Fiction',
      url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571318786l/62291.jpg',
      rating: '4.54',
      title: 'A Storm of Swords',
      word_count: 210,
      cleaned_desc:
        'alternate cover isbn found here here third volume george r r martin s magnificent cycle novels includes game thrones clash kings together series comprises genuine masterpiece modern fantasy destined stand one great achievements imaginative fiction of five contenders power one dead another disfavor still wars rage alliances made broken joffrey sits iron throne uneasy ruler seven kingdoms bitter rival lord stannis stands defeated disgraced victim sorceress holds thrall young robb still rules north fortress riverrun meanwhile making way across blood drenched continent exiled queen daenerys mistress three dragons still left world opposing forces manoeuver final showdown army barbaric wildlings arrives outermost limits civilization accompanied horde mythical othersa supernatural army living dead whose animated corpses unstoppable future land hangs balance one rest seven kingdoms exploded veritable storm swords',
    },
  ]);

  useEffect(() => {
    try {
      (async () => {
        const productsAvailableData = await axios.get(
          'http://127.0.0.1:8000/api/top-rated'
        );
        setNewArrivalsProductList([...productsAvailableData]);
      })();
    } catch (error) {
      console.log('Error : ', error);
    }
  }, []);

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
