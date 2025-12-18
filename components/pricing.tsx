import React from 'react';

export function Pricing() {
  const plans = [
    {
      name: 'ライトプラン',
      joinFee: '0円',
      classType: '✕',
      monthly: '5,000',
      featured: false,
    },
    {
      name: 'スタンダードプラン',
      joinFee: '10,000円',
      classType: '○',
      monthly: '10,000',
      featured: true, // 人気プラン
    },
    {
      name: 'プレミアムプラン',
      joinFee: '10,000円',
      classType: '○',
      monthly: '20,000',
      featured: false,
    },
    {
      name: '資格取得プラン',
      joinFee: '20,000円',
      classType: '○',
      monthly: '30,000',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 md:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* ヘッダー：以前のスタイルに戻しました（左揃え、セリフ体、大きなサイズ） */}
        <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.2] text-[#0F172A] mb-20">
          料金
        </h2>

        {/* コンテナ：以前のスタイル（上部のボーダー、白い背景） */}
        <div className="border-t border-[#CBD5E1] pt-12">
          
          {/* グリッドレイアウト：カード型ではなく、テキストの列として配置 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-6">
                  {/* プラン名：以前の「初月・翌月」ラベルのスタイルを適用 */}
                  <div className="mb-3 min-h-[24px]">
                    <span className="text-[14px] text-[#64748B] font-bold uppercase tracking-wider">
                      {plan.name}
                    </span>
                    {plan.featured && (
                      <span className="ml-2 text-[12px] text-blue-600 border border-blue-600 px-2 py-0.5 rounded-full">
                        人気No.1
                      </span>
                    )}
                  </div>

                  {/* 月額料金：以前の「数字」のスタイル（font-mono, tabular-nums）を適用 */}
                  <div className="mb-1 flex items-baseline">
                    <span className="font-mono text-[40px] text-[#0F172A] tabular-nums tracking-tight">
                      ¥{plan.monthly}
                    </span>
                    <span className="text-[16px] text-[#64748B] ml-2">/月</span>
                  </div>
                </div>

                {/* 詳細情報：以前のリストスタイルを適用 */}
                <div className="border-t border-dashed border-[#E2E8F0] pt-6 mt-auto">
                  <dl className="space-y-4 text-[15px] text-[#0F172A] leading-relaxed">
                    <div className="flex justify-between items-center">
                      <dt className="text-[#64748B] text-[13px]">入会金</dt>
                      <dd className="font-mono">{plan.joinFee}</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="text-[#64748B] text-[13px]">個別面談</dt>
                      <dd className="font-mono">{plan.classType}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          {/* 注釈 */}
          <p className="mt-16 text-[14px] text-[#64748B] leading-relaxed">
            ※ すべてのプランに「AI学習計画」「オンライン自習室」「チャット質問対応」が含まれます。
          </p>
        </div>
      </div>
    </section>
  );
}
