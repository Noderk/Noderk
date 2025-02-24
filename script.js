
const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");

async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            walletAddress.textContent = `Connected: ${response.publicKey.toString()}`;
        } catch (err) {
            walletAddress.textContent = "Connection failed. Please try again.";
        }
    } else {
        walletAddress.textContent = "Phantom wallet not found. Please install it.";
    }
}

connectButton.addEventListener("click", connectWallet);
