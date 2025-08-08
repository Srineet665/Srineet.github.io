declare module "https://esm.sh/react" {
  import * as React from "react";
  export = React;
}

declare module "https://esm.sh/react-dom@18.2.0/client" {
  import * as ReactDOM from "react-dom/client";
  export = ReactDOM;
}

declare module "https://esm.sh/react/jsx-runtime" {
  export * from "react/jsx-runtime";
}
