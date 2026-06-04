import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calculator as CalcIcon,
  Plus,
  Trash2,
  Laptop,
  Monitor,
  Droplets,
  Leaf,
  Scale,
  Warehouse,
  Trash,
  TrendingUp,
} from "lucide-react";

type DeviceType = "laptop" | "desktop";
type Condition = "like_new" | "good" | "fair" | "bad";

interface Item {
  id: string;
  type: DeviceType;
  condition: Condition;
  marketValue: string; // raw input
}

const CONDITION_MULTIPLIER: Record<Condition, number> = {
  like_new: 1.35,
  good: 1.2,
  fair: 1.15,
  bad: 1.1,
};

const CONDITION_LABEL: Record<Condition, string> = {
  like_new: "Like New",
  good: "Good",
  fair: "Fair",
  bad: "Bad",
};

// Per-unit sustainability impact, by device type.
// Ranges use midpoints. CO2e scaled proportionally from project baseline (322kg / 8 units = ~40.25kg per laptop);
// desktops scaled by relative landfill weight (~11.5kg vs 2.04kg ≈ 5.6x).
const PER_UNIT: Record<DeviceType, {
  waterL: number;
  co2Kg: number;
  rawmaterials: number; // stored in kg for consistent display
  landfillKg: number;
}> = {
  laptop: {
    waterL: 190000,
    co2Kg: 215,
    rawmaterials: 1.2, // 1200 kg
    landfillKg: 2,
  },
  desktop: {
    waterL: 650000, 
    co2Kg: 635,
    rawmaterials: 1.4, // 1,400 kg
    landfillKg: 8.5, // 11.5 kg
  },
};

// Avoided customer costs per unit (PHP, conservative estimates)
const DISPOSAL_COST_PER_UNIT = 350; // certified e-waste disposal fee
const STORAGE_COST_PER_UNIT = 200; // opportunity cost of storing dead IT

const peso = (n: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const num = (n: number, digits = 0) =>
  new Intl.NumberFormat("en-PH", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);

let _id = 0;
const newItem = (): Item => ({
  id: `item-${++_id}-${Date.now()}`,
  type: "laptop",
  condition: "good",
  marketValue: "",
});

export function ImpactCalculator() {
  const [items, setItems] = useState<Item[]>([newItem()]);

  const update = (id: string, patch: Partial<Item>) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const remove = (id: string) =>
    setItems((prev) => (prev.length === 1 ? prev : prev.filter((it) => it.id !== id)));

  const add = () => setItems((prev) => [...prev, newItem()]);

  const rows = useMemo(
    () =>
      items.map((it) => {
        const market = Math.max(0, Number(it.marketValue) || 0);
        const acquisition = market * CONDITION_MULTIPLIER[it.condition];
        const profit = acquisition - market;
        return { ...it, market, acquisition, profit };
      }),
    [items],
  );

  const totals = useMemo(() => {
    const count = rows.length;
    const totalMarket = rows.reduce((s, r) => s + r.market, 0);
    const totalAcquisition = rows.reduce((s, r) => s + r.acquisition, 0);
    const totalProfit = rows.reduce((s, r) => s + r.profit, 0);
    const disposalSaved = count * DISPOSAL_COST_PER_UNIT;
    const storageSaved = count * STORAGE_COST_PER_UNIT;
    const totalBenefit = totalProfit + disposalSaved + storageSaved;
    return {
      count,
      totalMarket,
      totalAcquisition,
      totalProfit,
      disposalSaved,
      storageSaved,
      totalBenefit,
      water: rows.reduce((s, r) => s + PER_UNIT[r.type].waterL, 0),
      co2: rows.reduce((s, r) => s + PER_UNIT[r.type].co2Kg, 0),
      rawmaterials: rows.reduce((s, r) => s + PER_UNIT[r.type].rawmaterials, 0),
      landfill: rows.reduce((s, r) => s + PER_UNIT[r.type].landfillKg, 0),
    };
  }, [rows]);

  return (
    <section id="calculator" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3 inline-flex items-center gap-2">
            <CalcIcon className="h-4 w-4" /> Impact Calculator
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            See what your retired tech is{" "}
            <span style={{ color: "var(--primary)" }}>actually worth.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Add each device you'd retire. We'll estimate your payout, the costs you avoid,
            and the environmental impact you unlock.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Items column */}
          <div className="space-y-4">
            {rows.map((row, i) => (
              <div
                key={row.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs font-mono text-muted-foreground">
                    Device 0{i + 1}
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(row.id)}
                    disabled={items.length === 1}
                    className="text-xs text-muted-foreground hover:text-destructive disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-1.5"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>

                <div className="space-y-5">
                  {/* Device type */}
                  <div>
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Device type
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          { v: "laptop", label: "Laptop", Icon: Laptop },
                          { v: "desktop", label: "Personal Computer", Icon: Monitor },
                        ] as const
                      ).map(({ v, label, Icon }) => {
                        const active = row.type === v;
                        return (
                          <button
                            key={v}
                            type="button"
                            onClick={() => update(row.id, { type: v })}
                            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                              active
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background hover:bg-secondary"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Condition */}
                  <div>
                    <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Condition
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {(Object.keys(CONDITION_LABEL) as Condition[]).map((c) => {
                        const active = row.condition === c;
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => update(row.id, { condition: c })}
                            className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                              active
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background hover:bg-secondary"
                            }`}
                          >
                            <div>{CONDITION_LABEL[c]}</div>
                            <div className="text-[10px] font-normal opacity-70 mt-0.5">
                              {Math.round(CONDITION_MULTIPLIER[c] * 100)}%
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Market value */}
                  <div>
                    <Label
                      htmlFor={`${row.id}-mv`}
                      className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block"
                    >
                      Estimated market value (₱)
                    </Label>
                    <Input
                      id={`${row.id}-mv`}
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={10_000_000}
                      step={100}
                      placeholder="e.g. 15000"
                      value={row.marketValue}
                      onChange={(e) =>
                        update(row.id, { marketValue: e.target.value.slice(0, 9) })
                      }
                      className="h-11"
                    />
                  </div>

                  {/* Per-item result */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl bg-secondary/60 p-4">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Looped pays you
                      </div>
                      <div className="text-xl font-semibold tracking-tight mt-1">
                        {peso(row.acquisition)}
                      </div>
                    </div>
                    <div className="rounded-xl bg-primary/10 p-4">
                      <div className="text-[10px] uppercase tracking-wider text-primary/80">
                        Your profit
                      </div>
                      <div
                        className="text-xl font-semibold tracking-tight mt-1"
                        style={{ color: "var(--primary)" }}
                      >
                        {peso(row.profit)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={add}
              className="w-full rounded-xl h-12 border-dashed"
            >
              <Plus className="h-4 w-4 mr-1" /> Add another device
            </Button>
          </div>

          {/* Summary column */}
          <div className="lg:sticky lg:top-24 self-start space-y-4">
            <div
              className="rounded-2xl p-7 text-primary-foreground shadow-[var(--shadow-elegant)]"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="text-xs uppercase tracking-[0.2em] opacity-80">
                Total estimated benefit
              </div>
              <div className="text-5xl font-semibold tracking-tight mt-2">
                {peso(totals.totalBenefit)}
              </div>
              <div className="text-sm opacity-90 mt-1">
                across {totals.count} {totals.count === 1 ? "device" : "devices"}
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <SummaryRow
                  Icon={TrendingUp}
                  label="Profit from sale to Looped"
                  value={peso(totals.totalProfit)}
                />
                <SummaryRow
                  Icon={Trash}
                  label="Avoided e-waste disposal cost"
                  value={peso(totals.disposalSaved)}
                />
                <SummaryRow
                  Icon={Warehouse}
                  label="Avoided storage / lost space cost"
                  value={peso(totals.storageSaved)}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 inline-flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5" /> Sustainability unlocked
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ImpactStat
                  Icon={Droplets}
                  value={`${num(totals.water)} L`}
                  label="Freshwater saved"
                />
                <ImpactStat
                  Icon={Leaf}
                  value={`${num(totals.co2, 1)} kg`}
                  label="CO₂e avoided"
                />
                <ImpactStat
                  Icon={Scale}
                  value={`${num(totals.rawmaterials * 1000, 2)} kg`}
                  label="Raw materials avoided"
                />
                <ImpactStat
                  Icon={Trash}
                  value={`${num(totals.landfill, 2)} kg`}
                  label="Landfill diverted"
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-5 leading-relaxed">
                Estimates only. Final acquisition price depends on inspection. Sustainability
                figures are derived from Looped's recovery metrics on a per-unit basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-3 first:border-0 first:pt-0">
      <div className="flex items-center gap-2 opacity-90">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function ImpactStat({
  Icon,
  value,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary mb-2">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-lg font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
