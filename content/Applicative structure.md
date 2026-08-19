---
aliases: []
created: 2023-06-23
tags:
  - higher_order_logic
public: true
---

# Definition
Let $L$ be a typed language. An *applicative structure* for $L$ is a pair 
$$(A, \mathit{App})$$
where $A$ is a family of sets $A^\sigma$ for each type $\sigma$, and $\mathit{App}$ is a family of functions $$\mathit{App}^{\sigma, \sigma \to \tau}:A^\sigma\times A^{\sigma\to \tau}\to A^\tau$$
for each pair of types $\sigma, \sigma \to \tau$ 
