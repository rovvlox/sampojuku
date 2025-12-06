import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">プライバシーポリシー</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            三歩塾（以下「当塾」）は、個人情報の重要性を認識し、以下の方針に基づいて適切な管理と保護に努めます。
            当塾が提供するサービスをご利用いただく際は、本ポリシーに同意のうえご利用ください。
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">1. 個人情報の利用目的</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当塾は、学習プログラムの提供、学習サポート、サービス品質向上、重要なお知らせの配信、各種問い合わせへの対応のために個人情報を利用します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">2. 個人情報の第三者提供</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              法令に基づく場合を除き、事前にご本人の同意を得ることなく第三者へ個人情報を提供することはありません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">3. 個人情報の安全管理</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              個人情報への不正アクセス、紛失、破壊、改ざんおよび漏洩を防ぐため、適切な安全対策を実施します。
              個人情報の保存期間
              当塾は、以下の期間個人情報を保管します。
               ・基本的な登録情報(氏名、連絡先、学習履歴等): 退会後3年間
               ・決済関連情報: 税法に基づき7年間
               ・問い合わせ履歴: 対応完了後1年間
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">4. クッキー（Cookie）等のトラッキング技術について</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              ウェブサイトの利用状況を把握し、サービス改善に役立てるために Cookie等のトラッキング技術を使用する場合があります。ブラウザの設定により Cookie等のトラッキング技術の受け入れを拒否することも可能です。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">5. 個人情報の開示・訂正・削除</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              ご本人からの請求に応じて、保有する*個人情報 の開示・訂正・削除を適切に対応します。窓口は下記お問い合わせ先をご利用ください。(*氏名、連絡先、学習履歴、決済情報)
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">6. プライバシーポリシーの改定</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              法令の改正やサービス内容の変更に応じて、本ポリシーの内容を予告なく改定する場合があります。重要な変更がある場合は、ウェブサイト上でお知らせします。
            </p>
          </div>
        </section>

        <div>
          <h2 className="font-semibold text-lg">お問い合わせ先</h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            メール: jishukatsu.online@gmail.com<br />
            電話: 090-2824-2111（平日10:00〜18:00）
          </p>
        </div>

        <div className="pt-8">
          <Link href="/" className="text-sm text-[#0B6DFF] hover:underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
