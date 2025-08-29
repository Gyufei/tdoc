---
sidebar_position: 3
---

# What’s DSA?

The Tadle platform is a powerful solution designed for both users and developers to fully leverage the potential of Decentralized Finance (DeFi). With an intuitive interface, Tadle bridges traditional finance and decentralized applications, accommodating various financial use cases.

At its core is the **Decentralized Sandbox Account (DSA)**, which acts as a middleware layer to integrate multiple DeFi protocols. Each user operates within their own sandbox smart contracts, providing a secure and customizable environment for transactions. This design ensures that users can explore DeFi services without exposing their EOA assets to risks.

This structure empowers users to utilize DeFi while maintaining control over their financial activities, minimizing risks typical of traditional interactions. Developers can easily build applications on Tadle, leveraging the DSA’s flexibility. Together, users and developers can explore new financial possibilities in a secure and efficient environment, fostering innovation within the DeFi ecosystem.

When calling a specific function from a whitelisted protocol, users interact with their DSA first. The smart account contract employs a multi-functional invoke to retrieve the address of the modules to call through gateway connector called **Jorro**. Once the address is obtained, the smart account accesses the implementation code and executes it, ensuring seamless interaction with diverse DeFi protocols.
