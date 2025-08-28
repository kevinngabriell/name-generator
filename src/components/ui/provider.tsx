"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"

type ProviderProps = React.ComponentProps<typeof ColorModeProvider>

export function Provider(props: ProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
