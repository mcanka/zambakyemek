import fs from "node:fs";
import type { NextConfig } from "next";

// Windows/Plesk sunucusunda, Git'in dosyaları yazdığı çalışma dizini
// ("C:\inetpub\...") ile Node.js sürecinin kendi iç modül çözümlemesinde
// kullandığı yol ("C:\Inetpub\...") farklı harf büyüklüğünde geliyor.
// Windows için bunlar aynı klasördür, ama webpack mutlak yolu modül
// kimliği olarak kullandığından bu farkı iki AYRI modül olarak görüyor —
// bu da Next.js'in workStore (AsyncLocalStorage) context'inin "/_global-error"
// prerender adımında kopyalanmasına ve "Invariant: Expected workStore to be
// initialized" hatasına yol açıyor. process.cwd()'yi diskteki gerçek
// (case-doğru) yola sabitleyerek tüm iç yol çözümlemelerinin aynı harf
// büyüklüğünü kullanmasını sağlıyoruz.
try {
  const realCwd = fs.realpathSync.native(process.cwd());
  if (realCwd !== process.cwd()) {
    process.chdir(realCwd);
  }
} catch {
  // realpathSync.native Windows dışı ortamlarda farklı davranabilir;
  // başarısız olursa sessizce orijinal cwd ile devam et.
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
