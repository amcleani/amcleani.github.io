---
title: Quantificationalists should theorize in a free logic
---


# Argument

On the intended reading of [[Quantificationalism|domain specifiers]], the classical principle of Universal Instantiation

$$
\tag{UI} \forall x P\to P[x/a]
$$

fails within the scope of domain specifiers.  

For example, it is surely true that, among the French, everything is French:

$$
\tag{1} \at(F)(\forall x Fx)
$$ 
^5c5fe3

But Barack Obama is not French. Nor is he French among the French:

$$
\tag{2} \at(F)(\neg Fb).
$$ 
^35fc60

Thus, assuming that domain specifiers commute with application and that Boolean operators are [[stability|stable]], we get

$$
\tag{3} \at(F)(\forall x Fx\land \neg Fb),
$$

which is a counter-example to the $\at(F)$-necessitation of (UI). 

So, if Quantificationalists wish to hold that logical truths remain true under arbitrary domain specifiers, they should reject (UI) and theorize in a free logic, for example [[AtQ|this one]].

# Caveats on stability

I take  ([[#^5c5fe3|1]]) to be intuitive, especially if we take the domain specifier $\at(F)$ to formalize the English exceptive "with the exception of the non-French." But ([[#^5c5fe3|1]]) can also be derived from the assumption that $F$ is [[stable]]. For if it is, then $\at(F)(F)=F$. Given this claim, $\at(F)(\forall x Fx)$ can be proved in a background logic where domain specifiers commute with application and the laws of *free* logic hold within the scope of domain specifiers.[^1] 

Likewise, ([[#^35fc60|2]]) is derivable from $Fb$ given the assumption that both $F$ and $b$ are stable. While one may object about the stability assumptions in the specific example given, so long as one admits a non-trivial stable property $G$ that fails to apply to at least one stable individual $a$, a counter-example to the $\at(G)$-necessitation of (UI) can be constructed. 




[^1]: Specifically, we use the $\at(F)$-necessitation of the [[FH]] axiom FrUI and the rule (At-UG) from [[AtQ]].