
test('Order with unintentional side effect', function(){
 var cartProto = {
  items: [],

 addItem: function addItem(item){
  this.items.push(item)
  }
 },

 createCart = function(items){
  var cart = Object.create(protoCart);
  cart.items = items;
  return cart;
 },

 savedCart = createCart(['apple', 'orange', 'pear']),
 
 session = {
  get: function get(){
   return this.cart;
  },

 cart: createCart(savedCart.items),
};

 session.cart.addItem('grapeFruit');

 ok(session.cart.items.indexOf('grapeFruit') !== -1, 'Passes: Session cart has grapefruit. ');
 ok(session.cart.items.indexOf('grapeFruit') === -1, 'Fails: The stored cart is unchanged. ');

});


