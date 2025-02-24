const connectButton = document.getElementById("connectButton");
const walletAddress = document.getElementById("walletAddress");

async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            walletAddress.textContent = `Connected: ${response.publicKey.toString()}`;
            walletAddress.style.color = "green";
        } catch (err) {
            walletAddress.textContent = "Connection failed. Please try again.";
            walletAddress.style.color = "red";
        }
    } else {
        walletAddress.textContent = "Phantom wallet not found. Please install it.";
        walletAddress.style.color = "yellow";
    }
}

connectButton.addEventListener("click", connectWallet);
