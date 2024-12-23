import { createFileRoute } from '@tanstack/react-router'
import { getPokemonDetails } from '../../api/pokemon'

export const Route = createFileRoute('/pokemon/$id')({
  component: RouteComponent,
  loader: async ({ params }) => await getPokemonDetails(Number(params.id)),
})

function RouteComponent() {
  const { id } = Route.useParams()
  const pokemon = Route.useLoaderData()
  console.log(pokemon)
  return (
    <div>
      Hello /pokemon/{id}
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <dl>
        <dt>Height</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Types</dt>
        <dd>{pokemon.types.join(', ')}</dd>
      </dl>
    </div>
  )
}
