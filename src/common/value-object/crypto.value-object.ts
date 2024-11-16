import crypto from "crypto";

export class CryptoValueObject {
  static generateSalt(bytes = 16) {
    return crypto.randomBytes(bytes).toString("hex");
  }

  static generateHashPBKDF2(valor: string, salt: string) {
    return crypto.pbkdf2Sync(valor, salt, 100000, 64, "sha512").toString("hex");
  }

  static compareHashPBKDF2(valor: string, salt: string, hash: string) {
    const newHash = CryptoValueObject.generateHashPBKDF2(valor, salt);
    return newHash === hash;
  }
}
