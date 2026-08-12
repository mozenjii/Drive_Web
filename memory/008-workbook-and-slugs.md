# The outreach workbook and the preview slug

`build/build_workbook.py` in
`D:\Code\AI Agents\Alex Hormozi\campaigns\ca-driving-school-websites\`
generates `campaign2_ca_driving_schools_OUTREACH.xlsx`, 211 rows.

The **`Preview slug`** column is derived from the business name and becomes **the link pasted
into a cold email**. That is what makes it dangerous.

## Two failure modes, both found on 2026-08-09

### 1. Drift

The generated slug did not match the file actually built. `Bill's Driving School` generated
`bill-s-driving-school`; the preview is at `bills-driving-school`. A 404 in a cold email.

Fixed with a `SLUG_OVERRIDES` map, **pinned by business name**:

```python
SLUG_OVERRIDES = {
    "Dollar Driving School of Ventura, Oxnard, Camarillo, Santa Paula, Ojai, Fillmore": "dollar-driving-school",
    "Bill's Driving School": "bills-driving-school",
    "Easy Street Driving School- Ventura": "easy-street-driving-school",
}
```

### 2. Collision — the worse one

**Six pairs of different businesses derived the same slug**: two Dollar Driving Schools, two
Budget, two America, two A Plus, two "Driving school", two Academia de Trafico.

Both halves of each pair would have been emailed **the same link**, and for one of them that link
opens a preview of a competitor. That is not a 404. There is no recovering that conversation.

The generator now disambiguates by city, and raises `SystemExit` if any duplicate survives.

**The first attempt at this was wrong** and worth remembering: it exempted rows by matching the
*slug value* against `SLUG_OVERRIDES`, which wrongly exempted the Woodland Hills Dollar row and
left the collision in place. Pin by **business name**, which is the actual key.

```python
collide = dupes & ~q["business_name"].isin(SLUG_OVERRIDES)
...
still = q["_slug"].duplicated(keep=False)
if still.any():
    raise SystemExit("Slug collision survived disambiguation: ...")
```

## The check to run after regenerating

Two lines of Python, catches the whole class:

1. slugs are unique across all 211 rows
2. every file in `preview/src/data/clients/` appears in the slug column

Current state: **211 unique slugs, 20/20 built previews matched to their emailed URL.**
