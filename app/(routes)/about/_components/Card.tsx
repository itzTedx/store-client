import { CardType } from './ScrollCarousel'

export const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute bottom-0 inset-x-0 z-10 grid place-content-center ">
        <div className="bg-foreground/10 p-8 text-background backdrop-blur-md">
          <h5 className="text-4xl sm:text-6xl font-glirock mb-2">
            {card.title}
          </h5>
          <p className="text-sm leading-tight">{card.description}</p>
        </div>
      </div>
    </div>
  )
}
