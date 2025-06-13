import { SignOut } from "@/components/SignOut"
import { SignIn } from "@/components/SingIn"
import { Button, HStack } from "@chakra-ui/react"
import { auth } from "../../auth"

export default async function Home() {
  const session = await auth()

  return (
    <HStack>
      <Button>Click me</Button>
      <SignIn />
      <SignOut />
      {session?.user?.name}
      {session?.user?.email}
      {session?.user?.id}
      {session?.user?.image}
    </HStack>
  )
}
