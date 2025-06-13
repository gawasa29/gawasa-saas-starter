import { SignIn } from "@/components/SingIn"
import { Button, HStack } from "@chakra-ui/react"

export default function Home() {
  return (
    <HStack>
      <Button>Click me</Button>
      <SignIn />
    </HStack>
  )
}
