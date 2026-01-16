---
aliases: []
created: 2026-01-16
tags:
  - concept
  - philosophical_logic
  - higher_order_logic
projects:
status:
sources:
public: true
---

# Idea

Intuitively, a *stable entity* is one that does not involve quantification. 

For example, the property of *loving someone* is not stable. It is defined in terms of the quantifier *someone*. 

I think canonical examples of stable properties are Boolean operations (negation, conjunction, ...) and combinators (entities expressed by closed terms without occurrences of constants, like $\lambda x. x$).


# Relationship with fundamentality

I am intrigued by the idea that all fundamental relations are stable. 

[[@Kaplan1995APiPWS]] sketches a view of this sort. On his view, the world can be completely described by specifying (i) which fundamental properties are instantiated where, and (ii) which things exist. The pattern of instantiation of fundamental properties is independent of which things exist, suggesting fundamental properties are stable. 

Grounding theorists also seem to be committed to something like this idea, at least when it comes to fundamental propositions. Grounding theorists think that quantified propositions are grounded in their instances. Since no fundamental proposition is grounded by anything, fundamental propositions cannot be quantified. 

# Relationship with domain specifiers

Non-stable entities can be "moved" [[Quantificationalism#Regimentation|domain specifier]]s. Loving someone is not the same as loving someone among those who love someone: if you love someone who doesn't love anyone, then you love someone, but you don't love someone among those who love someone. 
$$\at(\text{loves someone})(\text{loves someone})\neq \text{loves someone}).$$
On the other hand, stable entities should be "fixed" by all domain specifiers. 