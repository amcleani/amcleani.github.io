---
aliases: []
created: 2026-01-16
tags:
  - concept
  - philosophical_logic
  - metaphysics
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
$$\at(\text{loves someone})(\text{loves someone})\neq \text{loves someone}.$$
On the other hand, stable entities should be "fixed" by all domain specifiers. 

# Model-theoretic representation

There is a model-theoretic representation of the notion of stability definable in [[quantificational substitution structure]]s. It is essentially the restriction of the
concept of *purity* from [[@Bacon2019SS]] to QSSs.

>[!Definition]
>Let $\struc{A}$ be a QSS. An entity $\obj{a}\in A^\sigma$ is called
>- *$\bar\sigma$-stable* in $\struc{A}$ when $\sub{f}\obj{a}=\obj{a}$ for
>  every $\bar\sigma$-domain $\propseq{f}$;
>- *Stable* in $\struc{A}$ when it is $\bar\sigma$-stable for all nice
>  type sequences $\bar\sigma$.

## Stable domains

A *stable domain* is any domain $\propseq{f}$ such that $\obj{f}_\sigma$
is stable whenever it is defined. A *stabilizing substitution* is any
substitution $\sub{f}$ such that $\propseq{f}$ is a stable domain.
Likewise, the notions of a *$\bar\sigma$-stable domain* and of a
*$\bar\sigma$-stabilizing substitution* are defined.

It turns out that given minimal assumptions about the existence of
stable domains, stable (resp. $\bar\sigma$-stable) entities can be
equivalently characterized as those entities that lie in the range of
some stabilizing (resp. $\bar\sigma$-stabilizing) substitution.
>[!Proposition]
> $\struc{A}$ be a QSS
>containing at least one stable (resp. $\bar\sigma$-stable)
>$\bar\tau$-domain for each nice type sequence $\bar\tau$, and let
>$\obj{a}\in A^\sigma$. Then $\obj{a}$ is stable
>(resp. $\bar\sigma$-stable) in $\struc{A}$ iff for all nice type
>sequences $\bar\tau$ there a stable (resp. $\bar\sigma$-stable)
>$\bar\tau$-domain $\propseq f$ such that $\sub{f}\obj{a}=\obj{a}$.


>[!Proof]
>The left-to-right direction is obvious given the existence
>assumptions about stable domains. Conversely, take any stabilizing
>substitution $\sub{g}$. When $\propseq{g}$ is a $\bar\tau$-domain, we
>know there is a stable $\bar\tau$-domain $\propseq{f}$ such that
>$\sub{f}\obj{a}=\obj{a}$. But this implies $$\begin{align*}
>    \sub{g}\obj{a}&=\sub{g}(\sub{f}\obj{a})
>    =\subfree{\propseq g\circ\propseq f}(\obj a)
>    =\sub{f}(\obj a)
>    =\obj a.
>\end{align*}$$ So, $\obj{a}$ is stable in $\struc{A}$. The same argument
>works for $\bar\sigma$-stability. 

## Stabilization

We can formulate comprehension conditions for the class of stable entities in a [[models for quantificationalism|model]].

A second class of stability-theoretic conditions consists of
*comprehension* conditions for the class of stable entities. Some applications of
[[Quantificationalism]]---most
importantly[[metaphysical predicativity]]---rely on the
existence of *enough* stable properties. Comprehension principles for
stability are a natural way of ensuring just that.

Let $\struc{A}$ be a model and $\obj{a}\in \obj{A}^\sigma$. A
*stabilizer* for $\obj{a}$ is a stable entity $\obj{s}$  such that
$\obj{a}\equiv\obj{s}$. The notion of a *$\bar\sigma$-stabilizer* is
defined the same way, but substituting '$\bar\sigma$-stable' for
'stable.' We can lift the notion of a stabilizer to domains. A
*stabilizer* for a $\bar\sigma$-domain $\propseq{f}$ is a
$\bar\sigma$-domain $\propseq{g}$ such that $\obj{g}_\sigma$ stabilizes
$\obj{f}_\sigma$ whenever $\obj{f}_\sigma$ is defined. Likewise for the
notion of a $\bar\sigma$-stabilizer.

>[!Definition]
>A model $\struc{A}$ is called *stabilized* (resp.
>*$\bar\sigma$-stabilized*) when every entity has a stabilizer (resp. a
>$\bar\sigma$-stabilizer)

Clearly, only [[models based on QSSs#Regularity|irregular]] models can be stabilized. 

