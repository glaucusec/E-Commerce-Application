import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
export default function NotFound() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>404 - Page Not Found</AlertTitle>
      <AlertDescription>
        The requested URL was not found. Your experience may be degraded.
      </AlertDescription>
    </Alert>
  );
}
