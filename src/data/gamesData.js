
export const initialGames = [
  { 
      id: 1, 
      title: 'Cyberpunk 2077', 
      store: 'Steam', 
      price: 29990, 
      discount: '-50%', 
      originalPrice: 59990, 
      icon: 'bi-steam',
      image: '/juegos/cyberpunk.jpg' 
    },
    { 
      id: 2, 
      title: 'Elden Ring', 
      store: 'Xbox Store', 
      price: 38990, 
      discount: '-35%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/eldenring.png' 
    },
    { 
      id: 3, 
      title: 'Grand Theft Auto V', 
      store: 'Epic Games', 
      price: 12990, 
      discount: '-60%', 
      originalPrice: 32490, 
      icon: 'bi-controller',
      image: '/juegos/gtaV.png' 
    },
    { 
      id: 4, 
      title: 'Red Dead Redemption 2', 
      store: 'Steam', 
      price: 19990, 
      discount: '-67%', 
      originalPrice: 59990, 
      icon: 'bi-steam',
      image: '/juegos/rdr2.png' 
    },
    { 
      id: 5, 
      title: 'God of War Ragnarök', 
      store: 'PlayStation', 
      price: 44990, 
      discount: '-25%', 
      originalPrice: 59990, 
      icon: 'bi-playstation',
      image: '/juegos/gowragnarok.png' 
    },
    { 
      id: 6, 
      title: 'EA SPORTS FC 25', 
      store: 'Xbox Store', 
      price: 29990, 
      discount: '-50%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/fifa.jpg' 
    },
    { 
      id: 7, 
      title: 'The Witcher 3: Wild Hunt', 
      store: 'Steam', 
      price: 9990, 
      discount: '-75%', 
      originalPrice: 39990, 
      icon: 'bi-steam',
      image: '/juegos/witcher.png' 
    },
    { 
      id: 8, 
      title: 'Spider-Man Remastered', 
      store: 'PlayStation', 
      price: 34990, 
      discount: '-40%', 
      originalPrice: 57990, 
      icon: 'bi-playstation',
      image: '/juegos/spiderman.jpg' 
    },
    { 
      id: 9, 
      title: 'Starfield', 
      store: 'Xbox Store', 
      price: 32990, 
      discount: '-45%', 
      originalPrice: 59990, 
      icon: 'bi-xbox',
      image: '/juegos/starfield.png' 
    },
    { 
      id: 10, 
      title: 'Resident Evil 4 Remake', 
      store: 'Epic Games', 
      price: 24990, 
      discount: '-50%', 
      originalPrice: 49990, 
      icon: 'bi-controller',
      image: '/juegos/residentevil4.jpg' 
    },
    { 
      id: 11, 
      title: 'Cuphead', 
      store: 'Steam', 
      price: 10990, 
      discount: '-30%', 
      originalPrice: 15990, 
      icon: 'bi-steam',
      image: '/juegos/cuphead.png' 
    },
    { 
      id: 12, 
      title: 'Dying Light', 
      store: 'Steam', 
      price: 14990, 
      discount: '-70%', 
      originalPrice: 49990, 
      icon: 'bi-steam',
      image: '/juegos/dyinglight.jpg' 
    },
    { 
      id: 13, 
      title: 'Grand Theft Auto IV', 
      store: 'Steam', 
      price: 7990, 
      discount: '-65%', 
      originalPrice: 22990, 
      icon: 'bi-steam',
      image: '/juegos/gta 4.png' 
    },
    { 
      id: 14, 
      title: 'Hogwarts Legacy', 
      store: 'Epic Games', 
      price: 29990, 
      discount: '-40%', 
      originalPrice: 49990, 
      icon: 'bi-controller',
      image: '/juegos/harrypotter.jpg' 
    },
    { 
      id: 15, 
      title: 'Sons of the Forest', 
      store: 'Steam', 
      price: 14990, 
      discount: '-25%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/sonsoftheforest.jpg' 
    },
    { 
      id: 16, 
      title: 'Terraria', 
      store: 'Steam', 
      price: 5990, 
      discount: '-50%', 
      originalPrice: 11990, 
      icon: 'bi-steam',
      image: '/juegos/terraria.jpg' 
    },
    { 
      id: 17, 
      title: 'The Forest', 
      store: 'Steam', 
      price: 4990, 
      discount: '-75%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/theforest.png' 
    },
    { 
      id: 18, 
      title: 'Minecraft', 
      store: 'Xbox Store', 
      price: 14990, 
      discount: '-25%', 
      originalPrice: 19990, 
      icon: 'bi-xbox',
      image: '/juegos/minecraft.jpg' 
    },
    { 
      id: 19, 
      title: 'Outlast', 
      store: 'Steam', 
      price: 3990, 
      discount: '-80%', 
      originalPrice: 19990, 
      icon: 'bi-steam',
      image: '/juegos/outlast.jpg' 
    },
    { 
      id: 20, 
      title: 'Outlast 2', 
      store: 'Steam', 
      price: 5990, 
      discount: '-75%', 
      originalPrice: 23990, 
      icon: 'bi-steam',
      image: '/juegos/outlast2.jpg' 
    },
    { 
      id: 21, 
      title: 'The Outlast Trials', 
      store: 'Steam', 
      price: 18990, 
      discount: '-33%', 
      originalPrice: 28340, 
      icon: 'bi-steam',
      image: '/juegos/outlast3.jpg' 
    }
];

export const getStoredGames = () => {
  const data = localStorage.getItem('pixelzone_games');
  if (!data) {
    localStorage.setItem('pixelzone_games', JSON.stringify(initialGames));
    return initialGames;
  }
  try {
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem('pixelzone_games', JSON.stringify(initialGames));
      return initialGames;
    }
    return parsed;
 } catch {
  localStorage.setItem('pixelzone_games', JSON.stringify(initialGames));
  return initialGames;
}
};

export const saveGames = (games) => {
  localStorage.setItem('pixelzone_games', JSON.stringify(games));
};

export const addGameCRUD = (games, newGame) => {
  const updated = [...games, { ...newGame, id: Date.now() }];
  saveGames(updated);
  return updated;
};

export const deleteGameCRUD = (games, id) => {
  const updated = games.filter(g => g.id !== id);
  saveGames(updated);
  return updated;
};