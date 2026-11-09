---
aliases:
created: 2024-08-14
tags:
  - higher_order_logic
  - philosophical_logic
projects: "[[The Logic of Quantificationalism]]"
status: inactive
public: true
---
# Overview

$\logic{Q}$ is the basic logic of domain specifiers and the ''at some domain'' operator. It is a (modestly) infinitary free logic formulated in a language with [[syncategorematicity|genuinely syncategorematic expressions]] that makes [[Quantificationalism]] consistent, and a theorem once minimal existence assumptions are added.

There are lots of interesting metaphysical questions that $\logic{Q}$ leaves open. Various extensions of $\logic{Q}$ exist that settle these questions one way or another. 

# Syntax

The language $\genlanguage$ is defined in two steps. First, we define a higher-order language $\fulllanguage$ with syncategorematic operations $\at, \alldom$ (and quantifiers) and unrestricted $\lambda$-abstraction. Then, we define $\genlanguage$ as a sublanguage of $\fulllanguage$ where $\lambda$-abstraction is suitably restricted so to ensure that expressions like 
$$
\lambda p. \at(F)(p)\qquad \lambda x. \alldom Fx
$$
are ill formed. These restrictions guarantee that domain specifiers and $\alldom$ are [[syncategorematicity|genuinely syncategorematic]].

More precisely, given a signature $\Sigma$, let $\fulllanguage(\Sigma)$ be defined recursively as follows, where $M\cdot \sigma$ means that $M$ is a $\fulllanguage(\Sigma)$ term of type $\sigma$:

>[!Definition] Definition (Recursive definition of $\fulllanguage(\Sigma)$)
>
>1. $x\cdot \sigma$ whenever $x\in \mathit{Var}^\sigma$;
> 2. $C\cdot \sigma$ whenever $C\in \Sigma^\sigma$;
> 3. $MN\cdot \tau$ whenever $M\cdot \sigma\to \tau$ and $N\cdot\sigma$;
> 4. $\lambda x. M\cdot \sigma\to \tau$ whenever $M\cdot \tau$ and $x\in \mathit{Var}^\sigma$;  ^1197f9
> 5. $\forall x P\cdot t$ whenever $x\in \mathit{Var}^{\sigma}$ and $P\cdot t$;
> 6. $\at(\trmseq F)(M)\cdot \tau$ whenever $\trmseq F:=(F_\sigma)_{\sigma\in \bar\sigma}$ such that $\bar\sigma$ is a finite, non-repeating sequence of types (a *nice type sequence*) and $F_\sigma\cdot \sigma\to t$ for each $\sigma\in \bar\sigma$^[: I abuse notation slightly and write $\sigma\in \bar\sigma$ to mean that $\sigma$ *occurs* in a sequence of types $\bar\sigma$] and $M\cdot \tau$.
> 7. $\alldom P\cdot t$ whenever $P\cdot t$
>



I will call $\bar F$ as above *nice term sequences*. Notice that the universal quantifier is also treated as a syncategorematic expression; the existential quantifier is defined, $\exists x P:=\neg\forall x\neg P$. This is for expressive power concerns: the categorematic quantifier $\hat\forall:=\lambda X.\forall y Xy$ is less expressive than the syncategorematic one in languages with restricted abstraction. 

The *abstractable variables* of a term $M$ of type $\sigma$, $\mathsf{AV}_\sigma(M)$, are defined as those variables of type $\sigma$ that do not occur free, in $M$, within the scope of the second argument place of $\at$ or within the scope of $\alldom$. More precisely, 

>[!Definition] Definition (Abstractable Variable)
> 1. $\mathsf{AV}_\sigma(x)=\mathit{Var}^\sigma$ for $x\in \mathit{Var}^\sigma$;
> 2. $\mathsf{AV}_\sigma(C)=\mathit{Var}^\sigma$ for $C\in \Sigma^\sigma$;
> 3. $\mathsf{AV}_\sigma(MN)=\mathsf{AV}_\sigma(M)\cap \mathsf{AV}_\sigma(N)$;
> 4. $\mathsf{AV}_\sigma(\lambda x. M)=\mathsf{AV}_\sigma(M)\cup(\{x\}\cap \mathit{Var}^\sigma)$;
> 5. $\mathsf{AV}_\sigma(\forall x P)=\mathsf{AV}_\sigma(P)\cup(\{x\}\cap \mathit{Var}^\sigma)$;
> 6. $\mathsf{AV}_\sigma(\at(\trmseq F)(M))=\big(\bigcap_{\tau\in\bar\sigma}\mathsf{AV}_\sigma(F_\tau)\big)\smallsetminus \mathsf{FV}_\sigma(M)$, where $\trmseq F$ is indexed by $\bar\sigma$;
> 7. $\mathsf{AV}_\sigma(\alldom P)=\mathit{Var}^\sigma\smallsetminus \mathsf{FV}_\sigma (P)$

The language $\genlanguage(\Sigma)$ is then defined the same way as $\fulllanguage(\Sigma)$, except that the clause for $\lambda$-abstraction is replaced with 

- $\lambda x. M\cdot \sigma\to \tau$ whenever $M\cdot \tau$ and $x\in \mathsf{AV}_\sigma(M)$;

Note $\genlanguage (\Sigma)\subseteq \fulllanguage(\Sigma)$. When discussing $\genlogic Q$ I reserve the notation $M:\sigma$ to mean that $M$ is a $\genlanguage$-term of type $\sigma$. 

We assume we are always working in a signature containing:

- Existence predicates $\ex_\sigma:\sigma\to t$;
- [[Applicative indiscernibility]] predicates $\equiv_\sigma:\sigma\to \sigma\to t$

We let $\Lambda$ be the signature containing the Boolean operators $\land$ and $\neg$ (the other connectives, $\top$, $\bot$ and $\exists$ are defined) and the above, and omit reference to signatures when $\Lambda$ is intended. 

# Background Higher-Order Logic

The background higher-order logic is $\genlogic{FH}$, a higher-order free logic formulated in $\genlanguage$. It uses primitive existence predicates $\ex_\sigma$, though these are definable up to provable equivalence as $\lambda x^\sigma . \exists y(x\equiv y)$. I use primitive existence predicates because existence has a central theoretical role in quantificationalism. 

>[!Definition] Axioms of $\genlogic{FH}$
>$$
>\begin{align}
>&\vdash P &\text{$P$ a classical tautology}\tag{Taut}\\
>&\vdash \forall x\ex x \tag{$\forall\ex$}\\
>&\vdash \ex a\to (\forall y P\to P[a/y])\tag{FrUI}\\
>&\vdash \forall x(P\to Q)\to (\forall xP\to \forall x Q)\tag{Norm}\\
>&\vdash M\equiv M \tag{Refl}\\
>&\vdash (M\equiv N)\to FM\to FN\tag{ALL}\\
>&\vdash M\equiv N &M, N \text{$\beta\eta$-equivalent} \tag{$\beta\eta$}\\
>P, P\to Q&\vdash Q \tag{MP}\\
>\text{If }\Gamma&\vdash P\to Q\text{, then }\Gamma\vdash P\to\forall xQ &\text{$x$ fresh}\tag{UG}
>\end{align}
>$$

In the side condition of (UG) and of the rules below, a variable is *fresh* when it occurs free neither in any assumption in $\Gamma$ nor in the conclusion; for (UG) this means that $x$ is not free in $\Gamma$ or $P$.

Notice that $M\equiv N$ does not guarantee intersubstitutivity in all contexts: it's [[Applicative indiscernibility|applicative indiscernibility]], not identity. 

# Axioms of $\genlogic{Q}$ 

$\genlogic{Q}$ is an extension of $\genlogic{FH}$ with axioms for domain specifiers and $\alldom$. Here they are, in turn. 

## Axioms for Domain Specifiers

Here are the axioms of $\genlogic Q$ concerning domain specifiers but not $\alldom$

>[!Definition] Axioms for domain specifiers
>$$
>\begin{align}
>&\vdash \at(\trmseq\ex)(M)\equiv M\tag{Id}\\
>&\vdash \at(\trmseq F)(MN)\equiv (\at(\trmseq F)(M))(\at(\trmseq F)(N))\tag{App}\\
>&\vdash \at(\trmseq F)(\at(\trmseq G)(M))\equiv \at(\trmseq F\bullet\trmseq G)(M) \tag{CompG}\\
>&\vdash \at(\trmseq F)(M)\equiv \at(\trmseq G)(M) &\text{$\trmseq F, \trmseq G$ permutations}\tag{Perm}\\
>&\vdash \at(\trmseq F)(\heartsuit)\equiv \heartsuit &\heartsuit\in \{\land, \neg, \equiv\} \tag{Stab$\heartsuit$}\\
>&\vdash \at(\trmseq F)(M)\equiv M &\text{$M$ a combinator}\tag{Stab$\lambda$}\\
>&\vdash \at(\trmseq F)(\ex_\sigma)\equiv F_\sigma &\text{when $F_\sigma$ defined} \tag{Gen}\\
>&\vdash \at(\trmseq F)(\ex_\sigma)\equiv \ex_\sigma &\text{otherwise}\tag{Mod}\\
>\text{If }&\vdash P, \text{ then }\vdash \at(\trmseq F)(P) \tag{$\at$ Nec}\\
>\text{If }\Gamma&\vdash P\to\at(\trmseq F)(Q), \text{ then }\Gamma\vdash P\to\at(\trmseq F)(\forall xQ) &\text{$x$ fresh}\tag{$\at$UG}
>\end{align}
>$$

Notice that adding these axioms and rules to $\logic{FH}$ yields a finitary logic. Infinitarity is only introduced by $\alldom$. 


Here are some important groups of axioms. 

---

>[!Definition] Existence axioms of $\genlogic Q$
>$$
>\begin{align}
>&\vdash \at(\trmseq\ex)(M)\equiv M\tag{Id}\\
>&\vdash \at(\trmseq F)(\ex_\sigma)\equiv F_\sigma &\text{when $F_\sigma$ defined} \tag{Gen}\\
>&\vdash \at(\trmseq F)(\ex_\sigma)\equiv \ex_\sigma &\text{otherwise}\tag{Mod}\\
>\end{align}
>$$

The existence axioms capture the core of the idea that a domain specifier $\at(F^{\sigma\to t})$ forces quantification over entities of type $\sigma$ to range over precisely the $F$s:

1. To specify *the existing$_\sigma$ things* as the new domain of quantification is to change nothing at all (Id);
2. To *exist among the $F_\sigma$* is to *be an $F_\sigma$* (Gen);
3. To *exist$_\tau$ among the $F^{\sigma\to t}$* is to *exist$_\tau$*: changing the domain of quantification over things of type $\tau$ does not alter the domains of quantification at other types (Mod).

---

>[!Definition] Action axioms of $\genlogic Q$
>$$
>\begin{align}
>&\vdash \at(\trmseq\ex)(M)\equiv M\tag{Id}\\
>&\vdash \at(\trmseq F)(MN)\equiv (\at(\trmseq F)(M))(\at(\trmseq F)(N))\tag{App}\\
>&\vdash \at(\trmseq F)(\at(\trmseq G)(M))\equiv \at(\trmseq F\bullet\trmseq G)(M) \tag{CompG}\\
>\end{align}
>$$

The action axioms are object language counterparts to the idea that domain specifiers express [[Quantificational substitution structure|metaphysical substitutions acting on propositions, properties and relations]]. 

1. There is an identity substitution, expressed by $\at(\ex)$ (Id);
2. Substitutions commute with application (App);
3. Substitutions compose (CompG): the definition  of $\trmseq F\bullet \trmseq G$ is 
$$
(\bar F\bullet\bar G)_\sigma:=\begin{cases}
	\at(\trmseq F)(G_\sigma) &\text{if }G_\sigma\text{ is defined;}\\
	F_\sigma &\text{if } G_\sigma \text{ is undefined but } F_\sigma \text{ is defined;}\\
	\text{undefined}&\text{otherwise}
\end{cases}
$$
matching the way substitutions compose in the [[Quantificational substitution structure|QSSs]].


---

>[!Definition] Stability axioms of $\genlogic Q$
>$$
>\begin{align}
>&\vdash \at(\trmseq F)(\heartsuit)\equiv \heartsuit &\heartsuit\in \{\land, \neg, \equiv\} \tag{Stab$\heartsuit$}\\
>&\vdash \at(\trmseq F)(M)\equiv M &\text{$M$ a combinator}\tag{Stab$\lambda$}\\
>\end{align}
>$$

The stability axioms specify the minimal theoretical role of [[Stability]]. At a minimum, Boolean operators, applicative indiscernibility, and combinators do not involve quantification. 

## Axioms for $\alldom$

Here are the axioms and  rules for $\alldom$

>[!Definition] Axioms for $\alldom$
>$$
>\begin{align*}
>&\vdash \alldom P\to \at(\trmseq F)(P)\tag{Master}\\
>&\vdash \alldom (M\equiv N)\to (P[M/x]\to P[N/x])\tag{SLL}\\
>\text{If }\Gamma&\vdash P\to\at(\trmseq F)(\at(\trmseq X^{\bar\sigma})(Q))\text{ for every nice type sequence $\bar\sigma$,}\\
>\text{then }\Gamma&\vdash P\to\at(\trmseq F)(\alldom Q)\tag{Surj}
>\end{align*}
>$$
>The collection $\{\trmseq X^{\bar\sigma}\}_{\bar\sigma}$ must be *coherent*, i.e. obtained by choosing one variable $X_\sigma:\sigma\to t$ for each type $\sigma$ and setting $\trmseq X^{\bar\sigma}:=(X_\sigma)_{\sigma\in\bar\sigma}$, and *fresh*, i.e. none of these variables occurs free in $\Gamma$, $P$, $Q$ or $\trmseq F$.

The two axioms capture, respectively, the idea that $\alldom$ is broader than every domain specifier, and the idea that [[Identity in Quantificationalism|identity is applicative indiscernibility at all domains]]: $\alldom$-necessitated applicative equivalence suffices for intersubstitutivity in all contexts. 

The inference rule is infinitary and used as an introduction rule for $\alldom$. Using an infinitary rule provides a way of generalizing over domains that gets around the limitations of both free quantification and the inability to quantify over types in the object language. The infinitarity of (Surj) is fairly harmless: proofs in $\genlogic{Q}$ can be infinitely wide (infinitely branching), but every branch is finite. 