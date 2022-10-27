"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

const queryClient = new QueryClient()

interface ContextProps {
  children: React.ReactNode
}

const Context: React.FC<ContextProps> = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

export default Context