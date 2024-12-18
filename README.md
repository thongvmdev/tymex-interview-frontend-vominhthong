# TymeX Assignment

Thank you for giving me the opportunity to work on this assignment. Below, I have outlined the tasks I completed, including demo link. Please feel free to review and share your feedback.

## Tech Stack

The project utilizes the following technologies:

- **React 18** with **TypeScript**
- **Vite**
- **SWC**
- **Ant Design**
- **SCSS Modules**
- **Axios**
- **React Router v6**
- **ESLint** and **Prettier**
- **Jest** with **React Testing Library**

## Features

### Marketplace Page

The main page is implemented in **Marketplace**, displaying a list of products.

### Product Listing

- **ProductList**
- **ProductCard**

### Product Filtering

- **FormFilter**

### Category Tabs

- **ProductCategory**

### Layout Components

- **Header**

- **Footer**

- **MainLayout**

### Responsive Design

- Utilizes SCSS mixins from media.scss for responsiveness.
- Breakpoints defined in media.scss ensure compatibility across devices.

### Testing

- Test configurations in `jest.config.ts` and `jest.setup.ts`.
- Sample tests like `ProductCard.test.tsx`.

## Getting Started

To run the project locally:

```sh
yarn install
yarn dev
```

Build the project for production:

```sh
yarn build:prod
```

Run the tests:

```sh
yarn test
```

## Folder Structure

The workspace has the following structure:

```
tyme-assginment/
├── __mocks__/
├── coverage/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   ├── atoms/
│   │   ├── layouts/
│   │   ├── molecules/
│   │   └── pages/
│   ├── constants/
│   ├── interfaces/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   └── utils/
├── jest.config.ts
├── jest.setup.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Deployment

- **Firebase Hosting**

## Code Coverage

- After running the tests, a code coverage report is generated in the coverage directory. You can open the index.html file inside lcov-report to view the detailed coverage report in your browser.

## Demo link

- https://tymex-396ee.web.app/marketplace
