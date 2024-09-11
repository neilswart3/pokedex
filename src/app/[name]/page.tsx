export default function PokemonPage({ params }: { params: { name: string } }) {
  return (
    <div>
      pokemon: <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
