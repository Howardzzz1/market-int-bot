# MarketLens AI

MarketLens AI is an evidence-first market intelligence workspace for self-directed investors. This repository contains a dependency-free, static demo that shows the product workflow with synthetic data:

> What changed, why does it matter to me, and what evidence should I monitor next?

## Run locally

No build step or API keys are required for the demo. Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## What the demo shows

- Personalized daily market brief
- Market regime and watchlist snapshot
- Portfolio relevance and exposure context
- Evidence items with confidence levels
- Counterarguments and thesis invalidation conditions
- Research scenarios kept separate from buy/sell instructions
- Responsive layout for desktop and smaller screens

All prices, holdings, events, and evidence in this demo are synthetic. The demo does not connect to a brokerage, place trades, or provide financial advice.

## How Codex and GPT-5.6 were used

Codex was used across the product workflow: repository setup, interface architecture, component and interaction design, responsive styling, accessibility review, documentation, and validation of the demo flow.

In the intended production architecture, GPT-5.6 is the analysis layer that converts structured market, portfolio, news, earnings, and macro inputs into facts, interpretations, evidence, confidence, risks, counterarguments, and thesis invalidation conditions. This static repository demonstrates the resulting product contract with deterministic demo data; it does not make live model calls.

## Product boundaries

MarketLens AI is decision support, not automated trading. A research score is not a buy signal. A setup is presented as a scenario with assumptions and invalidation conditions, not as an instruction.

## Repository map

```text
index.html   App shell and accessible content structure
styles.css   Visual system, responsive layout, and component styling
app.js       Demo data, navigation, filters, and interactions
```

## Next production steps

1. Replace demo data with typed API services and freshness metadata.
2. Add authentication and server-side secret handling.
3. Connect read-only portfolio context through a broker integration.
4. Add schema-validated GPT-5.6 Responses API calls and evidence citations.
5. Persist snapshots, reports, verification results, and post-market reviews.
