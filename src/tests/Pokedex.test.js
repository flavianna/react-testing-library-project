import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokédex e...', () => {
  test('verifica se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const verifyTag = screen.getByRole('heading', {
      name: /encountered pokémon/i,
    });
    expect(verifyTag).toBeInTheDocument();
  });

  test('verifica se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const buttonText = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    userEvent.click(buttonText);
    const Pokemon = screen.getByText('Charmander');
    expect(Pokemon).toBeInTheDocument();
  });

  test('verifica se é mostrado apenas um Pokémon por vez;', () => {
    renderWithRouter(<App />);
    const PokemonName = screen.getAllByTestId('pokemon-name');
    // getAllBy retorna um array
    expect(PokemonName[0]).toBeInTheDocument();
  });

  test('verifica se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonTypeFilter = screen.getAllByTestId('pokemon-type-button');
    expect(buttonTypeFilter[0]).toBeInTheDocument();

    const psychic = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(psychic);
    const alakazamPokemon = screen.getByText('Alakazam');
    // getAllBy retorna um array
    expect(alakazamPokemon).toBeInTheDocument();
  });

  test('verifica se a Pokédex contém um botão (All) para resetar o filtro', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(allBtn);
    expect(allBtn).toBeInTheDocument();
  });
});
