---
aliases:
created: 2023-10-17
tags:
  - higher_order_logic
  - philosophical_logic
public: true
---
# Idea
$\mathtt{H}$ is a standard classical higher-order logic used as background logic for the formulations of various systems of higher-order logic of philosophical interest, such as [[Classicism]].
# Axiomatization

Axiom instances include both open and closed terms. $\Phi[A]$ stands for a term with an occurrence of $A$, and $\Phi[B]$ stands for the result of replacing that very occurrence of $A$ with $B$. Free variables in $A$ are allowed. 

- $\vdash P$ when $P$ is a classical tautology (Taut)
- $\vdash \forall  F\to FA$ (UI)
- $\vdash FA\to \exists F$ (EG)
- $\vdash A=A$ (Ref)
- $\vdash A=B\to FA=FB$ (LL)
- $\vdash \Phi[(\lambda v. A)B]\leftrightarrow \Phi[A[v/A]]$ when $v$ is substitutable for $A$ ($\beta$)
- $\vdash \Phi[\lambda v. Fv]\leftrightarrow \Phi[F]$ when $v$ is not free in $F$ ($\eta$)
- If $\vdash P$ and $\vdash P\to Q$ then $\vdash Q$ (MP)
- If $\vdash P\to Q$ and $v$ is not free in $P$ then $\vdash P\to \forall v Q$ (Gen)
- If $\vdash P\to Q$ and $v$ is not free in $Q$ then $\vdash \exists v P\to Q$ (Inst)