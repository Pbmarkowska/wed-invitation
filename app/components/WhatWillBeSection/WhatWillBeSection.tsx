import SectionContainer from '../SectionContainer';

export function WhatWillBeSection() {
  const items = [
    'Po ceremonii w kościele zapraszamy do Restauracji “Rusałka” na obiad, kolację i słodkie.',
    'Nie będziemy tańczyć, ale wam nie zabraniamy.',
    'Okolica jest piękna, więc pewnie zaprosimy was na spacer dookoła jeziora.',
    'W ramach rozrywki oferujemy tylko jedzenie i swoje towarzystwo.',
    'Będzie tort!',
    'Niektórzy goście nie piją alkoholu i prosimy o uszanowanie tego.',
    'Świętujemy do 22:00',
  ];

  return (
    <SectionContainer className="bg-transparent py-16" title="Co będzie?">
      <div className="flex flex-col gap-6 mt-12 w-full max-w-lg mx-auto px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative border border-weddingRedDark rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-6 bg-weddingCream shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            {/* Number Badge */}
            <div className="absolute -top-4 -left-2 bg-weddingRedDark text-weddingCream w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">
              {index + 1}
            </div>

            <p className="text-center text-gray-700 leading-relaxed text-sm md:text-base pt-2">
              {item}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
