---
title: "Note 1"
isDraft: false
publishDate: "2024-03-10T23:00:00-06:00"
updatedDate: "2024-03-10T23:00:00-06:00"
---

# This is a h1
Test content
## This is a h2
Test content
### This is a h3
Test content

> quote let's see

> Quotes
>
> > With nested quotes

Here is some *content* to showcase **emphasis**.

Ordered lists:
1. This
2. is
3. a
4. test

Unordered lists:
- This
- is
- a
- test

# Code examples
```rust
fn main() -> Result<()> {
    let args = Args::parse();
    let mut entrypoint = File::open(args.file)?;
    let mut contents = String::new();
    entrypoint.read_to_string(&mut contents)?; // returns the size

    let lx = Lexer::new(&contents)?;
    dbg!(lx);

    Ok(())
}
```

```python
class Node:
    def __init__(self, value: int) -> None:
        self.value = value
        self.left: Self | None = None # I miss Rust's Option<T> type :(
        self.right: Self | None = None

    @property
    def height(self) -> int: return max(self._height(self.left), self._height(self.right))
    def _height(self, node: Self | None) -> int:
        if node is None: return 0
        return 1 + max(self._height(node.left), self._height(node.right))
    
    @property
    def balance_factor(self) -> int: return self._height(self.left) - self._height(self.right)
    @property
    def balance_factor_type(self) -> Balance: 
        if self.balance_factor > 1: return Balance.LEFT_HEAVY
        if self.balance_factor < -1: return Balance.RIGHT_HEAVY
        return Balance.BALANCED

    def __repr__(self) -> str: return f"Node({self.value})"
```