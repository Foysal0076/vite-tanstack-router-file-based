import { createFileRoute, Link } from '@tanstack/react-router'
import { getPokemonList } from '../../api/pokemon'

export const Route = createFileRoute('/pokemon/')({
  component: RouteComponent,
  loader: async () => await getPokemonList(),
})

function RouteComponent() {
  const pokemons = Route.useLoaderData()
  console.log(pokemons)
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
