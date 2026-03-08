import { useMemo, useState } from 'react';
import { tubas } from './data';
import type { Tuba } from './types';
import './styles.css';

function currency(v: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(v);
}

export default function App() {
  const [keyFilter, setKeyFilter] = useState<'ALL' | Tuba['key']>('ALL');
  const [levelFilter, setLevelFilter] = useState<'ALL' | Tuba['level']>('ALL');
  const [sort, setSort] = useState<'price-asc' | 'price-desc'>('price-asc');
  const [selected, setSelected] = useState<Tuba | null>(null);

  const list = useMemo(() => {
    const filtered = tubas.filter((t) => (keyFilter === 'ALL' || t.key === keyFilter) && (levelFilter === 'ALL' || t.level === levelFilter));
    return filtered.sort((a, b) => sort === 'price-asc' ? a.priceGbp - b.priceGbp : b.priceGbp - a.priceGbp);
  }, [keyFilter, levelFilter, sort]);

  return (
    <main className="wrap">
      <header>
        <h1>Tuba Comparator</h1>
        <p>Compare tubas by sound profile, build, price, and where to buy.</p>
      </header>

      <section className="filters">
        <label>Key
          <select value={keyFilter} onChange={(e) => setKeyFilter(e.target.value as any)}>
            <option value="ALL">All</option><option>BBb</option><option>CC</option><option>Eb</option><option>F</option>
          </select>
        </label>
        <label>Level
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value as any)}>
            <option value="ALL">All</option><option>Student</option><option>Intermediate</option><option>Professional</option>
          </select>
        </label>
        <label>Sort
          <select value={sort} onChange={(e) => setSort(e.target.value as any)}>
            <option value="price-asc">Price: low → high</option>
            <option value="price-desc">Price: high → low</option>
          </select>
        </label>
      </section>

      <section className="grid">
        {list.map((t) => (
          <article key={t.id} className="card" onClick={() => setSelected(t)}>
            <h3>{t.brand} {t.model}</h3>
            <p>{t.key} · {t.valves} valves · {t.level}</p>
            <p className="tone">Tone: {t.tone}</p>
            <p className="price">{currency(t.priceGbp)}</p>
          </article>
        ))}
      </section>

      <aside className="details">
        {selected ? (
          <>
            <h2>{selected.brand} {selected.model}</h2>
            <ul>
              <li><b>Key:</b> {selected.key}</li>
              <li><b>Valves:</b> {selected.valves}</li>
              <li><b>Bore:</b> {selected.bore}</li>
              <li><b>Weight:</b> {selected.weightKg}kg</li>
              <li><b>Finish:</b> {selected.finish}</li>
              <li><b>Tone:</b> {selected.tone}</li>
              <li><b>Level:</b> {selected.level}</li>
              <li><b>Price:</b> {currency(selected.priceGbp)}</li>
            </ul>
            <p>{selected.notes}</p>
            <h3>Where to buy</h3>
            <ul>
              {selected.whereToBuy.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>)}
            </ul>
          </>
        ) : <p>Click a tuba card to see full details and shop links.</p>}
      </aside>
    </main>
  );
}
