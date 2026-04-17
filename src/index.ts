import products from './products';

const productName: string = 'shirt';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = 'Big Street 3, New York City, New York';

const product = products.filter(p => p.name === productName)[0];

if (product) {
  if (product.preOrder) {
    console.log(`We'll send you a message when ${productName} is on its way.\n`)
  }

  if (product.price > 25) {
    shipping = 0;
    console.log('We have provided free shipping for this product.\n');
  } else {
    shipping = 5;
  }

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  taxTotal = product.price * taxPercent;
  total = product.price + taxTotal + shipping;
  console.log('------- Receipt --------');
  console.log(`Product: ${productName}`);
  console.log(`Shipping Address: ${shippingAddress}`);
  console.log(`Price: ${product.price}$`);
  console.log(`TAX in ($): ${taxTotal}$`);
  console.log(`Shipping: ${shipping}$`);
  console.log(`Total: ${total}$`);
  console.log('------------------------');
}

