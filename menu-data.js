// Shared menu catalog for Bean Machine — used by both index.html and admin.html.
// Editing prices/details here changes the source-of-truth defaults; the admin page
// lets staff override these without touching this file, and add brand new items too.
const MENU = {
  classic: [
    { id:'bev-bean', name:'☕ Bean Coffee',   price:15,  type:'drink' },
    { id:'bev-capp', name:'☕ Cappuccino',    price:20,  type:'drink' },
    { id:'bev-esp',  name:'⚡ Espresso',      price:36,  type:'drink' },
    { id:'bev-iced', name:'🧊 Iced Latte',    price:26,  type:'drink' },
    { id:'bev-choc', name:'🍫 Hot Chocolate', price:46,  type:'drink' },
    { id:'bev-matcha',  name:'🍵 Matcha Latte',  price:30,  type:'drink' },
    { id:'ex-lemon',  name:'🥤 Pink Lemonade', price:34,  type:'drink', isDrink:true },
  ],
  bundles: [
    {
      id:'bd-med',
      name:'🥐 Medium Café Meal: 5 Drinks + 5 Waffles',
      price:330,
      type:'bundle',
      drinksIncluded:5,
      description:'Choice of 5 drinks + 5 Wonder Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:5 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:5 }
      ]
    },
    {
      id:'bd-large',
      name:'🥐 Large Café Meal: 10 Drinks + 10 Waffles',
      price:650,
      type:'bundle',
      drinksIncluded:10,
      description:'Choice of 10 drinks + 10 Wonder Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:10 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:10 }
      ]
    },
    {
      id:'bd-bigboy',
      name:'🥐 Big Boy Café Meal: 20 Drinks + 20 Waffles',
      price:1290,
      type:'bundle',
      drinksIncluded:20,
      description:'Choice of 20 Drinks + 20 Wonder Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:20 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:20 }
      ]
    },
    { id:'sp-hay',   name:'🍰🍵🧇🍦 Hayward Special', price:900, type:'bundle',
      description:'Choice of 2 Cakes + 10 Ice Latte + 10 Wonder Waffle',
      components:[
        { type:'choice', label:'Cakes', category:'extras', qty:2, poolIds:['ex-cake-berry','ex-cake-lemon','ex-cake-choc'] },
        { type:'fixed', label:'Iced Latte', category:'classic', itemId:'bev-iced', qty:10 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:10 }
      ]
    },
    {
      id:'ss-med',
      name:'🧇 Simple Sweet Stack Medium: 5 Drinks + 5 Waffles',
      price:440,
      type:'bundle',
      drinksIncluded:5,
      description:'Choice of 5 Drinks + 5 Choice of topped Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:5 },
        { type:'choice', label:'Waffles', category:'extras', qty:5, poolIds:['ex-waffle','ex-waffle-strawnana','ex-waffle-cinapple','ex-waffle-straw','ex-waffle-choc'] }
      ]
    },
    {
      id:'ss-large',
      name:'🧇 Simple Sweet Stack Large: 10 Drinks + 10 Waffles',
      price:870,
      type:'bundle',
      drinksIncluded:10,
      description:'Choice of 10 Drinks + 10 Choice of topped Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:10 },
        { type:'choice', label:'Waffles', category:'extras', qty:10, poolIds:['ex-waffle','ex-waffle-strawnana','ex-waffle-cinapple','ex-waffle-straw','ex-waffle-choc'] }
      ]
    },
    {
      id:'og-bag',
      name:'🧺 On-The-Go Bag: 7 Drinks + 7 Waffles + 2 Ice Cream',
      price:600,
      type:'bundle',
      drinksIncluded:7,
      description:'Choice of 7 Drinks + Choice of 7 Waffles (Wonder/Topped) + Choice of 2 Ice Creams',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:7 },
        { type:'choice', label:'Waffles', category:'extras', qty:7, poolIds:['ex-waffle-strawnana','ex-waffle-cinapple','ex-waffle-straw','ex-waffle-choc'] },
        { type:'choice', label:'Ice Cream', category:'iceCream', qty:2 }
      ]
    },
    {
      id:'pk-beanbox',
      name:'🍱 Bean Box: Large Meal + Lunch Box',
      price:980,
      type:'bundle',
      drinksIncluded:10,
      description:'Choice of 10 Drinks + Wonder Waffles + Lunch Box',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:10 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:10 },
        { type:'fixed', label:'Lunch Box', category:'extras', itemId:'ex-lunch', qty:1 }
      ]
    },
    {
      id:'rf-beanbox',
      name:'🍱 Bean Box Refill: 10 Drinks + 10 Waffles',
      price:680,
      type:'bundle',
      drinksIncluded:10,
      description:'Choice of 10 Drinks + Wonder Waffles',
      components:[
        { type:'choice', label:'Drinks', category:'classic', qty:10 },
        { type:'fixed', label:'Wonder Waffle', category:'extras', itemId:'ex-waffle', qty:10 }
      ]
    },
  ],
  iceCream: [
    { id:'ex-ice-van',   name:'🍦 Vanilla Ice Cream',      price:36, type:'extra' },
    { id:'ex-ice-choc',  name:'🍫🍦 Chocolate Ice Cream',    price:36, type:'extra' },
    { id:'ex-ice-apple', name:'🍏🍦 Apple Ice Cream',        price:36, type:'extra' },
    { id:'ex-ice-banana',name:'🍌🍦 Banana Ice Cream',       price:36, type:'extra' },
    { id:'ex-ice-mango', name:'🥭🍦 Mango Ice Cream',        price:42, type:'extra' },
    { id:'ex-ice-pom',   name:'❤️🍦 Pomegranate Ice Cream',  price:42, type:'extra' },
    { id:'ex-ice-water', name:'🍉🍦 Watermelon Ice Cream',   price:42, type:'extra' },
    { id:'ex-ice-lemon', name:'🍋🍦 Lemon Ice Cream',        price:36, type:'extra' },
    { id:'ex-ice-straw', name:'🍓🍦 Strawberry Ice Cream',   price:36, type:'extra' },
    { id:'ex-ice-pine',  name:'🍍🍦 Pineapple Ice Cream',    price:42, type:'extra' },
  ],
  extras: [
    { id:'ex-cup',    name:'🧁 Cupcake',        price:18,  type:'extra' },
    { id:'ex-cookie', name:'🍪 Cream Cookie',   price:20,  type:'extra' },
    { id:'ex-donut',  name:'🍩 Donut',          price:16,  type:'extra' },
    { id:'ex-waffle', name:'🧇 Wonder Waffle',  price:20,  type:'extra' },
    { id:'ex-waffle-strawnana', name:'🧇🍓🍌 Strawberry-Banana Waffle', price:42,  type:'extra' },
    { id:'ex-waffle-cinapple',  name:'🧇🌰🍏 Cinnamon-Apple Waffle',    price:42,  type:'extra' },
    { id:'ex-waffle-straw',     name:'🧇🍓 Strawberry Waffle',          price:42,  type:'extra' },
    { id:'ex-waffle-choc',      name:'🧇🍫 Chocolate Waffle',           price:42,  type:'extra' },
    { id:'ex-cake-berry', name:'🍓 Berry Cake',      price:70, type:'extra', isCake:true },
    { id:'ex-cake-lemon', name:'🍋 Lemon Cake',      price:70, type:'extra', isCake:true },
    { id:'ex-cake-choc',  name:'🍫 Chocolate Cake',  price:70, type:'extra', isCake:true },
    { id:'ex-cheese', name:'🍰 Cheesecake',     price:24,  type:'extra' },
    { id:'ex-kinder', name:'🥚 Kinder Egg',     price:1000, type:'extra' },
    { id:'ex-lunch',  name:'🍱 Lunch Box',      price:300,  type:'extra' },
    { id:'ex-cocobar', name:'🍫 Coco Bar',      price:32,  type:'extra' },
  ],
  specialty:[], deals:[], packs:[],
  // Catering menu — entirely separate from the regular menu above.
  // Tell Claude what packages/pricing to add and they'll appear as cards here.
  cateringPackages: [
    {
      id:'cat-pd-special',
      name:'🎉 PD Special',
      price:2875,
      type:'catering',
      description:'50 Wonder Waffles + 50 Pink Lemonades + 10 Bean Coffees + 10 Donuts.'
    },
    {
      id:'cat-party-pack',
      name:'🎉 Party Pack',
      price:5340,
      type:'catering',
      description:'Choice of 60 Topped Waffles + Choice of 15 Cakes + 30x Pink Lemonade + 20x Ice Latte'
    },
  ],
};

// Recipes: which ingredients (and how many) each menu item requires, used for the
// "Required Ingredients" prep-sheet feature. Editable/extendable from admin.html →
// Recipes & Ingredients. New items can be given a recipe there without needing code changes.
const RECIPE_MAP = {
  'bev-bean': {'Water':2,'Coffee bag':1},
  'bev-capp': {'Coffee bag':1,'Water':1,'Milk':1},
  'bev-iced': {'Coffee bag':1,'Sugar':1,'Milk':1,'Water':1},
  'bev-esp' : {'Coffee bag':2,'Water':2},
  'bev-choc': {'Milk':1,'Sugar':1,'Cocoa Powder':2},
  'bev-matcha': {'Macha Powder':2,'Water':2},
  'ex-ice-van'  : {'Ice Cream Cone':1,'Milk':1},
  'ex-ice-choc' : {'Ice Cream Cone':1,'Milk':1,'Cocoa Powder':1},
  'ex-ice-apple': {'Ice Cream Cone':1,'Milk':1,'Apple':1},
  'ex-ice-banana':{'Ice Cream Cone':1,'Milk':1,'Banana':1},
  'ex-ice-mango': {'Ice Cream Cone':1,'Milk':1,'Mango':1},
  'ex-ice-pom'  : {'Ice Cream Cone':1,'Milk':1,'Pomegranate':1},
  'ex-ice-water': {'Ice Cream Cone':1,'Milk':1,'Watermelon':1},
  'ex-ice-lemon': {'Ice Cream Cone':1,'Milk':1,'Lemon':1},
  'ex-ice-straw' : {'Ice Cream Cone':1,'Milk':1,'Strawberry':2},
  'ex-ice-pine'  : {'Ice Cream Cone':1,'Pineapple':1,'Milk':1},
  'ex-cake-berry': {'Flour':1,'Sugar':1,'Milk':1,'Egg':1,'Cherry':1,'Strawberry':1},
  'ex-cake-lemon': {'Flour':1,'Sugar':1,'Milk':1,'Egg':1,'Lemon':2},
  'ex-cake-choc' : {'Flour':1,'Sugar':1,'Milk':1,'Egg':1,'Cocoa Powder':2},
  'ex-waffle-strawnana': {'Wonder Waffle':1,'Strawberry':1,'Banana':1},
  'ex-waffle-cinapple' : {'Wonder Waffle':1,'Cinnamon':1,'Apple':1},
  'ex-waffle-straw'    : {'Wonder Waffle':1,'Strawberry':1},
  'ex-waffle-choc'     : {'Wonder Waffle':1,'Cocoa Powder':1},
  'og-bag'             : {'Bag':1},
  'ex-cocobar'         : {'Cocoa Powder':2,'Milk':1},
};

// Per-unit ingredient cost (not a menu price — used for the ingredient/cost list).
// Admin-added ingredients (with or without a price) get merged in here too.
const INGREDIENT_PRICES = {};


const SHOP_SETTINGS = {
  discountTiers: [
    { pct: 10, label: 'State' },
    { pct: 20, label: 'VIP' }
  ],
  deliveryZones: [
    { key: 'city',   label: 'City',   fee: 50 },
    { key: 'sandy',  label: 'Sandy',  fee: 100 },
    { key: 'paleto', label: 'Paleto', fee: 150 }
  ]
};

