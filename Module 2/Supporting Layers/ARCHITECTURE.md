# Supporting Layers Refactor

This project separates cross-cutting concerns into three supporting layers.

## validators/
`article.validator.js` contains the reusable Express Validator chains for creating and updating articles. Routes import these chains and use the shared validation middleware.

## utils/
- `AppError.js` defines the shared operational error type.
- `asyncHandler.js` forwards rejected async route-handler promises to Express error middleware.
- `validateRequest.js` checks Express Validator results and forwards a 422 `AppError` when validation fails.

## config/
`index.js` is the only module that reads `process.env`. It exports the application port, environment, JWT secret, and numeric article limit.

Copy `.env.example` to `.env` for local development and replace the example JWT secret. The real `.env` file is ignored by Git.
