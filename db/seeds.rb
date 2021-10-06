# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Description for some of the spices were taken from https://www.unlockfood.ca/en/Articles/Cooking-Food-Preparation/How-to-cook-with-Spices.aspx, https://www.worldspice.com/spices

spices = [
  {
    name: 'Allspice',
    description: 'Allspice tastes like a combination of cinnamon, nutmeg and cloves, which is why it is named “allspice”. This spice is used in both savoury and sweet cooking. It adds a distinct flavour to baked goods like spiced cakes or pumpkin desserts. It’s also used in pickling and is the main ingredient of jerk seasoning. While allspice is used in North American baking, it is more common to South American and Jamaican cooking.',
    flavor: 'Sweet Warm Floral',
    img_URL: 'https://i.imgur.com/0PSx4yH.jpg'
  },
  {
    name: 'Smoked paprika',
    description: 'This spice is made from peppers that are smoked and dried over oak fires. This process gives the red powder a rich, smoky flavor. You can find this smoked variety in mild, medium-hot, and hot. The flavor is still sweet and cool without adding any heat to the dish, unless you purchase a hot, smoked variety.',
    flavor: 'Umami Smoky Earthy',
    img_URL: 'https://i.imgur.com/fBgBuPi.jpg'
  },
  {
    name: 'Ginger',
    description: 'Ginger gives a sweet and spicy flavour to a variety of sweet and savoury dishes. Dried ginger has a different flavour than fresh ginger. Ginger is known for its use in baked goods, gingerbread, spice cookies, ginger ale and ginger beer, but also delicious in savoury dishes like soups and stews like Spicy Chicken and Squash Stew, curries, Asian stir-fries, meats and fruit compotes. Ginger is common in Asian and Southeast Asian cuisines.',
    flavor: 'Warm Earthy Sweet',
    img_URL: 'https://i.imgur.com/Zb4o5RJ.jpg'
  },
  {
    name: 'Cinnamon',
    description: 'Cassia-cinnamon is such a familiar and beloved spice it needs little introduction. A global favorite for its delicious aromatic flavor, we keep a fresh supply flowing through our shop year round.',
    flavor: 'Sweet Warm Floral',
    img_URL: 'https://i.imgur.com/I0Xl6Qk.jpg'
  },
  {
    name: 'Cloves',
    description: 'Use it in baked goods, smoked meats, pickles, sauces, curries and mulled beverages. They can be used whole (and then removed from the final dish) or ground. A little goes a long way for cloves, so use them in moderation.',
    flavor: 'Sweet Warm Tingly',
    img_URL: 'https://i.imgur.com/QGUPqMI.jpg'
  },
  {
    name: 'Nutmeg',
    description: 'Nutmeg, a pungent and a warm, slightly sweet tasting spice, is used to flavor many kinds of baked goods, confections, puddings, potatoes, meats, sausages, sauces, vegetables, and such beverages as eggnog.',
    flavor: 'Sweet Warm Floral',
    img_URL: 'https://i.imgur.com/FpnSCBF.jpg'
  },
  {
    name: 'Black pepper',
    description: 'Salt & Pepper are the best selling seasonings of all time! With a pinch, a dash or a turn of the grinder, you can transform most any dish.',
    flavor: 'Warm Vegetal Tingly',
    img_URL: 'https://i.imgur.com/ApUeJGe.jpg'
  },
  {
    name: 'Star anise',
    description: 'This pretty, star-shaped spice has an intensely sweet licorice taste and smell, offering a notable counter-point of flavor. It has many uses both alone and in combination. Star anise pairs beautifully with sweet potatoes and pumpkin, and offers a unique addition to caramelized onions. Just toss a small piece in the pan and it really brings out the \'beefiness\' of the onions.',
    flavor: 'Sweet Licorice Warm',
    img_URL: 'https://i.imgur.com/FeQLlTV.jpg'
  },
  {
    name: 'Cardamom pod',
    description: 'Cardamom has a strong aroma and warm, spicy-sweet flavour. It is commonly used in pastries, rice dishes and sweet puddings. Because it is so strong, use only a little bit at a time. It is widely used in East Indian and Scandinavian (Denmark, Norway and Sweden) cooking.',
    flavor: 'Citrus Floral Sweet',
    img_URL: 'https://i.imgur.com/RvMlS61.jpg'
  },
  {
    name: 'Salt',
    description: 'Salt & Pepper are the best selling seasonings of all time! With a pinch, a dash or a turn of the grinder, you can transform most any dish.',
    flavor: 'Salty',
    img_URL: 'https://i.imgur.com/1kNIW58.jpg'
  },
  {
    name: 'Garlic powder',
    description: 'The flavors of dried garlic are a little different than the fresh- in some ways more concentrated, but without the more volatile compounds that are lost in the drying process. Regardless, it\'s convenient! Dried garlic is also more palatable to some folks who find the fresh version too intense.',
    flavor: 'Umami Earthy Warm',
    img_URL: 'https://i.imgur.com/3Td94jj.jpg'
  },
  {
    name: 'Parsley',
    description: 'Not all parsely is created equal, and this California-grown variety is much more than simply decorative. One of the richest herbs in chlorophyll, parsely imparts a wonderful, savory and herbaceous base flavor that tastes fresh and provides a lift to the palate. Use parsley in herbal blends, soups and sauces.',
    flavor: 'Herbal Vegetal',
    img_URL: 'https://i.imgur.com/z0snxPu.jpg'
  },
  {
    name: 'Caraway seed',
    description: 'An Eastern European culinary staple; potato, cabbage and heavy meat dishes benefit from the strong, savory character of caraway seed. Its flavor is most recognizable in rye bread. The flavor of caraway infuses seamlessly into maple syrup for a delightful topper on granola and fruit.',
    flavor: 'Umami Nutty Citrus',
    img_URL: 'https://i.imgur.com/xuUBmaH.jpg'
  },
  {
    name: 'Mace',
    description: 'Mace is the red covering of the nutmeg seed. It tastes and smells like a stronger version of nutmeg, and is slightly more bitter. Mace is used to flavour all kinds of foods including baked products, potatoes, cream sauces and sausage. Mace is common in East Indian cooking.',
    flavor: 'Sweet Warm Floral',
    img_URL: 'https://i.imgur.com/ve67QJG.jpg'
  },
  {
    name: 'Coriander seed',
    description: 'Coriander seeds are dried seeds that come from the same plant as the popular herb, cilantro. Coriander seeds taste like a combination of lemon, sage and caraway. This spice can be used for curries, soups, pickling spices and special drinks like mulled wine. It’s most often used in Indian, Mexican, Asian and Caribbean cuisines.',
    flavor: 'Citrus Herbal Floral',
    img_URL: 'https://i.imgur.com/NQwfa7l.jpg'
  },
  {
    name: 'Turmeric',
    description: 'Turmeric has a warm and earthy flavour. It is used to add both flavour and colour (a bright yellow) to foods and is common to Indian and Caribbean cuisines. You\'ll most often find turmeric added to curries and pickled foods.',
    flavor: 'Nutty Earthy Warm',
    img_URL: 'https://i.imgur.com/ei5mPCu.jpg'
  }
]
