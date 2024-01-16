'use client'
import { ImageObject } from '@components/modules'
import {
  Flex,
  Text,
  Button,
  Box,
  AlertDialog,
  AspectRatio,
} from '@radix-ui/themes'

export default function Home() {
  return (
    <Box>
      <Flex direction="row" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Lets go</Button>
      </Flex>
      <AspectRatio ratio={12 / 4}>
        <ImageObject
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
          alt="A house in a forest"
          isBackground
        />
      </AspectRatio>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Revoke access</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Box>
  )
}
