# TypeMart

A type-safe purchase flow for an online shop, built as a TypeScript exercise. The project handles product lookup, shipping calculation, tax logic, and receipt generation.

## Motivation

TypeMart is a CodeCademy learning project focused on writing type-safe e-commerce logic in TypeScript. The goal is to ensure that all product data and purchase calculations are correctly typed, reducing runtime errors.

## Code style

[![TypeScript](https://img.shields.io/badge/code%20style-typescript-blue.svg)](https://www.typescriptlang.org/)

## Tech/framework used

**Built with**
- [TypeScript](https://www.typescriptlang.org/) ^6.0.3
- [Node.js](https://nodejs.org/)

## Features

- Product lookup by name
- Pre-order detection with customer notification
- Automatic free shipping for products over $25
- State-based tax calculation (New York: 10%, other: 5%)
- Itemized receipt output in the console

## Code Example

```typescript
const product = products.filter(p => p.name === productName)[0];

if (product.preOrder) {
  console.log(`We'll send you a message when ${productName} is on its way.`);
}
```

## Installation

```bash
git clone <repo-url>
cd TypeMart
npm install
```

## How to use?

1. Open `src/index.ts` and change `productName` to the desired product.
2. Compile the project:
   ```bash
   npx tsc
   ```
3. Run the output:
   ```bash
   node dist/index.js
   ```

## License

MIT © Love Holmgren
