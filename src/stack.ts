import { StackClientApp } from "@stackframe/react";
import { useNavigate } from "react-router-dom";

console.log(`****** environment variables ******`,
  import.meta.env.VITE_STACK_PROJECT_ID,
  import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY
);

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables based on your project setup
  projectId: import.meta.env.VITE_STACK_PROJECT_ID,
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
  tokenStore: "cookie",
  redirectMethod: {
    useNavigate,
  }
});
