import { useMemo, useState } from 'react';
import { tubas } from './data';
import type { Tuba } from './types';
import './styles.css';

function currency(v: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(v);
}

function stars(rating: number) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

export default function App() {
  const [keyFilter, setKeyFilter] = useState<'ALL' | Tuba['key']>('ALL');
  const [levelFilter, setLevelFilter] = useState<'ALL' | Tuba['level']>('ALL');
  const [sort, setSort] = useState<'price-asc' | 'price-desc'>('price-asc');
  const [selected, setSelected] = useState<Tuba | null>(null);

  const list = useMemo(() => {
    const filtered = tubas.filter(
      (t) => (keyFilter === 'ALL' || t.key === keyFilter) && (levelFilter === 'ALL' || t.level === levelFilter)
    );
    return filtered.sort((a, b) => (sort === 'price-asc' ? a.priceGbp - b.priceGbp : b.priceGbp - a.priceGbp));
  }, [keyFilter, levelFilter, sort]);

  return (
    <main className="wrap">
      <header className="hero">
        <div>
          <h1>Tuba Comparator</h1>
          <p>Compare key, tonal profile, build quality, price, and where to buy.</p>
        </div>
      </header>

      <section className="filters">
        <label>
          Key
          <select value={keyFilter} onChange={(e) => setKeyFilter(e.target.value as 'ALL' | Tuba['key'])}>
            <option value="ALL">All</option>
            <option>BBb</option>
            <option>CC</option>
            <option>Eb</option>
            <option>F</option>
          </select>
        </label>
        <label>
          Level
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value as 'ALL' | Tuba['level'])}>
            <option value="ALL">All</option>
            <option>Student</option>
            <option>Intermediate</option>
            <option>Professional</option>
          </select>
        </label>
        <label>
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value as 'price-asc' | 'price-desc')}>
            <option value="price-asc">Price: low → high</option>
            <option value="price-desc">Price: high → low</option>
          </select>
        </label>
      </section>

      <section className="grid">
        {list.map((t) => (
          <article key={t.id} className="card" onClick={() => setSelected(t)}>
            <img src={t.imageUrl} alt={`${t.brand} ${t.model}`} className="card-image" loading="lazy" />
            <div className="card-body">
              <h3>
                {t.brand} {t.model}
              </h3>
              <p className="meta">
                {t.key} · {t.valves} valves · {t.level}
              </p>
              <p className="tone">Tone: {t.tone}</p>
              <p className="summary">{t.shortSummary}</p>
              <p className="price">{currency(t.priceGbp)}</p>
            </div>
          </article>
        ))}
      </section>

      {selected ? (
        <section className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>
              ×
            </button>
            <img src={selected.imageUrl} alt={`${selected.brand} ${selected.model}`} className="detail-image" />
            <h2>
              {selected.brand} {selected.model}
            </h2>
            <p className="rating">
              {stars(selected.review.rating)} <span>{selected.review.rating.toFixed(1)} / 5</span>
            </p>

            <ul className="specs">
              <li>
                <b>Key:</b> {selected.key}
              </li>
              <li>
                <b>Valves:</b> {selected.valves}
              </li>
              <li>
                <b>Bore:</b> {selected.bore}
              </li>
              <li>
                <b>Weight:</b> {selected.weightKg}kg
              </li>
              <li>
                <b>Finish:</b> {selected.finish}
              </li>
              <li>
                <b>Tone:</b> {selected.tone}
              </li>
              <li>
                <b>Level:</b> {selected.level}
              </li>
              <li>
                <b>Price:</b> {currency(selected.priceGbp)}
              </li>
            </ul>

            <h3>Description</h3>
            <p>{selected.detailedDescription}</p>

            <h3>Review verdict</h3>
            <p className="verdict">{selected.review.verdict}</p>

            <div className="review-grid">
              <div>
                <h4>Pros</h4>
                <ul>
                  {selected.review.pros.map((pro) => (
                    <li key={pro}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Cons</h4>
                <ul>
                  {selected.review.cons.map((con) => (
                    <li key={con}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3>Where to buy</h3>
            <ul>
              {selected.whereToBuy.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="attribution">Image: {selected.imageAttribution}</p>
          </article>
        </section>
      ) : null}
    </main>
  );
}
