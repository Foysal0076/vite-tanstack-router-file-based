import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

// type ItemFilters = {
//   query: string
//   hasDiscount: boolean
//   categories: Category[]
// }

const ItemFiltersSchema = z.object({
  query: z.string(),
  hasDiscount: z.boolean(),
  categories: z.array(
    z.union([
      z.literal('electronics'),
      z.literal('clothing'),
      z.literal('furniture'),
    ])
  ),
})
export type ItemFilters = z.infer<typeof ItemFiltersSchema>

type Category = 'electronics' | 'clothing' | 'furniture'

export const Route = createFileRoute('/search')({
  //   validateSearch: (search: Record<string, unknown>): ItemFilters => {
  //     return {
  //       query: search.query as string,
  //       hasDiscount: search.hasDiscount === true,
  //       categories: search.categories as Category[],
  //     }
  //   },
  validateSearch: (search: Record<string, unknown>): ItemFilters =>
    ItemFiltersSchema.parse(search),
  component: RouteComponent,
})

function RouteComponent() {
  const { categories, hasDiscount, query } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) })
  }

  return (
    <div>
      <h1>Search</h1>
      You searched for:{' '}
      <input
        type='text'
        value={query}
        onChange={(e) => {
          updateFilters('query', e.target.value)
        }}
      />
      <br />
      <input
        id='hasDiscount'
        type='checkbox'
        checked={hasDiscount}
        onChange={(e) => {
          updateFilters('hasDiscount', e.target.checked)
        }}
      />
      <label htmlFor='hasDiscount'>Has Discount</label>
      <br />
      <select
        value={categories}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions).map(
            (option) => option.value
          )
          updateFilters('categories', selected)
        }}
        multiple>
        <option value='electronics'>Electronics</option>
        <option value='clothing'>Clothing</option>
        <option value='furniture'>Furniture</option>
      </select>
      <br />
      <br />
      <pre>{JSON.stringify({ categories, hasDiscount, query }, null, 2)}</pre>
    </div>
  )
}
