import bs58 from "bs58";

function walletToBase58() {
  const wallet: number[] = [
    34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122, 15, 172, 63, 62, 153, 150, 99, 255, 202,
    89, 105, 77, 41, 89, 253, 130, 27, 195, 134, 14, 66, 75, 24, 242, 7, 132, 234, 160, 203, 109, 195, 116, 251, 144,
    44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78, 53,
  ];
  const base58 = bs58.encode(Buffer.from(wallet));
  console.log("Base58 Encoded String:", base58);
}

export default walletToBase58;
