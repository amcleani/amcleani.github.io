---
title: Quantificationalism
---

# Idea

Consider:

1. Gavin Newsom is the governor of California. 
2. Gavin Newsom was not the governor of California in 2018.
3. Gavin Newsom would not have been the governor of California, had the 2021 recall election gone another way.

These sentences are all express truths. Here is a straightforward explanation of why. There are *temporary truths*: propositions that are true, but not always true. There are also *contingent truths*: propositions that are true, but not necessarily true. The proposition that Newsom is the governor of California is both a temporary and a contingent truth: it is true, but was not true in 2018, and would not have been true had the 2021 recall election gone another way.

Let [[Temporalism and Modalism|Temporalism]] the view that there are temporary truths and let [[Temporalism and Modalism|Modalism]] be the view that there are contingent truths. [[Quantificationalism]] is a view that is to quantification what [[Temporalism and Modalism|Temporalism]] and [[Temporalism and Modalism|Modalism]] are to time and modality respectively. It says that there are *quantificationally relative truths*: propositions that are true, but not true *at* or *relative to* all domains of quantification.


Let me elaborate further. Consider:

4. Every G7 country guarantees universal healthcare.  ^45b89e
5. With the exception of the United States, every G7 country guarantees universal healthcare.  ^303368

Now, [[Quantificationalism#^45b89e|4]] is false, because the United States is a G7 country that does not guarantee universal healthcare. However, it is the only exception, so [[Quantificationalism#^303368|5]] is true. The Quantificationalist explains this by saying that the proposition that every G7 country guarantees universal healthcare is a quantificationally relative falsehood: it is in fact false, but it is true relative to the restricted domain of G7 countries other than the United States.



# Regimentation

The statements of [[Temporalism and Modalism|Temporalism]] and [[Temporalism and Modalism|Modalism]] contain quantification over propositions. I do *not* intend this to be interpreted as first-order quantification over a special sort of abstract objects called propositions. Instead, I use it as [[Pronouncing higher-order quantification in English|a shorthand for higher-order quantification in sentence position]].

Thus [[Temporalism and Modalism|Temporalism]] implies the thesis that tense operators are *non-trivial*. An operator is non-trivial if it changes the truth value of at least one of its arguments. Likewise, [[Temporalism and Modalism|Modalism]] implies the thesis that modal operators are non-trivial.

In a higher-order language equipped with sentential operators $S$ and $\lozenge$ standing respectively for 'sometimes' and 'possibly,' [[Temporalism and Modalism|Temporalism]] and [[Temporalism and Modalism|Modalism]] can be expressed as follows. 

>[!thesis] Temporalism
>$\exists p (p\land S\neg p)$

>[!thesis] Modalism
>$\exists p (p\land \lozenge\neg p)$
  
See [[Temporalism and Modalism]] on these formulations and for comments on how they differ from other views falling under the same label in the literature. 


I understand [[Quantificationalism]] to be analogous to [[Temporalism and Modalism|Temporalism]] and [[Temporalism and Modalism|Modalism]] as just stated. 


these formulations of  \ref{temp} and \ref{mod}. That is, the quantificationalist posits a non-trivial sentential operator,  $\blacklozenge$, expressing the notion of *being true at, or relative to, some domain of quantification*.

>[!thesis] Quantificationalism
>$\exists p (p\land \blacklozenge\neg p)$


The logic of $\blacklozenge$ can be partially characterized by studying the logics of more specific expressions called *domain specifiers*, which regiment natural language expressions like 'with the exception of the United States' as used in [[Quantificationalism#^303368|5]] above. Domain specifiers are constructed by means of a syncategorematic expression  $\mathsf{At}$, which combines with a predicate $F$ of any type of the form $\sigma \to t$ and a term $M$ of any type $\tau$ to produce a term $\mathsf{At}(F)(M)$ of type $\tau$.[^1]  A *domain specifier* is the syncategorematic expression resulting from filling in the first argument place of $\mathsf{At}$. 

Intendedly, the meaning of $\mathsf{At}(F)(M)$ is derived from the meaning of $M$ by forcing all quantification over entities of type $\sigma$ ''involved'' in $M$  to range over a domain determined by the meaning of $F$. For example, if $F$ expresses the property *is a country other than the U.S.*, then then $\mathsf{At}(F)$ can be likened to the English expression 'with the exception of the U.S.' Likewise, $F$ expresses the property *is a prime number*, then $\mathsf{At}(F)$ can be likened to the English expression 'among prime numbers,' whose semantic function is to force all quantification within its scope to range over prime numbers only. We can give a model-theoretic representation of the meaning of domain specifiers using [[Quantificational substitution structure|quantificational substitution structures]]. 

Let $\blacksquare$ be the dual of $\blacklozenge$. In [[AtQ|the correct logic for Quantificationalism]], $\blacksquare P$ is a master modality for all domain specifiers: $\blacksquare P$ is provable precisely when $\mathsf{At}(F)(P)$ is provable for all domain specifiers $\mathsf{At}(F)$.[^2]  Importantly, we allow domain specifiers of the form $\mathsf{At}(X)$ where $X$ is a variable: free variables are better than quantifiers at expressing generality in free logic, and [[Quantificationalists should theorize in a free logic]].

  
[^1]: Officially, I allow any finite sequence of predicates of pairwise distinct types to occur in the first argument place of $\mathsf{At}$. This ensures domains of quantification at different types can be changed simultaneously. See [[Languages for Quantificationalism]] for more details.

[^2]: Officially: iff $\mathsf{At}(\bar F)(P)$ is provable for all domain specifiers, where $\bar F$ is any sequence of predicates of pairwise distinct types.



