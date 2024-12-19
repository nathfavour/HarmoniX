# HarmoniX

## **Introduction**
### **Problem Statement**
Music discovery and promotion have always relied on centralized platforms, limiting the ability of users and artists to truly engage in shaping the music landscape.

### **Our Solution**
Our project integrates blockchain technology into messaging platforms like Telegram, creating an ecosystem where users can:

- **Engage in music battles** and vote on songs to influence their popularity.
- Collect and trade **Music NFTs** representing their favorite tracks.
- Earn rewards for participation and promotion.

This creates a decentralized and scalable platform for the future of music interaction.

---

## **Technical Overview**
### **Smart Contract Architecture**

1. **NFT Contract:** Handles music NFT creation, trading, and royalties.
2. **Game Mechanics Contract:** Facilitates gamified features like music battles and voting.
3. **Rewards Contract:** Manages staking and distribution of rewards to users.
4. **Royalty Contract:** Automate royalty payments to artists and collaborators using event-based triggers.

### **Innovative Features**
- **Dynamic Royalties:** Ensures artists earn a percentage of secondary sales.
- **Voting Mechanism:** Uses blockchain to make results transparent and immutable.
- **Reward System:** Gamifies engagement with tokenized incentives.

---

## **Quickstart Guide**
### **For Users**
1. **Connect Wallet:** Use MetaMask or WalletConnect to interact with the Telegram bot.
2. **Explore Music NFTs:** Mint or buy music NFTs directly via the app.
3. **Vote or Compete:** Engage in music battles or vote on your favorite tracks to earn rewards.

### **For Contributors**
1. Clone the repository:
   ```bash
   git clone https://github.com/Hackathonzx/HarmoniX.git
   cd HarmoniX
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the tests:
   ```bash
   npx hardhat test
   ```

   ```bash
    HarmoniX

    MusicNFT Contract

      ✔ Should approve an artist and mint an NFT (48ms)

      ✔ Should reject unauthorized minting attempts (51ms)

      ✔ Should enforce royalty limits during minting

    GameMechanics Contract

      ✔ Should allow voting on a token and reward the voter

      ✔ Should enforce the cooldown period for voting

      ✔ Should allow the owner to update the cooldown period

    RoyaltyDistribution Contract

      ✔ Should distribute royalties to the NFT owner

      ✔ Should reject royalty distribution for tokens without royalties

    RewardToken Contract

      ✔ Should allow the owner to mint new tokens

      ✔ Should reject minting attempts by non-owners

    Integration Tests

      ✔ Should reward a voter, update votes, and reflect on the leaderboard


  11 passing (2s)
  ```

4. Deploy the contracts:
   ```bash
   npx hardhat run ignition/modules/deploy.js --network opBNBTestnet
   ```

Here are the deployed addresses:

- RewardToken deployed to: 0x602f9D9bb0EBdFC7Fd9CFaC2116aF668974e8ea4
- MusicNFT deployed to: 0x443F37DD5d9CB3273B52344aA15023149Ff9060b
- RoyaltyDistribution deployed to: 0x8eF53c7Fc9Cfb88bb4aB833AF417537E6af1a52f
- GameMechanics deployed to: 0xd109932a2C687F259E842CC160F13E14Da27dC01

Here is the link to the verified contract addresses:

run npx hardhat verify --network opBNBTestnet (contract address) ("argument")

- Successfully verified contract RewardToken on the block explorer.
   - https://testnet.opbnbscan.com/address/0x602f9D9bb0EBdFC7Fd9CFaC2116aF668974e8ea4#code 

- Successfully verified contract MusicNFT on the block explorer.
   - https://testnet.opbnbscan.com/address/0x443F37DD5d9CB3273B52344aA15023149Ff9060b#code

- Successfully verified contract RoyaltyDistribution on the block explorer.
   - https://testnet.opbnbscan.com/address/0x8eF53c7Fc9Cfb88bb4aB833AF417537E6af1a52f#code

- Successfully verified contract GameMechanics on the block explorer.
   - https://testnet.opbnbscan.com/address/0xd109932a2C687F259E842CC160F13E14Da27dC01#code

---

## **API References**
### **Smart Contracts**

#### **NFT Contract**
- `mintNFT(string memory metadataURI)`
  - **Description:** Mints an NFT with the provided metadata.
  - **Arguments:**
    - `metadataURI`: URI for the NFT metadata.
  - **Returns:** NFT ID.

- `setRoyaltyRate(uint256 rate)`
  - **Description:** Updates the royalty percentage for NFTs.
  - **Access:** Admin only.

#### **Game Mechanics Contract**
- `playGame(uint256 gameId)`
  - **Description:** Allows users to participate in a music game.
  - **Arguments:**
    - `gameId`: ID of the game session.

---

## **Instructions**
1. **Deploy Contracts:**
   Deploy the smart contracts on the **opBNB Testnet** using the provided scripts.

2. **Set Up Telegram Bot:**
   - Register a bot via the **Telegram BotFather**.
   - Use the bot token to integrate blockchain features.

3. **Run the Application:**
   Launch the dApp with:
   ```bash
   npm start
   ```

4. **Test Interactions:**
   Use the deployed Telegram bot to mint NFTs, vote, or play games.

---

 