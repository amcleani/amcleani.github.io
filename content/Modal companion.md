---
aliases: ["modal companion", "modal companions"]
tags:
---

# Idea

A *modal companion* of a superintuitionistic logic $\mathtt{L}$ is a modal logic above $\mathtt{S4}$ that "simulates" $\mathtt{L}$. The strict conditional of such a modal logic, when restricted to boxed atoms, behaves in the exact same way as the Heyting implication connective behaves in $\mathtt{L}$. In fact, there is a natural full and faithful translation of $\mathtt{L}$ into any of its modal companions, called the *Gödel translation.*


# Definition

The *Gödel translation* is a map $T$ from intuitionistic formulae to monomodal formulae defined recursively as follows. 

- $T(p)=\square p$
- $T(\bot)=\bot$
- $T (\varphi\land \psi)=T(\varphi)\land T(\varphi)$
- $T (\varphi\lor \psi)=T(\varphi)\lor T(\varphi)$
- $T(\varphi\to \psi)=\square(T(\varphi)\to T(\psi))$

A *modal companion* of a a superintuitionistic logic $\mathtt{L}$ is a modal logic $\mathtt{M}$ above $\mathtt{S4}$ such that $T$ is a full and faithful translation of $\mathtt{L}$ into  $\mathtt{M}$. That is:
$$\mathtt{L}=\{\varphi:T(\varphi)\in \mathtt{M}\}$$

The Gödel translation can be extended to *rules* by putting $T(\Gamma/\Delta):=T[\Gamma]/T[\Delta]$. We can then define a modal companion of a superintuitionistic rule system the same way. 

# Modal companion mappings

The theory of modal companions revolves mostly around studying the properties of three (families of) mappings: $\rho, \sigma$ and $\tau$. These mappings can be thought of as mappings on logics, on algebras or on spaces.

## Mappings on logics

We have effectively already introduced the mapping $\rho$ on logics (and rule systems). If $\mathtt{M}$ is a modal logic above $\mathtt{S4}$, we put
$$\rho\mathtt{M}:=\{\varphi:T(\varphi)\in \mathtt{M}\}.$$
This is always a superintuitionistic logic. 

In the other direction: if $\mathtt{L}$ is a superintuitionistic logic, we put
$$\tau\mathtt{L}:=\mathtt{S4}\oplus \{T(\varphi):\varphi\in \mathtt{L}\}\qquad \sigma\mathtt{L}:=\mathtt{Grz}\oplus\tau\mathtt{L}$$
It turns out that $\tau\mathtt{L}$ and $\sigma\mathtt{L}$ are respectively the *weakest* and *strongest* modal companions of $\mathtt{L}$.

## Mappings on algebras

## Mappings on spaces