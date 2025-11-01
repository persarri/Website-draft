import HeroGallery from '../components/HeroGallery';

type HomePageProps = {
  onNavigate: (page: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroGallery onNavigate={onNavigate} />
    </div>
  );
}
