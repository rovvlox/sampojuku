import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">利用規約</h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            この利用規約（以下「本規約」）は、三歩塾（以下「当塾」）が提供するすべてのサービスの利用条件を定めるものです。
            会員登録またはサービスの利用に際しては、本規約に同意したものとみなします。
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">第1条（適用）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              本規約は、当塾と利用者との間のサービス利用に関わる一切の関係に適用されます。当塾は必要に応じて個別規定を設けることができ、個別規定が本規約と矛盾する場合は個別規定が優先します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第2条（利用登録）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              利用希望者が当塾の定める方法によって利用登録を申請し、当塾が承認することによって利用登録が完了します。虚偽の情報が判明した場合には登録を取り消すことがあります。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第3条（禁止事項）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              利用者は、法令または公序良俗に違反する行為、サービスの運営を妨害する行為、他の利用者の情報を収集する行為、当塾の知的財産権を侵害する行為などを禁止します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第4条（サービスの提供の停止）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当塾は、システム保守や天災、その他やむを得ない事由によりサービスの提供を停止することがあります。停止によって利用者に損害が生じた場合でも、当塾の故意または重過失による場合を除き当塾は責任を負いません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第5条（保証の否認および免責事項）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当塾は、サービスに関して適法性・正確性・有用性を保証しません。利用者自身の判断と責任でサービスをご利用ください。利用者に損害が生じた場合でも、当塾の故意または重過失による場合を除き当塾は責任を負いません。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第6条（規約の変更）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              当塾は、必要と判断した場合には利用者に通知することなく本規約を変更することができます。変更後の規約はウェブサイトに掲載された時点で効力を生じます。
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">第7条（未成年者の利用）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              1. 利用者が18歳未満の未成年者である場合は、必ず法定代理人(親権者または未成年後見人)の同意を得た上で本サービスを利用してください。
              2. 未成年者が本サービスに登録・利用した時点で、法定代理人の同意があったものとみなします。
              3. 当塾は、未成年者の利用に関して法定代理人から問い合わせがあった場合、利用状況や学習履歴等を開示することがあります。
              4. 法定代理人は、未成年者による本サービスの利用を監督し、未成年者が本規約を遵守するよう指導する責任を負うものとします。
              5. 法定代理人の同意なく未成年者が利用していることが判明した場合、当塾は当該利用者の登録を取り消すことができます。
            </p>
          </div> 
          <div>
            <h2 className="font-semibold text-lg">第8条（退会）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              1. 利用者は、当塾所定の方法により、いつでも退会の申請をすることができます。当塾が退会を承認した時点で退会が完了します。
              2. 退会の申請は、お問い合わせフォームまたは登録メールアドレスから jishukatsu.online@gmail.com 宛にご連絡ください。
              3. 月額制サービスの場合、退会申請が当月の末日までに完了した場合、翌月以降の料金は発生しません。ただし、当月分の料金は日割り計算による返金を行いません。
              4. 退会後は、本サービスの一切の機能が利用できなくなり、学習データ、受講履歴等のすべてのデータにアクセスできなくなります。
              5. 退会時に未払いの料金がある場合、利用者は退会後もその支払義務を負うものとします。
              6. 既に支払われた料金は、7日間返金保証の適用期間を除き、理由の如何を問わず返金いたしません。
              7. 当塾は、退会後も法令に基づく保管義務がある情報、または紛争解決のために必要な情報については、一定期間保管することがあります。
              8. 退会後も、本規約の第3条(禁止事項)、第5条(保証の否認および免責事項)、本条、第9条(準拠法および管轄裁判所)の規定は有効に存続するものとします。
            </p>
          </div> 
          <div>
            <h2 className="font-semibold text-lg">第9条（準拠法および管轄裁判所）</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              1. 本規約の準拠法は日本法とし、本規約の解釈および適用については日本法に従うものとします。
              2. 本規約または本サービスに関連して当塾と利用者との間で生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </div> 
        </section>

        <div>
          <h2 className="font-semibold text-lg">附則</h2>
          <p className="text-sm text-[#475569] leading-relaxed">2025年11月1日 施行</p>
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
