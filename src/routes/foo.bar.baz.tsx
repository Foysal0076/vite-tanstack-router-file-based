import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/foo/bar/baz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/foo/bar/baz"!</div>
}
