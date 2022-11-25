import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <Pokemon.js />', () => {
  test('verifica se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const name = screen.getByText(/pikachu/i);
    expect(name).toBeInTheDocument();

    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');

    const weight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(weight).toBeInTheDocument();

    const image = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('verifica se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails.href).toBe('http://localhost/pokemon/25');
  });

  test('verifica se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);
    const pikachuDestailsPage = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pikachuDestailsPage).toBeInTheDocument();
  });

  test('verifica se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);
    const { pathname } = window.location;
    expect(pathname).toBe('/');
  });
  //
  test('verifica se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);
    const favorite = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favorite);
    const checked = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(checked).toBeInTheDocument();
    expect(checked).toHaveAttribute('src', '/star-icon.svg');
  });
});
