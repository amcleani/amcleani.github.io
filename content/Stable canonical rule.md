---
aliases:
  - stable canonical rules
tags: []
---

# Idea

A *stable canonical rule* is a rule that syntactically encodes the structure of a finite algebra in a particular way. They are useful because they have well behaved refutation conditions: a stable canonical rule representing the structure of an algebra $\mathfrak{M}$ is refuted by precisely those algebras $\mathfrak{N}$ such that there is a *stable embedding* from $\mathfrak{M}$ to $\mathfrak{N}$ satisfying a certain condition.  

Stable canonical rules were introduced in [[@BezhanishviliBezhanishvili2017LFRoHAaCF]] and [[@BezhanishviliEtAl2016SCR]]. They are related to the *canonical formulas* and *rules* of [[@Zakharyaschev1992CFfKPIBR]] and [[@Jerabek2009CR]].

# Definition

To illustrate, let's take the case of stable canonical rules for modal algebras.[^1] Given a modal algebra $\mathfrak{M}=(M, \square)$, a *domain* on $\mathfrak{M}$ is just a finite subset $D\subseteq M$.  Work in a language equipped with a propositional variable $p_a$ for each $a\in M$. The *stable canonical rule* $\mu(\mathfrak{M}, D)$ is defined as the rule $\Gamma/\Delta$, where 

- $\Gamma=\{p_{a\land b}\leftrightarrow p_a\land p_b:a\in M\}\cup \{p_{\neg a}\leftrightarrow \neg p_a:a\in M\}$
  $\cup \{p_{\square a}\to \square p_a:a\in M\}\cup \{\square p_a\to p_{\square a}:a\in D\}$
- $\Delta=\{p_a:a\in M\smallsetminus \{1\}\}$

Thus the rule *fully* represents the Boolean structure of $\mathfrak{A}$, but only *partially* represents the modal structure of $\mathfrak{A}$. The behavior of $\square$ is only fully represented for elements belonging to the domain $D$. 


# Refutation conditions and duality

Given modal algebras $\mathfrak{M, N}$, a *stable embedding* is an embedding $h:\mathfrak{M}\to \mathfrak{N}$ which partially preserves $\square$, in the sense that 
$$h(\square a)\leq \square h(a)$$
holds for all $a\in M$. Given a domain $D\subseteq N$, we say that $h$ satisfies the *bounded domain condition* (BDC) for $D$ when $h$ fully preserves $\square$ on $D$: the identity
$$h(\square a)= \square h(a)$$
holds for all $a\in D$. 

>[!Thesis] Proposition
>A modal algebra $\mathfrak{M}$ refutes a stable canonical rule $\mu(\mathfrak{N}, D)$ iff there is a stable embedding $h:\mathfrak{N}\to \mathfrak{M}$ that satisfies the BDC for $D$.

This result illustrates the connection between stable canonical rules and [[Filtration|filtrations]]: a filtration $(\mathfrak{N}, V')$ of a model $(\mathfrak{M}, V)$ through a set of formulas $\Theta$ always stably embeds into the original model through a map  that satisfies the BDC for $\{V'(\varphi):\square\varphi\in \Theta\}$.

Via duality, we can characterize the refutation conditions of stable canonical rules on modal spaces (descriptive Kripke frames) as well. When $\mathfrak{X, Y}$ are modal spaces, a map $f:\mathfrak{X}\to \mathfrak{Y}$ is called *stable* when it is continuous and relation preserving. A *domain* on $\mathfrak{Y}$ is any finite set of clopens in $\mathfrak{Y}$. Given a domain $\mathfrak{D}$ on $\mathfrak{Y}$, we say that $f$ satisfies the *bounded domain condition* (BDC) for $\mathfrak{D}$ when the following holds: for each $\mathfrak{d}\in \mathfrak{D}$ and any $x\in X$, if there is some $y\in \mathfrak{d}$ such that $Rf(x)y$, then there must be some $z\in X$ such that $Rxz$ and $f(z)\in \mathfrak{d}$.

Note that when $\mathfrak{Y}$ is finite and we take $\mathfrak{D}$ to contain precisely the singletons of points in $\mathfrak{Y}$, a stable map $f:\mathfrak{X}\to \mathfrak{Y}$ satisfying the BDC for $\mathfrak{D}$ is nothing but a bounded morphism from $\mathfrak{X}$ to $\mathfrak{Y}$. 

When $\mathfrak{M}$ is a modal algebra, let $\mathfrak{M}_*$ be its dual modal space. Let $\beta$ be the Stone map, which sends an element of $M$ to the set of prime filters containing it. 

>[!Thesis] Proposition
>A modal space $\mathfrak{X}$ refutes a stable canonical rule $\mu(\mathfrak{M}, D)$ iff there is a stable surjection $f:\mathfrak{X}\to \mathfrak{M}_*$ satisfying the BDC for $\mathfrak{D}:=\{\beta (a):a\in D\}$.


This justifies writing a stable canonical rule $\mu(\mathfrak{M}, D)$ as $\mu(\mathfrak{M}_{*}, \mathfrak{D})$, with $\mathfrak{D}$ constructed from $D$ as above. 

# Axiomatization

Let   $\mathfrak{M}$ be a modal algebra and let  $\Gamma/\Delta$ be a modal rule. There are only finitely many pairs $(\mathfrak{N}, D)$ satisfying the following condition:

- $\mathfrak{N}$ is a modal algebra generated, as a Boolean algebra, by a set of cardinality equal to $|\Theta|$, where $\Theta$ consists of the subformulas of formulas that are either premises or conclusions of $\Gamma/\Delta$;
- $D=\{V(\varphi):\square\varphi\in \Theta\}$ for some valuation $V$ such that the model $(\mathfrak{M}, V)$  refutes $\Gamma/\Delta$ in $\mathfrak{M}$.

Let $\Phi$ be the set of such pairs. If $(\mathfrak{M}, V)$ refutes $\Gamma/\Delta$, then there is a finite [[Filtration]] $(\mathfrak{N}, V')$ of  $(\mathfrak{M}, V)$ that also refutes $\Gamma/\Delta$. Moreover, the pair $(\mathfrak{N}, D)$ with $D$ defined from $V'$ as above, belongs to $\Phi$, and the inclusion embedding $\subseteq:\mathfrak{N}\to \mathfrak{M}$ is stable and satisfies the BDC for $D$. So, $\mathfrak{M}$ refutes $\mu(\mathfrak{N}, D)$. 

Conversely, take $(\mathfrak{N}, D)\in \Phi$ and assume $\mathfrak{M}$ refutes $\mu(\mathfrak{N}, D)$. Then there is a stable embedding $h:\mathfrak{N}\to \mathfrak{M}$ satisfying the BDC for $D$. Letting $V(p):=h(V'(p))$, where $V'$ is the valuation on $\mathfrak{N}$ that "determines" $D$ as per the second item above, we obtain a model $(\mathfrak{M}, V)$ that refutes $\Gamma/\Delta$.

We have thus established:

>[!Thesis] Theorem
>Every modal rule is equivalent to finitely many stable canonical rules.

>[!Thesis] Corollary
>Every normal modal rule system is axiomatizable by stable canonical rules. 



[^1]: Stable canonical rules can also be developed for Heyting and bi-Heyting algebras, frontal Heyting algebras, Boolean algebras with operators, and probably many more kinds of algebras.