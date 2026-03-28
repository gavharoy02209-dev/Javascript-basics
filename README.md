# JavaScript - For Loop, Continue

## Topics Covered
- `for` loop - repeating code
- `continue` - skipping iterations
- Math operations inside loops (sum, product, squares)

---

## for loop

Used to repeat code a specific number of times.

```javascript
// Syntax
for(start; condition; step) {
    // code
}

// Example: print 1 to 5
for(let i = 1; i <= 5; i++) {
    document.write(i + ' ');
}
```

---

## continue

Skips the current iteration and moves to the next one.

```javascript
// Print odd numbers only
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) continue; // skip even numbers
    document.write(i + ' ');
}
// Output: 1 3 5 7 9
```

---

## Key Rules

| | Sum | Product |
|---|---|---|
| Start value | `sum = 0` | `sum = 1` |
| Operation | `sum += i` | `sum *= i` |

> ⚠️ Product must start from 1! If it starts from 0 → result is always 0!

---

## Tasks Completed

| # | Task | Topic |
|---|---|---|
| 1 | Print k number n times | for loop |
| 2 | Print numbers between a and b (a and b excluded) | for loop |
| 3 | Print numbers between a and b in descending order | for loop (i--) |
| 4 | Print candy prices from 1kg to 10kg | for loop |
| 5 | Print candy prices from 0.1kg to 1kg | for loop (i/10) |
| 6 | Print candy prices: 1.2kg, 1.4kg ... 2kg | for loop (i+=2) |
| 7 | Sum of all numbers from a to b | for + sum |
| 8 | Product of all numbers from a to b | for + product |
| 9 | Sum of squares from a to b | for + i**2 |
| 10 | Calculate S = 1/1 + 1/2 + ... + 1/n | for + 1/i |
| 11 | Print odd numbers from 1 to n | for + continue |
| 12 | Print even numbers from 1 to n | for + continue |

---

## Useful Tips

```javascript
// String to number
n *= 1;
// or
n = Number(n);

// Square
i ** 2  // or i * i

// Odd check
i % 2 !== 0  // true if odd

// Even check
i % 2 === 0  // true if even

// Avoid floating point issues
i.toFixed(1) // 0.1, 0.2 ... not 0.10000000001
```

---

## Author Gavharoy
*JavaScript learning journey - Day 3*
