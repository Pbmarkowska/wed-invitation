import SectionContainer from '../SectionContainer';

export function WhatWontBeSection() {
  const items = [
    'oczepin',
    'rzucania bukietem',
    'księgi gości',
    'typowych weselnych gier i zabaw',
    'pierwszego tańca',
    'oddzielnego stolika dla nas, chcemy siedzieć z Wami',
  ];

  return (
    <SectionContainer
      className="bg-transparent py-16"
      title="Czego nie będzie?"
    >
      <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-lg mx-auto px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-center text-gray-700 text-lg md:text-xl font-light tracking-wide border-b border-weddingRedDark/20 pb-4 w-full last:border-0 hover:text-weddingRedDark transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
