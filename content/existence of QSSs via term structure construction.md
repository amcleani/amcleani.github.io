---
aliases: []
created: 2026-01-16
tags:
  - result
  - higher_order_logic
  - philosophical_logic
projects:
status:
sources:
public: true
---

# Construction


We work in a standard higher-order language without non-standard syncategorematic operations nor restrictions on $\lambda$-abstraction,   $\mathcal{L}_0$. For any nice
term sequence $\trmseq{F}$, define the mapping $\alpha_{\trmseq{F}}$
recursively as follows.

1.  $\alpha_{\trmseq{F}}(C):=C$ for each constant $C\in \Sigma^\sigma$
    other than $\ex_\sigma$;

2.  $\alpha_{\trmseq{F}}(\ex_\sigma):=F_\sigma$ if $F_\sigma$ is
    defined, $\alpha_{\trmseq{F}}(\ex_\sigma):=\ex_\sigma$
    otherwise

3.  $\alpha_{\trmseq{F}}(x):=x$ for each variable
    $x\in \mathit{Var}^\sigma$;

4.  $\alpha_{\trmseq{F}}(MN):=\alpha_{\trmseq{F}}(M)\alpha_{\trmseq{F}}(N)$
    whenever $M: \sigma\to \tau$ and $N: \sigma$;

5.  $\alpha_{\trmseq{F}}(\lambda x. M):=\lambda x. \alpha_{\trmseq{F}}(M)$;

6.  $\alpha_{\trmseq{F}}(\forall x P):=\forall x \alpha_{\trmseq{F}}(P)$
    whenever $x\in \mathit{Var}^\sigma$.

In the last two clauses the bound variable $x$ is relabeled to avoid capture. Note that $\alpha_{\trmseq F}$ does not "move" unguarded quantifier occurrences, i.e. ones not syntactically restricted by a predicate containing an existence predicate: $\alpha_{F}(\exists x Yx)=\exists x Yx$ when $Y$ is a variable. Only guarded quantifiers have their domain specified in this model.



It is well known that $\mathcal{L}_0$ carries an [[Applicative structure]]
$\obj{\mathcal{L}_0}:=(\mathcal{L}_0, \app)$, where
$\app^{\sigma\tau}(M, N):=MN$. Thus a *domain* over
$\obj{\mathcal{L}_0}$ is essentially a nice term sequence. More exactly,
for each nice term sequence $\trmseq{F}$ there is a domain that assigns
$F_\sigma$ to $\sigma$ whenever $F_\sigma$ is defined and is undefined
otherwise. In view of this correspondence, I  notate and speak of
domains over $\obj{\mathcal{L}_0}$ as if they were nice term sequences.
Of course, nice term sequences that are mutual permutations of one
another correspond to the same domain.

We define a typed family of equivalence relations
$\sim_\sigma\subseteq \mathcal{L}_0^\sigma\times \mathcal{L}_0^\sigma$
on $\mathcal{L}_0$ by setting
$$M\sim_\sigma N\iff \logic{H}_0\vdash \alpha_{\trmseq{F}}(M)\equiv \alpha_{\trmseq{F}}(N)\text{ for every nice term sequence $\trmseq{F}$}.$$
Intuitively, then, $M\sim N$ means that $M$ and $N$ are provably applicatively indiscernible in $\logic{H}_0$ (the classical system over $\mathcal L_0$, which translates into Bacon's [[H]]), and remain so under arbitrary translations. It is straightforward to verify that $\sim$ is an applicative congruence of our term applicative structure $(\mathcal{L}_0, \app)$. We then let $\obj{A}:=(A, \app)$ be
the quotient of $\obj{\mathcal{L}_0}$ through $\sim$.

To obtain a substitution structure, we can lift the mappings
$\alpha^\sigma_{\trmseq{F}}$ to equivalence classes of terms. Write
$[M]$ for the equivalence class of $M$ under $\sim$. A domain over
$\obj{A}$ is then the result of lifting a domain over $\mathcal{L}_0$ to
equivalence classes under $\sim$. This justifies notating domains in
$\obj{A}$ as $[\trmseq{F}]:=([F_\sigma])_{\sigma\in \bar\sigma}$, once
more slightly abusing notation.

To each such domain $[\trmseq{F}]$ we assign a substitution $\subtm{F}$
by setting $$\subtm{F}[M]:=[\alpha_{\trmseq{F}}(M)].$$ It is not
difficult to verify that $\subtm{F}$ and $\subtm{G}$ are identical
whenever $[\trmseq{F}]=[\trmseq{G}]$. The identity substitution is $\subtm{\ex_\sigma}$, for any $\sigma$, as $\alpha_{\ex_\sigma}$ fixes every term; closure under composition holds because $\subtm{G}\circ\subtm{F}=\subfree{[\trmseq G]\bullet[\trmseq F]}$. The identity domains are the $[\trmseq F]$ with $F_\sigma\sim\ex_\sigma$ for every $\sigma$ on which $\trmseq F$ is defined.

It is then straightforward
to check that
$\struc{A}:=(\obj{A}, \obj{I}, \mathit{Sub}, i_{(\cdot)})$ is a QSS, where $\obj{I}:=(I, \circ)$ with $\circ$ function composition, and $\mathit{Sub}$ is function application. 


# Limitations

This construction cannot be continued to build a [[models based on QSSs|model]] for a language with domain specifiers, since it is not rich enough to interpret syncategorematic quantification. 