import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  beforeLoad: async ({ context }) => {
    const { isAuthenticated } = context.authentication
    if (!isAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}
