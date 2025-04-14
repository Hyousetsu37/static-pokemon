import type { FavoritePokemon } from "@interfaces/favoritePokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const deleteFav = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    ) as FavoritePokemon[];

    const newFavorites = favorites.filter(
      (pokemon) => pokemon.id !== props.pokemon.id
    );
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a
          class="flex flex-col justify-center items-center"
          href={`/pokemon/${props.pokemon.name}`}
        >
          <img
            src={imgSrc}
            alt=""
            width="96px"
            height="96px"
            style={`view-transition-name: card-${props.pokemon.name}`}
          />
          <p class="capitalize">
            # {props.pokemon.id} {props.pokemon.name}
          </p>
        </a>
        <button onClick={deleteFav} class="text-red-400 cursor-pointer">
          Delete
        </button>
      </div>
    </Show>
  );
};
