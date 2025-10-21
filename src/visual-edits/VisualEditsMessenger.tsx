"use client";

import { useEffect } from "react";

export default function VisualEditsMessenger() {
  useEffect(() => {
    // Handle visual editing messages if needed
    const handleMessage = (event: MessageEvent) => {
      // Add any visual editing logic here if needed
      console.log("Visual edits message received:", event.data);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null; // This component doesn't render anything visible
}