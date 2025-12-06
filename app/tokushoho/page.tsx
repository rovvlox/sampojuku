import Link from "next/link"

export default function TokushohoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">特定商取引法に基づく表示</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            本ページでは、三歩塾（以下「当塾」）が提供するサービスに関し、特定商取引法に基づく表示を記載しています。
            受講をご検討中の方は事前にご確認ください。
          </p>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">事業者</h2>
            <p className="text-sm text-[#475569]">三歩塾</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">運営責任者</h2>
            <p className="text-sm text-[#475569]">伊藤 翔馬</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">所在地</h2>
            <p className="text-sm text-[#475569]">
              〒150-0002 東京都渋谷区渋谷３丁目２７−１ 2F
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">連絡先</h2>
            <p className="text-sm text-[#475569]">
              メール: jishukatsu.online@gmail.com<br />
              電話: 090-2824-2111（平日10:00〜18:00）
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">販売価格</h2>
            <p className="text-sm text-[#475569]">
              各サービスページに税込価格を記載しています。お支払い時に別途手数料が発生する場合は、その旨を明記いたします。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">お支払い方法</h2>
            <p className="text-sm text-[#475569]">
              クレジットカード決済、銀行振込、コンビニ決済に対応しています。詳細はお申し込み時にご案内いたします。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">役務の提供時期</h2>
            <p className="text-sm text-[#475569]">
              お申し込み後、初回ガイダンスの実施日をメールにてお知らせし、ガイダンス完了後7営業日以内にサービスを提供します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">返品・キャンセル</h2>
            <p className="text-sm text-[#475569]">
              サービスの性質上、提供開始後のキャンセルは原則お受けできません。ただし、7日間返金保証の範囲内であれば所定の条件に基づき返金対応いたします。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">動作環境</h2>
            <p className="text-sm text-[#475569]">
              オンライン講義および学習サポートは PC またはタブレット端末と安定したインターネット環境が必要です。
            </p>
          </div>
        </section>

        <div className="pt-8">
          <Link href="/" className="text-sm text-[#0B6DFF] hover:underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
