"use server";
import Link from "next/link";

// 与小程序上传字段完全匹配的类型
type GameAccount = {
  uniqueId: string;
  tag: string;
  loginType: string;
  onlineTime: string;
  rank: string;
  kd: number;
  coinM: number;
  triangleCoupon: number;
  limitTriangle: number;
  canBatch: string;
  batchNum: string;
  insurance: number;
  nineGridTrial: number;
  staminaLoad: number;
  ratio: string;
  coinRent: number;
  aw: number;
  sixA: number;
  sixHead: number;
  redBullet: number;
  otherItem: string;
  skin: string;
  banRecord: string;
};

// 空数据，后续小程序对接KV后开启读取
async function getAccountList(): Promise<GameAccount[]> {
  // const list = await kv.get<GameAccount[]>("publishList") || [];
  const list: GameAccount[] = [];
  return list;
}

export default async function HaoBiaoPage() {
  const accountList = await getAccountList();

  return (
    <main style={{ padding: "16px", maxWidth: "1600px", margin: "0 auto" }}>
      {/* 顶部导航 */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none", color: "#333", fontSize: 14 }}>
            <span>← 返回主页</span>
          </Link>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#3b82f6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>天</div>
          <span style={{ fontSize: 20, fontWeight: 600 }}>天下补给站</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 14, color: "#666" }}>4格 6格 9格 全部 通宵号 特价</span>
          <button style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 6, cursor: "pointer" }}>登录</button>
        </div>
      </header>

      {/* 表头筛选文字栏 */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", padding: "10px 0", borderBottom: "1px solid #eee", marginBottom: 12 }}>
        <span style={{ fontSize: 14, color: "#555" }}>唯一编码</span>
        <span style={{ fontSize: 14, color: "#555" }}>标签</span>
        <span style={{ fontSize: 14, color: "#555" }}>登录方式</span>
        <span style={{ fontSize: 14, color: "#555" }}>在线时间</span>
        <span style={{ fontSize: 14, color: "#555" }}>段位</span>
        <span style={{ fontSize: 14, color: "#555" }}>绝密kd</span>
        <span style={{ fontSize: 14, color: "#555" }}>纯币/M</span>
        <span style={{ fontSize: 14, color: "#555" }}>三角券</span>
        <span style={{ fontSize: 14, color: "#555" }}>限时三角券</span>
        <span style={{ fontSize: 14, color: "#555" }}>能否分批</span>
        <span style={{ fontSize: 14, color: "#555" }}>分几批</span>
        <span style={{ fontSize: 14, color: "#555" }}>保险</span>
        <span style={{ fontSize: 14, color: "#555" }}>9格体验券</span>
        <span style={{ fontSize: 14, color: "#555" }}>体力负重</span>
        <span style={{ fontSize: 14, color: "#555" }}>比例</span>
        <span style={{ fontSize: 14, color: "#555" }}>纯币+物资租金</span>
        <span style={{ fontSize: 14, color: "#555" }}>aw</span>
        <span style={{ fontSize: 14, color: "#555" }}>六甲</span>
        <span style={{ fontSize: 14, color: "#555" }}>六头</span>
        <span style={{ fontSize: 14, color: "#555" }}>红弹</span>
        <span style={{ fontSize: 14, color: "#555" }}>其他物资</span>
        <span style={{ fontSize: 14, color: "#555" }}>皮肤</span>
        <span style={{ fontSize: 14, color: "#555" }}>封号记录</span>
        <span style={{ fontSize: 14, color: "#555" }}>操作</span>
      </div>

      {/* 表格区域 */}
      {accountList.length === 0 ? (
        <div style={{ textAlign: "center", padding: "100px 0", color: "#999", fontSize: 16 }}>
          暂无上架账号，请前往小程序提交账号信息，数据将自动同步至此处
        </div>
      ) : (
        <>
          <div style={{ border: "1px solid #eee", borderRadius: 8, overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1600px" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>唯一编码</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>标签</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>登录方式</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>在线时间</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>段位</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>绝密kd</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>纯币/M</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>三角券</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>限时三角券</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>能否分批</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>分几批</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>保险</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>9格体验券</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>体力负重</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>比例</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>纯币+物资租金</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>aw</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>六甲</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>六头</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>红弹</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>其他物资</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>皮肤</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>封号记录</th>
                  <th style={{ padding: 10, border: "1px solid #eee", fontSize: 13, fontWeight: 500 }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {accountList.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.uniqueId}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.tag}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.loginType}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.onlineTime}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.rank}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.kd}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.coinM}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.triangleCoupon}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.limitTriangle}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.canBatch}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.batchNum}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.insurance}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.nineGridTrial}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.staminaLoad}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.ratio}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13, color: "#f26522", fontWeight: 500 }}>{item.coinRent}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13, color: "#ef4444" }}>{item.aw}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.sixA}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.sixHead}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.redBullet}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.otherItem}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.skin}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>{item.banRecord}</td>
                    <td style={{ padding: 10, border: "1px solid #eee", fontSize: 13 }}>
                      <button style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 4, cursor: "pointer" }}>选号</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", padding: "16px 0", fontSize: 14, color: "#666" }}>
            10条/页 共0条
            <div style={{ display: "inline-flex", gap: 8, marginLeft: 12 }}>
              <button disabled style={{ padding: "4px 10px", border: "1px solid #eee", background: "#f8fafc", borderRadius: 4 }}>1</button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
