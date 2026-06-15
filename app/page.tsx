import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "24px" }}>
      {/* 顶部导航栏 */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#3b82f6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>天</div>
          <span style={{ fontSize: 20, fontWeight: 600 }}>天下补给站</span>
        </div>
        <button style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 6, fontSize: 14, cursor: "pointer" }}>登录</button>
      </header>

      {/* 首页标题 */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8 }}>欢迎来到天下补给站</h1>
        <p style={{ color: "#666" }}>专业的游戏账号交易平台，安全可靠</p>
      </div>

      {/* 功能入口卡片 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
        <Link href="/haobiao" style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center", textDecoration: "none", color: "#000" }}>
          <p style={{ fontWeight: 500, fontSize: 16 }}>号表</p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>查看所有账号列表</p>
        </Link>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontWeight: 500, fontSize: 16 }}>购物车</p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>查看已选账号</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontWeight: 500, fontSize: 16 }}>个人中心</p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>管理个人信息</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontWeight: 500, fontSize: 16 }}>设置</p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>系统设置</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontWeight: 500, fontSize: 16 }}>帮助</p>
          <p style={{ fontSize: 13, color: "#999", marginTop: 4 }}>使用帮助</p>
        </div>
      </div>

      {/* 平台数据统计 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 64 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontSize: 30, fontWeight: "bold", color: "#2563eb" }}>75+</p>
          <p style={{ fontSize: 13, color: "#999" }}>可用账号</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontSize: 30, fontWeight: "bold", color: "#16a34a" }}>100%</p>
          <p style={{ fontSize: 13, color: "#999" }}>交易安全</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontSize: 30, fontWeight: "bold", color: "#f97316" }}>24h</p>
          <p style={{ fontSize: 13, color: "#999" }}>在线客服</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontSize: 30, fontWeight: "bold", color: "#9333ea" }}>1000+</p>
          <p style={{ fontSize: 13, color: "#999" }}>成交订单</p>
        </div>
      </div>

      {/* 底部版权 */}
      <footer style={{ textAlign: "center", fontSize: 13, color: "#999" }}>
        © 2024 天下补给站 - 专业游戏账号交易平台
      </footer>
    </main>
  );
}
