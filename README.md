これは [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) で作成した Next.js プロジェクトです。

## Getting Started

まず開発サーバーを起動するには次のコマンドを実行します。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとページを確認できます。

このサイトにはリンク集・動画紹介・画像ギャラリー・曲紹介のページが含まれ、Framer Motion と Three.js を利用した実験的ナビゲーションを実装しています。
ページ遷移には Framer Motion のアニメーションを活用し、画像ページではスクロール連動アニメーションを採用しています。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

現在はデフォルトのシステムフォントを使用しています。
背景にはグラデーションを用い、ナビゲーションバーはスクロールに追従するモダンなデザインです。


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
