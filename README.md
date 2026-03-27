# JavaScript - Switch/Case, For Loop, Continue

## Topics Covered
- `switch/case` - conditional branching
- `for` loop - repeating code
- `continue` - skipping iterations
- `document.write` - writing to the page

---

## switch/case

Used to compare a variable against multiple values.

```javascript
let day = prompt('Enter a day');

switch(day) {
    case 'Monday':
        document.write('1st day');
        break;
    case 'Friday':
        document.write('5th day');
        break;
    default:
        document.write('Invalid day');
}
```

> ⚠️ Always use `break` to prevent fall-through.
> ⚠️ Use `n *= 1` to convert prompt input from string to number.

---

## for loop

Used to repeat code a specific number of times.

```javascript
for (let i = 1; i <= 10; i++) {
    document.write(i + ' ');
}
```

---

## continue

Skips the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue; // skip multiples of 3
    document.write(i + ' ');
}
// Output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20
```

---

## Tasks Completed

| # | Task | Topic |
|---|------|-------|
| 1 | Enter a number (1-3) → print First, Second, Third | switch/case |
| 2 | Grade (1-5) → print Fail, Satisfactory, Good, Excellent | for + switch |
| 3 | Month number → print season (Winter, Spring, Summer, Autumn) | switch/case |
| 4 | Month number → print number of days in that month | switch/case |
| 5 | Two numbers + operation → calculate result (calculator) | switch/case |
| 6 | Grade → print scholarship amount | switch/case |
| 7 | Numbers 1-20, skip multiples of 3 | for + continue |
| 8 | Days array → print Workday or Weekend | for + switch |

---

## Key Concepts

| Concept | Description |
|---------|-------------|
| `break` | Exits the switch/case block |
| `default` | Runs when no case matches |
| `continue` | Skips current loop iteration |
| `n *= 1` | Converts string to number |
| `fall-through` | Multiple cases sharing one result |

---

## Author Gavharoy
*JavaScript learning journey - Day 2*
