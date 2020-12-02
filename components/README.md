# Components

This is where you store your app modules (a.k.a features). The folder structure for each module is as follows:

```
components
 | --- module1
    | --- example-component     # React component along with related SCSS
       | ....
       | --- index.tsx
       | --- index.scss
    | --- module1.actions.ts    # Redux action creators
    | --- module1.reducer.ts    # Redux reducer
    | --- module1.thunks.ts     # Redux thunks for async actions
    | --- module1.types.ts      # Interfaces/enums for action types, etc
    | --- module1.service.ts    # Services for API calls
  | ....
```
