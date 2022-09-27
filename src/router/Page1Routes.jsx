import { Page1 } from "../Page1";

export const page1Routes = [
  {
      path: "/",
      exact: true,
      children: <Page1 />
  },
  {
      path: "/detailA",
      exact: false,
      children: <Page1DetailA />
  },
  {
      path: "/detailB",
      exact: false,
      children: <Page1DetailB />
  },  
];