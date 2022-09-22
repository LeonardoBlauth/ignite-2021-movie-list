import { Button } from './Button';

interface Genre {
  id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
}

interface SideBarProps { 
  genres: Genre[],
  onClickButton: (genreId: number) => void;
  selectedGenreId: number;
}

export function SideBar({genres, onClickButton, selectedGenreId}: SideBarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}