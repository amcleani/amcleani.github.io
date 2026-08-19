---
aliases: []
created: 2026-08-19
tags:
  - higher_order_logic
  - higher_order_metaphysics
projects:
status:
sources:
public: true
---
# Idea

*Applicative indiscernibility* is the relation, denoted $\equiv$, that two entities bear when they share all their higher-order properties, in the sense that every instance of the schema *Applicative Leibniz Law*:
$$
M\equiv N\to FM\to FN. \tag{ALL}
$$

*Substitutional indiscernibility* is the relation two entities bear when they are intersubstitutable in all contexts:
$$
M\equiv!N\to P[M/x]\to P[N/x]. \tag{SLL}
$$

When working in a standard higher-order logic with unrestricted $\lambda$-abstraction and where $\beta\eta$-equivalence implies at least coextensiveness, two entities are applicatively indiscernible iff they are substitutional indiscernible.

For if $M\equiv N$ and $P[M/x]$, then $(\lambda x. P)M$ and so by (ALL) also $(\lambda x. P)N$, which in turn implies $P[N/x]$. The converse is obvious. 

However, applicative and substitutional indiscernibility can come apart in [[general higher-order language|general higher-order languages]] where $\lambda$-abstraction is restricted. In such cases, $\lambda x. P$ might not be well formed, blocking the argument above. 

To those who embrace restricted $\lambda$-abstraction, applicative and substitutional equivalence are distinct notions that are conflated by standard higher-order frameworks. The former is weaker than the latter. 

It can make sense to theorize in terms of a primitive notion of applicative indiscernibility if one can give an analysis of substitutional indiscernibility in terms of applicative indiscernibility plus something else. Especially so if substitutional indiscernibility coincides with [[identity]].

# Comparison with Identity in Free Logic

A similar situation arises when we compare free logics to classical logics, while keeping  unrestricted $\lambda$-abstraction fixed. In classical higher-order logics, applicative indiscernibility is equivalent to *[[Leibniz equivalence]]*, the relation:^[In higher-order metaphysics this relation is often taken to coincide with [[identity]].]
$$
\lambda xy. \forall Z (Zx\leftrightarrow Zy).
$$

But in free logics universally quantified claims do not imply all their instances, so Leibniz equivalence is actually weaker than applicative indiscernibility. 

Again, for the free logician, applicative indiscernibility and Leibniz equivalence and applicative equivalence are distinct relation that classical logic conflates. 

# Identity

Whether [[identity]] should be reduced to applicative indiscernibility or substitutional indiscernibility (if either) depends on what the restrictions on $\lambda$-abstraction in the ambient logic are supposed to model. 

One might be using restrictions on $\lambda$ to model [[genuine syncategorematicity]], in which case substitutional indiscernibility seems like the better candidate. 

On the other hand, to deal with [[Frege's puzzle]] you might have a view where co-referential terms are not intersubstitutable in [[opacity|opaque contexts]], and you might restrict $\lambda$-abstraction within opaque contexts to avoid generating higher-order properties corresponding to opaque contexts. In such a framework, applicative indiscernibility looks like the better candidate. 