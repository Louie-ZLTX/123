import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "天下补给站 - 游戏账号交易平台",
  description: "专业游戏账号交易平台，安全可靠",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
