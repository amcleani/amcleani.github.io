---
aliases:
created: 2024-07-29
tags:
  - higher_order_logic
  - philosophical_logic
  - concept
projects: "[[Q]]"
status: active
public: true
---
# Idea

*Quantificational substitution structures* are the key structures in my model theory for [[Quantificationalism]]. They model a metaphysical notion of domain specification by "de-syntactifying" an operation of domain specification defined on linguistic entities. 

Work in a standard higher-order language equipped with existence predicates $\ex_\sigma:\sigma \to t$. Assume that the primitive quantifiers $\forall_\sigma$ obey classical logic. Then the restricted quantifiers
$$
\forall_\sigma!:=\lambda X.\forall y^\sigma (\ex y\to Xy)
$$
are free quantifiers. 

 For each predicate $F:\sigma\to t$, we can define a translation mapping $\alpha_F$ over $\ortholanguage$, where $\alpha_F(M)$ is obtained by replacing every occurrence of the existence predicate $\ex_\sigma$ with $F$. These translations can be thought of as specifying the domain of the free quantifiers $\forall_\sigma!$. 

Thus, for example, if $G:\sigma\to t$ is a constant, we have:
$$
\alpha_F(\forall_\sigma! G):=\forall x(Fx\to Gx)\qquad\qquad \alpha_F(\exists_\sigma! G):=\forall x(Fx\land Gx)
$$

A *quantificational substitution structure* is a [[substitution structure]] where the substitutions---*quantificational substitutions*---are modelled after the syntactic mappings $\alpha_F$ as just defined. 

# Definition


I think of *domains* as ways of settling what it is to exist at a given type. A domain says, for finitely many types $\sigma$, that for an entity of that type to exist is for it to have a certain property. 



>[!Definition] Definition (Domain)
>A *domain* on an applicative structure $\obj{A}$ is a partial mapping $\propseq{f}:=\mathit{Types}\to \bigcup_\sigma A^{\sigma\to t}$ defined *on finitely many types*, such that $\propseq{f}(\sigma)\in A^{\sigma\to t}$ for each $\sigma\in \mathit{Types}$ on which $\propseq{f}$ is defined.

Basically, a domain $\propseq{f}$ says that for an entity of type $\sigma$ to exist is for it to have the property $\propseq{f}(\sigma)$, when the latter is defined. A domain defined precisely on $\bar\sigma$ is called a *$\bar\sigma$-domain.*


>[!Convention]
>I  use sequential notation for domains, writing $(\obj{f}_\sigma)_{\sigma\in \bar\sigma}$ for a domain $\propseq{f}$, where $\obj{f}_\sigma:=\propseq{f}(\sigma)$ for each $\sigma\in \bar\sigma$, and speak of domains as if they were type-indexed sequences of properties. I also abuse notation and treat domains defined on a single type $\sigma$ as elements of $A^{\sigma\to t}$ rather than functions from $\{\sigma\}$ to $A^{\sigma\to t}$. These domains are called *unit domains*. 


Each domain *determines* a quantificational substitution, whose function is to specify that domain as the new domain of quantification within its argument. We can model this by means of *substitution assignment functions*.

>[!Definition] Definition (Substitution assignment function)
> Let $\struc{A}=(\obj{I}, \obj{A})$ be a substitution structure. A *substitution assignment function* is a surjective mapping $i_{(\cdot)}:\mathit{Dom}\to I$. 


We think of $\sub{f}$ as the quantificational substitution determined by $\propseq{f}$. In [[models based on QSSs|models for Quantificationalism]], quantificational substitutions are used to interpret [[Quantificationalism#Regimentation|domain specifiers]].


Some domains are *current*, in the sense that for each type $\sigma$ on which they are defined, what it is for an entity of type $\sigma$ to exist according to that domain is simply for it to exist. We model this idea through the notion of an *identity domain*. 


>[!Definition] Definition (Identity domain)
> Let $\struc{A}=(\obj{I}, \obj{A}, i_{(\cdot)})$ be a substitution structure equipped with a substitution assignment function. An *identity domain* is any domain $\propseq{e}\in \mathit{Dom}$ such that $\sub{e}$ is the identity substitution in $\obj{I}$.


I write $\obj{e}_\sigma$ for an arbitrary element of $\obj{A}^{\sigma\to t}$, if there is one, such that $\subfree{\obj{e}_\sigma}=1$.  In [[models based on QSSs|models for Quantificationalism]], each existence predicate $\ex_\sigma$ expresses $\obj{e}_\sigma$. Thus we may think of identity domains as consisting entirely of interpretations of existence predicates. The identity substitution can be thought of as a quantificational substitution that specifies *the existing things* as the new domain of quantification within its argument. 


Through substitution assignment functions, we can also define an operation of *domain composition*. Given two nice type sequences $\bar\sigma$ and $\bar\tau$, let $\bar\sigma+\bar\tau$ be an arbitrary nice type sequence such that the types occurring in it are exactly the types that occur in either $\bar\sigma$ or $\bar\tau$. If $\propseq{f}, \propseq{g}$ are respectively a $\bar\sigma$- and a $\bar\tau$-domain, the *composition* $\propseq{f}\bullet\propseq{g}$ is a $\bar\sigma+\bar\tau$-domain defined by putting 
$$
(\propseq{f}\bullet\propseq{g})(\sigma):= \begin{cases} \sub{f}\obj{g}_\sigma & \text{if $\sigma\in \bar\tau$}\\ \obj{f}_\sigma & \text{if $\sigma\in \bar\sigma$ but $\sigma\notin\bar\tau$}\\ \text{undefined} & \text{otherwise.} \end{cases}
$$ 
Intuitively, the domain $\propseq{f}\bullet\propseq{g}$ is the domain $\propseq{g}$ seen from the "perspective" of the domain $\propseq{f}$. We can think of domains as characterizing not only what exists, but also what exists according to other domains---including themselves. So, what it is for an entity of the same type to exist according to $\propseq{f}\bullet\propseq{g}$ is the same as what it is for it to *exist according to $\propseq{g}$, according to $\propseq{f}$*. For example, the domain of *lovers* specifies the lovers as what exists, and also specifies the *lovers among lovers* as what exists *according to the domain of lovers*. As both the name and the gloss just given suggest, we will use domain composition to characterize the composition of quantificational substitutions. 


A *quantificational substitution structure* is defined as a substitution structure equipped with a substitution assignment function that is "well behaved" with respect to domain composition. 
>[!Definition] Definition (Quantificational substitution structure)
>A *quantificational substitution structure*, henceforth a *QSS*, is a tuple $\struc{A}=(\obj{I}, \obj{A}, \mathit{Sub}, i_{(\cdot)})$, where $(\obj{I}, \obj{A}, \mathit{Sub})$ is a substitution structure, $\mathit{i}_\cdot:\mathit{Dom}\to I$ is a substitution assignment function, such that an identity unit $\sigma$-domain $\obj{e}_\sigma$ exists for every type $\sigma$, and the conditions 
>$$
>\begin{gather} \sub{f}\circ\sub{g}=\subfree{\propseq{f}\bullet \propseq{g}}  \tag{Composition} \\ 
>\propseq{e}\bullet \propseq{f}=\propseq{f}\bullet \propseq{e} \tag{Identity} \end{gather}
>$$ 
>hold for all domains $\propseq{f}, \propseq{g}$ and any identity domain $\propseq{e}$. 

^def-qss



The existence assumption about identity unit domains is motivated by the intended use of identity domains as domains consisting entirely of interpretations of existence predicates. In fact, the existence of all identity unit domains guarantees that an identity $\bar\sigma$-domain exists for every nice type sequence $\bar\sigma$. Indeed, when $\bar\sigma=(\sigma_1, \ldots, \sigma_n)$, an identity $\bar\sigma$-domain $\propseq{e}$ can be defined as 
$$
\propseq{e}:=\obj{e}_{\sigma_1}\bullet\obj{e}_{\sigma_2}\bullet\cdots\bullet \obj{e}_{\sigma_n}.
$$ 


[[#^def-qss|Composition]] says that domain composition commutes with the substitution assignment function. Since $i_{(\cdot)}$ is surjective, for any two domains $\propseq{f}, \propseq{g}$ there must be a unique domain $\propseq{h}$ such that $\sub{h}=\sub{f}\circ\sub{g}$.  This is identified with  $\propseq{f}\bullet \propseq{g}$.


[[#^def-qss|Identity]] is a bit more complicated.  We could obtain an equivalent definition if we replaced it with the claim that both the following identities hold for any $\bar\sigma$-domain $\propseq{f}$:
$$
\begin{align} 
\sub{f}\obj{e_\sigma}&=\obj{f}_\sigma &\text{whenever $\sigma\in \bar\sigma$}\tag{Generality}\\ 
\sub{f}\obj{e_\tau}&=\obj{e}_\tau &\text{whenever $\tau\notin \bar\sigma$}\tag{Modularity} \end{align}
$$ 
^genmod

Both conditions concern what quantificational substitutions do to identity unit domains. [[#^genmod|Generality]] requires that applying $\sub{f}$ to $\obj{e_\sigma}$ retrieve the $\sigma$-th projection of the domain $\propseq{f}$. In other words, to exist among the $F$s is just to be an $F$. 


Note, also, that [[#^genmod|Generality]] explains the second case in the definition of domain composition: when $\obj{f}_\sigma$ is defined but $\obj{g}_\sigma$ is not, then $(\propseq{f}\bullet \propseq{g})(\sigma)=\obj{f}_\sigma$. In view of [[#^genmod|Generality]], this is exactly what would happen if we were to expand $\propseq{g}$ to a domain $\propseq{g}'$ defined at $\sigma$ as well, with $\propseq{g}'(\sigma)=\obj{e}_\sigma$. 


On the other hand, [[#^genmod|Modularity]] requires that $\obj{e}_\tau$ be a fixpoint of $\sub{f}$ whenever $\tau\notin \bar\sigma$. In other words, to exists$_\sigma$ at the $F^{\tau\to t}$s is just to  exists$_\sigma$.

Together, [[#^genmod|Generality]] and [[#^genmod|Modularity]] paint a picture of higher-order existence as *freely recombinable*. What exists at one type is completely independent on what exists at another type. I take this to be a core aspect of the intended interpretation of domain specification. But it is certainly a philosophically controversial picture: given reasonable background assumptions, a theory of domain specifiers based on QSSs is incompatible with theses about higher-order existence familiar from the literature on higher-order contingentism.


# Congruences and quotients

Recall the notions of  [[applicative structure|applicative congruence]] and [[substitution structure|substitutional congruence]]. To these, we add the notion of a
*quantificational congruence*: an equivalence relation that is "well
behaved" with respect to the mapping $\subfree{(\cdot)}$. 

When $\bar\sigma$ and $\bar\tau$ are nice type sequences such that every type that occurs in $\bar\sigma$ occurs in $\bar\tau$, there is a mapping from
$\mathit{pad}^{\bar{\tau}}_{\bar{\sigma}}:\mathit{Dom}_{\bar\sigma}\to \mathit{Dom}_{\bar\tau}$
given by
$$
\mathit{pad}^{\bar{\tau}}_{\bar{\sigma}}(\propseq{f}) = \propseq{e}\bullet\propseq{f}\qquad\text{$\propseq{e}$ an identity $\bar\tau$-domain.}\tag{Padding}
$$
We should think of $\propseq{e}\bullet\propseq{f}$ as the
"representative" of $\propseq{f}$ among $\bar\tau$-domains. For note
that $\sub{f}\obj{a}=\subfree{\propseq{e}\bullet\propseq{f}}\obj{a}$
holds for any $\obj{a}\in A^\rho$, for any type $\rho$.


Let $\sim$ be a typed family of equivalence relations on an
applicative structure $\obj{A}$ and let $\propseq{f}, \propseq{g}$ be
respectively a $\bar\sigma$- and a $\bar\tau$-domain on $\obj{A}$. 
Write $\propseq{f}\sim \propseq{g}$ to mean that
$$
(\mathit{pad}^{{\bar\sigma+\bar\tau}}_{{\bar\sigma}}(\propseq{f}))(\rho)\sim (\mathit{pad}^{{\bar\sigma+\bar\tau}}_{{\bar\tau}}(\propseq{g}))(\rho)\text{ for all $\rho\in \bar\sigma+\bar\tau$}.
$$
In other words, $\propseq{f}\sim \propseq{g}$ holds when the
"representatives" of $\propseq{f}$ and $\propseq{g}$ among
$\bar\sigma+\bar\tau$-domains have $\sim$-equivalent projections.

>[!Definition] Definition (Quantificational congruence)
>A *quantificational congruence* on a QSS $\struc{A}$ is a typed family
>$\sim$ of equivalence relations on $\struc{A}$, such that
>$\propseq{f}\sim \propseq{g}$ implies
>$\sub{f}\obj{a}\sim \sub{g}\obj{a}$ for every $\obj{a}\in A^\sigma$,
>whenever $\propseq{f}, \propseq{g}$ are domains over $\obj{A}$.

By putting together this notion with those of an applicative congruence
and of a substitutional congruence, we reach the general notion of a
*congruence*.

>[!Definition] Definition (Congruence)
>A *congruence* on a QSS $\struc{A}$ is a quantificational congruence on
>$\struc{A}$ that is also a substitutional congruence for the underlying
>substitution structure and an applicative congruence for the underlying
>applicative structure.

It is worth noting for later reference that congruences as just defined
are automatically congruences for domain composition: if  $\propseq{f}\sim \propseq{f'}$ and $\propseq{g}\sim \propseq{g}'$, then $\propseq{f}\bullet \propseq{g}\sim\propseq{f}'\bullet \propseq{g'}$.


Congruences can be used to define an operation of *quotienting* for
QSSs. When $\sim$ is a congruence on a QSS $\struc{A}$, write
$\sub{f}\sim \sub{g}$ to mean that $\sub{f}\obj{a}\sim \sub{g}\obj{a}$
holds for every $\obj{a}\in A^\sigma$ and write $[\sub{f}]$ for the
equivalence class of $\sub{f}$ under this lifting of $\sim$.

>[!Definition] Definition (Quotient)
>Let $\struc{A}$ be a QSS and $\sim$ a congruence on $\struc{A}$. When
>$\propseq{f}$ is a $\bar\sigma$-domain, write $[\propseq{f}]$ for the
>partial function with $[\propseq{f}](\sigma):=[\obj{f}_\sigma]$ when
>$\sigma\in \bar\sigma$ and undefined otherwise. The *quotient* of
>$\struc{A}$ under $\sim$ is the QSS
>$\struc{A}_{/\sim}:=([\obj{I}], [\obj{A}], [\mathit{Sub}], [i_{(\cdot)}], [\xi])$,
>where
>1.  $[\obj{A}]$ is the quotient of $\obj{A}$ under $\sim$;
>2.  $[\obj{I}]=([I], [\circ])$ is the quotient of the monoid
>    $(I, \circ)$ under the lifting of $\sim$ to $I$;
>3.  $[\mathit{Sub}]([\sub{f}], [\obj{a}])=[\mathit{Sub}(\sub{f}, \obj{a})]$;
>4.  $[i]_\cdot$ is the mapping $[\propseq{f}]\mapsto [i_{\propseq{f}}]$.

It is straightforward to verify that this is, indeed, a QSS.


# Existence results

There are non-trivial QSSs. I know of two ways of showing this: via a [[existence of QSSs via term structure construction|a term structure construction]] and via a [[existence of models based on QSSs via direct power construction|direct power construction]].


