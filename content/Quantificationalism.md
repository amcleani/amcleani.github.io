---
aliases:
created: 2025-01-06
tags:
  - thesis
  - metaphysics
  - philosophical_logic
projects:
status:
public: true
---
# Idea

*Quantificationalism* is the view that there are quantificationally variable propositions: propositions that have different truth values *at* or *relative to* different domains of quantification. Here is what I mean. Consider:

1. No country has all five of Earth's climate zones  ^992753
2. In 1783, no country had all five of Earth's climate zones.  ^18deb3
3. With the exception of the United States, no country has all five of Earth's climate zones. ^bb8b75

In fact, the United States has all five of Earth's climate zones. That makes [[#^992753|1]] false. However, the remaining sentences are all true. No other country enjoys this much climate diversity. Moreover dry climates in North America only occur west of the Mississippi River, which the 1783 Treaty of Paris identified as the western boundary of the United States. 

It is natural to explain the truth  of [[#^18deb3|2]] by saying that [[#^992753|1]] expresses a [[temporarism|temporary falsehood]]: a false proposition that used to or will be true, in particular was true in 1783. [[#^992753|1]]  and its embedded occurrence in [[#^18deb3|2]] express one and the same proposition. [[#^18deb3|2]] is constructed by applying a sentential operator, "in 1783," to [[#^992753|1]]. This operator is non-trivial: it can turn a falsehood into a truth. 

There is an analogous explanation of the truth of [[#^bb8b75|3]]. The proposition expressed by [[#^18deb3|2]] is a *quantificationally variable falsehood*: a false proposition that is true *at* or *relative to* some domain of quantification, in particular the domain of things other than the United States. [[#^992753|1]]  and its embedded occurrence in [[#^bb8b75|3]] express one and the same proposition. [[#^bb8b75|3]]  is constructed by applying a sentential operator, "with the exception of the United States," to [[#^992753|1]]. This operator is non-trivial: it can turn a falsehood into a truth. 

*Quantificationalism* is the view that there are quantificationally relative falsehoods (and truths) in this sense. It is analogous to *Temporalism*, the view that there are temporary  falsehoods (and truths). Both theses are non-trivial. To see why, it suffices to note that the truth values of [[#^992753|1]], [[#^18deb3|2]], and [[#^bb8b75|3]] can in principle be explained without resorting to either temporary or quantificationally variable propositions. 

To explain the truth value of [[#^992753|1]] and [[#^18deb3|2]], one can say that [[#^992753|1]] is false because it expresses the eternally false proposition *that no country has all five of Earth's climate zones in 2026*. On the other hand,  [[#^18deb3|2]] is true because it expresses the eternally true proposition *that no country had all five of Earth's climate zones in 1783.* Contrary to appearance, "1783" is not a sentential operator: perhaps it binds a variable ranging over times that occurs somewhere in [[#^992753|1]], a variable that takes the time of utterance as its value when it occurs free. 

Likewise, to explain the truth values of  [[#^992753|1]] and [[#^bb8b75|3]], one can say that [[#^992753|1]] is false because it expresses the quantificationally invariable falsehoood  *that no country in $D$ has all five of Earth's climate zones*, where $D$ rigidly picks out the contextually salient domain of quantification and that domain contains the United States. On the other hand, [[#^bb8b75|3]] is true because it expresses the quantificationally invariably true proposition *that no country in the domain of countries other than the United States has all five of Earth's climate zones.* Contrary to appearance, "with the exception of the United States" is not a sentential operator: perhaps it binds a variable ranging over domains of quantification that occurs somewhere in [[#^992753|1]], a variable that takes the contextually salient domain of quantification  as its value when it occurs free.




# Regimentation

I think Temporalism and Quantificationalism are best understood as higher-order generalizations. In a higher-order language equipped with a sentential operator $S$, Temporalism can be expressed as:

>[!thesis] Temporalism
>$\exists p (p\land S\neg p)$

Thus Temporalism asserts the *non-triviality* of tense operators: the operator $S$ can turn a truth into a falsehood. 

I understand Quantificationalism in analogous fashion.  That is, the Quantificationalist posits a non-trivial sentential operator,  $\blacklozenge$, expressing the notion of *being true at, or relative to, some domain of quantification*.

>[!thesis] Quantificationalism
>$\exists p (p\land \blacklozenge\neg p)$


The logic of $\blacklozenge$ can be partially characterized by studying the logics of more specific expressions called *domain specifiers*, which regiment natural language expressions like 'with the exception of the United States' as used in [[Quantificationalism#^303368|5]] above. Domain specifiers are constructed by means of a syncategorematic expression  $\mathsf{At}$, which combines with a predicate $F$ of any type of the form $\sigma \to t$ and a term $M$ of any type $\tau$ to produce a term $\mathsf{At}(F)(M)$ of type $\tau$.[^1]  A *domain specifier* is the syncategorematic expression resulting from filling in the first argument place of $\mathsf{At}$.  ^d7bf51

Intendedly, the meaning of $\mathsf{At}(F)(M)$ is derived from the meaning of $M$ by forcing all quantification over entities of type $\sigma$ "involved" in $M$  to range over a domain determined by the meaning of $F$. For example, if $F$ expresses the property *is a country other than the U.S.*, then then $\mathsf{At}(F)$ can be likened to the English expression 'with the exception of the U.S.' Likewise, $F$ expresses the property *is a prime number*, then $\mathsf{At}(F)$ can be likened to the English expression 'among prime numbers,' whose semantic function is to force all quantification within its scope to range over prime numbers only. We can give a model-theoretic representation of the meaning of domain specifiers using [[Quantificational substitution structure|quantificational substitution structures]]. 

Let $\blacksquare$ be the dual of $\blacklozenge$. In [[Q|the correct logic for Quantificationalism]], $\blacksquare P$ is a master modality for all domain specifiers: $\blacksquare P$ is provable precisely when $\mathsf{At}(F)(P)$ is provable for all domain specifiers $\mathsf{At}(F)$.[^2]  Importantly, we allow domain specifiers of the form $\mathsf{At}(X)$ where $X$ is a variable: free variables are better than quantifiers at expressing generality in free logic, and [[Quantificationalists should theorize in a free logic]].

  
[^1]: Officially, I allow any finite sequence of predicates of pairwise distinct types to occur in the first argument place of $\mathsf{At}$. This ensures domains of quantification at different types can be changed simultaneously. 

[^2]: Officially: iff $\mathsf{At}(\bar F)(P)$ is provable for all domain specifiers, where $\bar F$ is any sequence of predicates of pairwise distinct types.



