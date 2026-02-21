export function DateSection() {
  return (
    <section className="py-24 text-center">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <p className="text-5xl">18</p>
          <p>piątek</p>
        </div>
        <div className="border-y border-black py-4">
          <p className="text-6xl font-bold">19</p>
          <p>sobota</p>
        </div>
        <div>
          <p className="text-5xl">20</p>
          <p>niedziela</p>
        </div>
      </div>
    </section>
  );
}
