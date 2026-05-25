This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `MICROCMS_SERVICE_DOMAIN` | MicroCMS のサービスドメイン (`chameleon-wind-orchestra`) |
| `MICROCMS_API_KEY` | MicroCMS の管理画面で発行する API キー (Service settings → API keys)。read-only 推奨 |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | お問い合わせフォームの送信先となる [Web3Forms](https://web3forms.com/) のアクセスキー。送信先メアド (`chameleon.wind70@gmail.com`) に紐づく |

`.env.local` は git 管理外。Vercel デプロイでは Project Settings → Environment Variables に同じ値を登録する。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## コンテンツ更新フロー (MicroCMS → Vercel 自動再ビルド)

MicroCMS でコンテンツを更新すると、Vercel が自動で再ビルドし、数分以内に本番に反映される運用になっている。**Vercel ダッシュボードでの手動 Redeploy は基本的に不要**。

### 仕組み

```
MicroCMS で公開／更新／削除
        │
        ▼   Outgoing Webhook (POST)
Vercel Deploy Hook  (https://api.vercel.com/v1/integrations/deploy/…)
        │
        ▼
main ブランチが自動再ビルド → 本番反映 (1〜2 分)
```

### 設定済みの API

下記 4 つの MicroCMS API すべてに、同じ Vercel Deploy Hook URL を指す Outgoing Webhook が登録済み:

- `concerts` (演奏会)
- `members` (団員)
- `news` (お知らせ)
- `hero-images` (Hero スライドショー)

発火タイミング: 公開時 / 更新時 / 公開停止時 / 削除時 すべて。

### 編集者の操作手順

1. MicroCMS 管理画面で対象記事を編集
2. **公開** ボタンを押す
3. Vercel の **Deployments** タブを開くと、数秒以内に新しいビルドが起動
4. ビルド完了 (約 1〜2 分) 後、本番ドメインで変更を確認

### トラブルシューティング

| 症状 | 確認 / 対処 |
|---|---|
| 公開しても本番が変わらない | Vercel Deployments タブを開き、新しいビルドが走っているか確認 |
| ビルドは走ったが内容が古い | ハードリロード (Cmd+Shift+R)。ブラウザキャッシュの可能性 |
| ビルドが失敗している | Deployments の該当ビルドのログを開き、エラーを確認。必要なら手動で **Redeploy (Use existing Build Cache を外す)** |
| Webhook 自体が動いていない | MicroCMS の API 設定 → Webhook 画面で「最近の送信ログ」を確認。Vercel 側 Deploy Hook URL が無効化されていないかも確認 |

### Webhook を再設定したいとき

Vercel Deploy Hook URL を作り直す場合は、4 つの API 全ての Webhook を新しい URL に書き換える必要がある。一度に書き換えるためにも、URL は安全な場所に控えておく。

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
