# AntiMuteDeafen

> 自動解除伺服器閉麥與耳機的 Vencord 插件

當你被管理員強制閉麥或耳機時，若你擁有足夠權限，插件將立即自動解除。若無權限則不進行任何操作。

---

## 安裝教學

### 步驟一：Clone 專案並安裝依賴

```bash
git clone https://github.com/Vendicated/Vencord
cd Vencord
pnpm install --no-frozen-lockfile
```

### 步驟二：建立插件資料夾並放入檔案

在 Equicord 專案根目錄下，進入 `src/` 資料夾，手動建立以下資料夾結構：

```
src/
└── userplugins/
    └── antiMuteDeafen/
        └── index.ts
```

1. 在 `src/` 內建立 `userplugins` 資料夾（若不存在）
2. 在 `userplugins/` 內建立 `antiMuteDeafen` 資料夾
3. 將 `index.ts` 檔案放入 `antiMuteDeafen/` 資料夾中

目錄結構必須如下：

```
src/userplugins/antiMuteDeafen/index.ts
```

### 步驟三：打包並注入 Discord

```bash
pnpm build
pnpm inject
```

### 步驟四：啟用插件

重啟 Discord 後，前往 **設定 → Plugins**，找到 **AntiMuteDeafen** 並啟用。

插件設定面板提供兩個獨立開關：

| 選項 | 說明 | 預設 |
|------|------|------|
| Anti Mute | 被伺服器閉麥時自動解除 | 開啟 |
| Anti Deafen | 被伺服器耳機時自動解除 | 開啟 |

---

## ⚠️ 警告

本插件會自動化使用者操作，**違反 Discord 服務條款**。

> 使用本插件所造成的任何帳號警告、停權或封禁，**由使用者自行承擔全部責任**，作者不負任何法律或道義責任。

請確保你了解相關風險後再使用。

---

## 作者

**Cody**
